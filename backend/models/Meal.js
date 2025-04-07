const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, enum: ["Breakfast", "Lunch", "Dinner", "Snacks"], required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Meal", mealSchema);
