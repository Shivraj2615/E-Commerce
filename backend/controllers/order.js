const Order = require("../models/order");
const User = require("../models/user");
const Book = require("../models/books");

//User
module.exports.getMyOrders = async (req, res) => {
  const userId = req.user.id;

  const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });

  return res.status(200).json({
    count: orders.length,
    orders,
  });
};

module.exports.addOrder = async (req, res) => {
  const userId = req.user.id;

  // 1. Fetch user with cart
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!user.cart || user.cart.length === 0) {
    return res
      .status(400)
      .json({ message: "Cart is empty. Cannot place order." });
  }

  const orderItems = [];
  let totalAmount = 0;

  // 2. Convert cart → order items (snapshot)
  for (const item of user.cart) {
    const book = await Book.findById(item.book);
    if (!book) {
      return res.status(404).json({ message: "One or more books not found" });
    }

    orderItems.push({
      bookId: book._id,
      title: book.title,
      price: book.price,
      quantity: item.quantity,
    });

    totalAmount += book.price * item.quantity;
  }

  // 3. Create order
  const newOrder = new Order({
    user: userId,
    items: orderItems,
    totalAmount,
    orderStatus: "placed",
    paymentStatus: "pending",
  });

  await newOrder.save();

  // 4. Clear cart
  user.cart = [];
  await user.save();

  return res.status(201).json({
    message: "Order placed successfully",
    order: newOrder,
  });
};

module.exports.cancelOrder = async (req, res) => {
  const userId = req.user.id;
  const { orderId } = req.params;

  // 1. Find order
  const order = await Order.findById(orderId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  // 2. Ownership check
  if (order.user.toString() !== userId) {
    return res.status(403).json({ message: "Unauthorized access" });
  }

  // 3. Cannot cancel delivered order
  if (order.orderStatus === "delivered") {
    return res
      .status(400)
      .json({ message: "Delivered orders cannot be cancelled" });
  }

  // 4. Cancel order
  order.orderStatus = "cancelled";
  await order.save();

  return res.status(200).json({
    message: "Order cancelled successfully",
    order,
  });
};

//Admin
module.exports.getAllOrders = async (req, res) => {
  const { status } = req.query;

  const filter = {};
  if (status) {
    filter.orderStatus = status;
  }

  const orders = await Order.find(filter)
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  return res.status(200).json({
    count: orders.length,
    orders,
  });
};

module.exports.updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  // Allowed status values
  const allowedStatuses = ["placed", "shipped", "delivered", "cancelled"];

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid order status" });
  }

  const order = await Order.findById(orderId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  // Prevent invalid transitions
  if (order.orderStatus === "delivered") {
    return res
      .status(400)
      .json({ message: "Delivered order cannot be updated" });
  }

  if (order.orderStatus === "cancelled") {
    return res
      .status(400)
      .json({ message: "Cancelled order cannot be updated" });
  }

  order.orderStatus = status;
  await order.save();

  return res.status(200).json({
    message: "Order status updated successfully",
    order,
  });
};
