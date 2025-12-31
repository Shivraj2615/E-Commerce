const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

// Route imports
const authRoutes = require("./routes/auth");
const booksRoutes = require("./routes/books");
const cartRoutes = require("./routes/cart");
const wishlistRoutes = require("./routes/wishlist");
const orderRoutes = require("./routes/order");
const reviewRoutes = require("./routes/review");

const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api/books", booksRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);

//Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("🔥 Global Error Handler");
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

app.get("/", (req, res) => {
  res.send("BookNest API is running...");
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
