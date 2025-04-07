const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    mealId: { type: mongoose.Schema.Types.ObjectId, ref: "Meal", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Completed", "Cancelled"], default: "Pending" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
