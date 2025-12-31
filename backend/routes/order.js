const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");
const { isLoggedIn, isAdmin } = require("../middleware/auth");
const wrapAsync = require("../utils/wrapAsync.js");

//User Orders Routes
router.get("/user", isLoggedIn, wrapAsync(orderController.getMyOrders));
router.post("/", isLoggedIn, wrapAsync(orderController.addOrder));
router.put("/:orderId", isLoggedIn, wrapAsync(orderController.cancelOrder));

//Admin Orders Routes
router.get("/", isLoggedIn, isAdmin, wrapAsync(orderController.getAllOrders));
router.put(
  "/:orderId/status",
  isLoggedIn,
  isAdmin,
  wrapAsync(orderController.updateOrderStatus)
);

module.exports = router;
