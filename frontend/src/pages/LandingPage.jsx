import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import smartbiteLogo from '../assets/smartbite-logo.jpg'; 


// Image imports for the carousel
import image1 from "../assets/Rava_idli.jpg";
import image2 from "../assets/masala_dosa.jpg";
import image3 from "../assets/puliogare.jpg";
import image4 from "../assets/upma.jpg";
import image5 from "../assets/vada.jpg";
import image6 from "../assets/rice_and_sambar.jpg";
import image7 from "../assets/Gobi_manchurian.jpg";
import image8 from "../assets/Cake.jpg";
import image9 from "../assets/Fried_rice.jpg";
import image10 from "../assets/Burger.jpg";

import Footer from "../components/Footer";  // Correct relative path

const images = [
  { src: image1, name: "Rava Idli" },
  { src: image2, name: "Masala Dosa" },
  { src: image3, name: "Puliogare" },
  { src: image4, name: "Upma" },
  { src: image5, name: "Vada" },
  { src: image6, name: "Rice & Sambar" },
  { src: image7, name: "Gobi Manchurian" },
  { src: image8, name: "Cake" },
  { src: image9, name: "Fried Rice" },
  { src: image10, name: "Burger" },
];

const ImageCarousel = ({ images }) => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel-images">
          {images.concat(images).map((image, index) => (
            <div key={index} className="carousel-image">
              <img src={image.src} alt={image.name} />
              <div className="image-text">{image.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [isEmailSignUp, setIsEmailSignUp] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleGoogleSignUp = (response) => {
    console.log("Google Sign-Up Response:", response);
    navigate("/dashboard");
  };

  const toggleSignUpMethod = () => {
    setIsEmailSignUp((prev) => !prev);
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include: \n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character"
      );
      return;
    }

    setPasswordError("");
    console.log("Email Sign-Up:", email, password);
    navigate("/dashboard");
  };

  return (
    <div className="landing-container">
      

      <div className="site-title">
      <img
  src={smartbiteLogo}
  alt="SmartBite Logo"
  className="logo"
  style={{ width: '100px', height: 'auto' }}
/>


        </div>


      {/* Carousel Section */}
      <ImageCarousel images={images} />

      {/* Feature Overview Section */}
      <div className="features-section">
        <h2>Discover the Future of Canteen Dining with SmartBite 🍽️</h2>
        <p>
          SmartBite is an AI-driven platform that revolutionizes the way we
          experience meals at canteens. From pre-booking meals to efficient
          seat allocation, it’s designed to optimize every aspect of the dining
          experience.
        </p>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-content">
              <h3>🍽️ AI Meal Pre-Booking</h3>
              <p>Pre-order meals and get personalized recommendations.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-content">
              <h3>⌛ AI Time Slot Allocation</h3>
              <p>Prevent overcrowding and ensure timely meals.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-content">
              <h3>💰 Smart Billing & Payments</h3>
              <p>Quick payments through QR, UPI, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
