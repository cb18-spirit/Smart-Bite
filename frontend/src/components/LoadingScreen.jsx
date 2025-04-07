import React from "react";
import "../components/styles.css"; // Ensure styles are loaded
import logo from "../assets/smartbite-logo.jpg"; // Make sure the logo path is correct

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
