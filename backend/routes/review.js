const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");
const { isLoggedIn } = require("../middleware/auth");

// Add review to book
router.post("/:id", isLoggedIn, reviewController.addReview);

module.exports = router;
