const Order = require("../models/Order");

// ✅ Place an order
const placeOrder = async (req, res) => {
    try {
        const { mealId, quantity, totalPrice, status } = req.body;
        const order = await Order.create({ user: req.user.id, mealId, quantity, totalPrice, status });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Get user orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate("mealId");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Update order status
const updateOrderStatus = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { placeOrder, getOrders, updateOrderStatus };
