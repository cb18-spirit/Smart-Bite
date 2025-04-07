const Meal = require("../models/Meal");

// ✅ Get all meals
const getMeals = async (req, res) => {
    try {
        const meals = await Meal.find();
        res.json(meals);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Add a new meal
const addMeal = async (req, res) => {
    const { name, price, description, category } = req.body;
    try {
        const newMeal = await Meal.create({ name, price, description, category });
        res.status(201).json(newMeal);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Update a meal
const updateMeal = async (req, res) => {
    try {
        const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMeal);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Delete a meal
const deleteMeal = async (req, res) => {
    try {
        await Meal.findByIdAndDelete(req.params.id);
        res.json({ message: "Meal deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getMeals, addMeal, updateMeal, deleteMeal };
