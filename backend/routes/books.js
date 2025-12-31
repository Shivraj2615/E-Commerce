const express = require("express");
const router = express.Router();
const bookController = require("../controllers/books.js");
const { isLoggedIn, isAdmin } = require("../middleware/auth.js");
const wrapAsync = require("../utils/wrapAsync");

//Home Route
router.get("/", wrapAsync(bookController.indexPage));

//Show Route
router.get("/:id", wrapAsync(bookController.showBook));

//Create Route
router.post("/", isLoggedIn, isAdmin, wrapAsync(bookController.createBook));

//Update Route
router.put("/:id", isLoggedIn, isAdmin, wrapAsync(bookController.updateBook));

//Delete
router.delete("/:id", isLoggedIn, isAdmin, wrapAsync(bookController.deleteBook));

module.exports = router;
