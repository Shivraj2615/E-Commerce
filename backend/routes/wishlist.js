const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlist");
const { isLoggedIn } = require("../middleware/auth");
const wrapAsync = require("../utils/wrapAsync");

router.get("/", isLoggedIn, wrapAsync(wishlistController.getWishlist));
router.post(
  "/:bookId",
  isLoggedIn,
  wrapAsync(wishlistController.addToWishlist)
);
router.delete(
  "/:bookId",
  isLoggedIn,
  wrapAsync(wishlistController.removeFromWishlist)
);

module.exports = router;
