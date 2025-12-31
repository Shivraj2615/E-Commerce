const User = require("../models/user");

module.exports.getWishlist = async (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId).populate("wishlist.book");
  res.status(200).json(user.wishlist || []);
};

module.exports.addToWishlist = async (req, res) => {
  const userId = req.user.id;
  const { bookId } = req.params;
  const user = await User.findById(userId);
  const exists = user.wishlist.some((item) => item.book.toString() === bookId);
  if (exists) {
    return res.status(400).json({ message: "Book already in wishlist" });
  }

  user.wishlist.push({ book: bookId });
  await user.save();
  return res.status(200).json(user.wishlist);
};

module.exports.removeFromWishlist = async (req, res) => {
  const userId = req.user.id;
  const { bookId } = req.params;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.wishlist = user.wishlist.filter(
    (item) => item.book.toString() !== bookId
  );
  await user.save();
  return res.status(200).json(user.wishlist);
};
