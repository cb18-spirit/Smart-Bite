const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/meals", require("./routes/mealRoutes"));

app.use("/api/auth", authRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/payments", paymentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
