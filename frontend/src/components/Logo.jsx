// src/components/Logo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} style={styles.logoContainer}>
      <img
        src="/logo.png" // 🖼️ Replace with your actual logo path
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
