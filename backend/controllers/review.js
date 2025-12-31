const Books = require("../models/books");

module.exports.addReview = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const { rating, comment } = req.body;

  if (!rating || !comment) {
    return res.status(400).json({ message: "Rating and comment are required" });
  }

  const book = await Books.findById(id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  const newReview = {
    owner: userId,
    rating,
    comment,
  };

  book.reviews.push(newReview);
  await book.save();

  res.status(200).json(book);
};
