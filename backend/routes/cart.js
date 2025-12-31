const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");
const { isLoggedIn } = require("../middleware/auth");
const wrapAsync = require("../utils/wrapAsync");

router.get("/", isLoggedIn, wrapAsync(cartController.getCartItems));
router.post("/", isLoggedIn, wrapAsync(cartController.addToCart));
router.put("/:bookId", isLoggedIn, wrapAsync(cartController.updateCartItem));
router.delete("/:bookId", isLoggedIn, wrapAsync(cartController.removeCartItem));

module.exports = router;
