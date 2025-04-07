const express = require("express");
const { getUPIDetails, confirmPayment } = require("../controllers/paymentController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getUPIDetails); // Get UPI QR & ID
router.post("/confirm", protect, confirmPayment); // User confirms payment

module.exports = router;
