const express = require("express");
const { placeOrder, getOrders, updateOrderStatus } = require("../controllers/orderController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, placeOrder); // Place an order
router.get("/", protect, getOrders); // Get user orders
router.put("/:id", protect, updateOrderStatus); // Update order status

module.exports = router;
