<<<<<<< HEAD
// context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
=======
import { createContext, useContext, useEffect, useState } from "react";
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
=======
    // Check if user is already logged in
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
export default AuthContext;
=======
export const useAuth = () => useContext(AuthContext);
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
