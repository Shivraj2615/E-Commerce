const Book = require("../models/books");

module.exports.indexPage = async (req, res) => {
  const { search } = req.query;
  let allBooks;

  if (search) {
    const regex = new RegExp(search, "i");
    allBooks = await Book.find({ title: regex });
    if (allBooks.length === 0) {
      return res.status(200).json([]);
    }
  } else {
    allBooks = await Book.find();
    if (allBooks.length === 0) {
      return res.status(200).json([]);
    }
  }
  res.status(200).json(allBooks);
};

module.exports.showBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ error: "Book not found." });
  }
  res.status(200).json(book);
};

module.exports.createBook = async (req, res) => {
  const { title, author, description, image, price, quantity } = req.body;
  if (!title || !author || !description || !price || !quantity) {
    return res.status(400).json({
      error: "Title, author, description, price, and quantity are required.",
    });
  }
  const newBook = new Book({
    title,
    author,
    description,
    image,
    price,
    quantity,
  });
  await newBook.save();
  res.status(201).json(newBook);
};

module.exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;
  const updatedBook = await Book.findByIdAndUpdate(
    id,
    { ...updatedFields },
    { new: true }
  );
  if (!updatedBook) {
    return res.status(404).json({ error: "Book not found." });
  }
  res.status(200).json(updatedBook);
};

module.exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await Book.findByIdAndDelete(id);
  if (!deletedBook) {
    return res.status(404).json({ error: "Book not found." });
  }
  res.status(200).json({ message: "Book deleted successfully." });
};
