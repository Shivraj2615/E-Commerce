const Book = require("../models/books");
const User = require("../models/user");

module.exports.addToCart = async (req, res) => {
  const { bookId, quantity = 1 } = req.body;
  const userId = req.user.id;
  if (!bookId || quantity <= 0) {
    return res
      .status(400)
      .json({ message: "Book ID and quantity are required" });
  }
  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  const user = await User.findById(userId);
  // console.log(user);
  const cartItem = user.cart.find((item) => item.book.toString() === bookId);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    user.cart.push({ book: bookId, quantity });
  }
  await user.save();
  res.status(200).json({ message: "Book added to cart successfully" });
};

module.exports.getCartItems = async (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId).populate("cart.book");
  if (!user) {
    return res.status(400).json({ message: "User Not Found", cart: [] });
  }
  res.status(200).json(user.cart);
};

module.exports.updateCartItem = async (req, res) => {
  const { bookId } = req.params;
  const { quantity } = req.body;
  const userId = req.user.id;
  if (!bookId || quantity <= 0) {
    return res
      .status(400)
      .json({ message: "Book ID and quantity are required" });
  }
  const user = await User.findById(userId);
  const cartItem = user.cart.find((item) => item.book.toString() === bookId);
  if (!cartItem) {
    return res.status(404).json({ message: "Item not found in cart" });
  }
  cartItem.quantity = quantity;
  await user.save();
  res.status(200).json({ message: "Cart item updated successfully" });
};

module.exports.removeCartItem = async (req, res) => {
  const { bookId } = req.params;
  const userId = req.user.id;
  const user = await User.findById(userId);
  user.cart = user.cart.filter((item) => item.book.toString() !== bookId);
  await user.save();
  res.status(200).json({ message: "Cart item removed successfully" });
};
