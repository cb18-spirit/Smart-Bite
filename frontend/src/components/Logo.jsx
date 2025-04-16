// src/components/Logo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import smartbiteLogo from "../assets/smartbite-logo.jpg";


const Logo = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} style={styles.logoContainer}>
      <img
        src="frontend\src\assets\smartbite-logo.jpg"
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
