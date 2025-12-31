const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 0, max: 5 },
        comment: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Book = new mongoose.model("Book", bookSchema);
module.exports = Book;
