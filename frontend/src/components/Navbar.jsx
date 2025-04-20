import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import logo from "../assets/smartbite-logo.jpg"; // Import the logo correctly
=======
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.navbar}>
<<<<<<< HEAD
      {/* Left side: Logo and Text */}
      <div style={styles.leftSection}>
        <img
          src={logo}  // Use the imported logo here
          alt="SmartBite Logo"
          style={styles.logo}
          onClick={() => navigate("/")}  // Navigate to the homepage
        />
        <div style={styles.textWrapper}>
          <span style={styles.smartText}>Smart</span>
          <span style={styles.biteText}>Bite</span>
        </div>
=======
      {/* Left side: Logo */}
      <div style={styles.leftSection}>
        <img
          src="/logo.png" // make sure this path is correct
          alt="SmartBite Logo"
          style={styles.logo}
          onClick={() => navigate("/")}
        />
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
      </div>

      {/* Right side: Login & Sign Up */}
      <div style={styles.rightSection}>
        <button style={styles.navButton} onClick={() => navigate("/login")}>
          Login
        </button>
<<<<<<< HEAD
        <button style={styles.navButton} onClick={() => navigate("/signup")}>
=======
        <button style={styles.navButton} onClick={() => navigate("/login")}>
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
          Sign Up
        </button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "70px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    boxShadow: "0 2px 5px rgba(16, 147, 229, 0.55)",
    zIndex: 1000,
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
  },
<<<<<<< HEAD
  textWrapper: {
    display: "flex",
    marginLeft: "10px", // Space between logo and text
  },
  smartText: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#1E3A8A", // Smart Blue
  },
  biteText: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#10B981", // Bite Green
  },
=======
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
  rightSection: {
    display: "flex",
    gap: "15px",
  },
  logo: {
    height: "40px",
    cursor: "pointer",
  },
  navButton: {
    padding: "8px 16px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Navbar;
