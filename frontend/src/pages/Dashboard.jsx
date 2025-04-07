// src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <span style={styles.navItem} onClick={() => navigate("/menu")}>Menu</span>
        <span style={styles.navItem} onClick={() => navigate("/orders")}>Orders</span>
        <span style={{ ...styles.navItem, color: "red" }} onClick={handleLogout}>Logout</span>
      </div>

      <h1>Welcome, {user?.name || "Guest"} 👋</h1>
      <p>This is your personalized dashboard.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "30px",
  },
  navItem: {
    fontSize: "18px",
    cursor: "pointer",
    padding: "10px 15px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    backgroundColor: "#f0f0f0",
  },
};

export default Dashboard;
