const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");
const { isLoggedIn } = require("../middleware/auth");
const wrapAsync = require("../utils/wrapAsync.js");

//GET LOGGED-IN USER
router.get(
  "/auth/me",
  isLoggedIn,
  wrapAsync((req, res) => {
    res.status(200).json({
      user: req.user,
    });
  })
);

router.post("/register", wrapAsync(authController.register));

router.post("/login", wrapAsync(authController.login));

router.post("/logout", isLoggedIn, wrapAsync(authController.logout));

module.exports = router;
