import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.navbar}>
      {/* Left side: Logo */}
      <div style={styles.leftSection}>
        <img
          src="/logo.png" // make sure this path is correct
          alt="SmartBite Logo"
          style={styles.logo}
          onClick={() => navigate("/")}
        />
      </div>

      {/* Right side: Login & Sign Up */}
      <div style={styles.rightSection}>
        <button style={styles.navButton} onClick={() => navigate("/login")}>
          Login
        </button>
        <button style={styles.navButton} onClick={() => navigate("/login")}>
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
