<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios for HTTP requests

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [message, setMessage] = useState(""); // New message state

  const sendOTP = async () => {
    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setMessage("❌ Invalid email format");
      return;
    }

    try {
      // Send OTP request to backend
      const response = await axios.post("http://localhost:5000/api/auth/send-otp", { email });
      setMessage(response.data.message);  // Show success message from backend
      setOtpSent(true);  // OTP has been sent
    } catch (error) {
      setMessage("❌ Error sending OTP. Please try again.");
    }
  };

  const verifyOTP = async () => {
    if (enteredOTP === generatedOTP) {
      try {
        // Verify OTP with the backend
        const response = await axios.post("http://localhost:5000/api/auth/verify-otp", { email, otp: enteredOTP });
        setMessage("✅ OTP Verified!");
        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/dashboard");
      } catch (error) {
        setMessage("❌ Invalid OTP. Please try again.");
      }
    } else {
      setMessage("❌ OTP mismatch. Please check and try again.");
    }
=======
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    localStorage.setItem("user", JSON.stringify(decoded));
    navigate("/dashboard");
  };

  const handleError = () => {
    alert("Login Failed 😞");
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
  };

  return (
    <div style={styles.container}>
<<<<<<< HEAD
      <h2 style={styles.heading}>SmartBite 🍽️ – Email OTP Login</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      {!otpSent ? (
        <button style={styles.button} onClick={sendOTP} disabled={!email}>
          Send OTP
        </button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={enteredOTP}
            onChange={(e) => setEnteredOTP(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={verifyOTP}>
            Verify OTP
          </button>
        </>
      )}

      {/* Display messages */}
      {message && <p style={styles.message}>{message}</p>}
=======
      <h2 style={styles.heading}>Welcome to SmartBite 🍽️</h2>

      <div
        style={styles.googleButton}
        onClick={() => {
          document.getElementById("googleLogin").click();
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#f5f5f5";
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google Logo"
          style={styles.googleLogo}
        />
        <span>Sign in with Google</span>
      </div>

      <div style={{ display: "none" }}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
          auto_select={false}
          cancel_on_tap_outside={false}
          type="standard"
          theme="outline"
          size="large"
          width="100"
          id="googleLogin"
        />
      </div>
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    paddingTop: "80px",
  },
  heading: {
    fontSize: "28px",
<<<<<<< HEAD
    marginBottom: "30px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    width: "260px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    backgroundColor: "#1093e5",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
  message: {
    fontSize: "16px",
    marginTop: "10px",
    color: "#d9534f", // Red color for error messages
    fontWeight: "bold",
=======
    marginBottom: "40px",
  },
  googleButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 20px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
  googleLogo: {
    width: "24px",
    height: "24px",
>>>>>>> 6a1ff8f14e04ef82f0818c02d772061bc8935033
  },
};

export default Login;
