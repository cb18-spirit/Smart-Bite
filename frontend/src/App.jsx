// src/App.jsx

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(loadingTimer);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <ErrorBoundary>
      <>
        <Navbar /> {/* Always visible at the top */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              localStorage.getItem("user") ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </>
    </ErrorBoundary>
  );
}

export default App;
