const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// ✅ REGISTER USER
const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({ name, email, password: hashedPassword, role });

        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ LOGIN USER
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// 🔐 Generate OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// ✉️ Send OTP to Email
const sendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name: "Guest", email, oauthProvider: "none" });
    }

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your SmartBite OTP",
      html: `<h1>${otp}</h1><p>Valid for 10 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error sending OTP" });
  }
};

// ✅ Verify OTP
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.otp = null;
    user.otpExpires = null;
    await user.save();

    const token = generateToken(user._id);

    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "OTP verification failed" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  sendOTP,
  verifyOTP,
};
