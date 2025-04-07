const express = require("express");
const { getMeals, addMeal, updateMeal, deleteMeal } = require("../controllers/mealController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getMeals); // Get all meals
router.post("/", protect, addMeal); // Add a new meal (Admin Only)
router.put("/:id", protect, updateMeal); // Update a meal
router.delete("/:id", protect, deleteMeal); // Delete a meal

module.exports = router;
