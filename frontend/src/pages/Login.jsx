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
  };

  return (
    <div style={styles.container}>
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
  },
};

export default Login;
