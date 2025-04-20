// src/components/Logo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import smartbiteLogo from "../assets/smartbite-logo.jpg";

=======
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} style={styles.logoContainer}>
      <img
<<<<<<< HEAD
        src="frontend\src\assets\smartbite-logo.jpg"
=======
        src="/logo.png" // 🖼️ Replace with your actual logo path
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
        alt="SmartBite Logo"
        style={styles.logo}
      />
    </div>
  );
};

const styles = {
  logoContainer: {
    position: "fixed",
    top: "20px",
    left: "20px",
    cursor: "pointer",
    zIndex: 9999,
  },
  logo: {
    height: "50px",
  },
};

export default Logo;
