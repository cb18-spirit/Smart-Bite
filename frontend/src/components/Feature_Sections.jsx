// src/components/FeatureSections.jsx
import React from "react";
import "./FeatureSections.css"; // You'll create this next

const FeatureSections = () => {
  return (
    <div className="features-scroll-wrapper">
      <section className="feature-section">
        <h2>Pre-Book Your Meals</h2>
        <p>Avoid queues. Select meals in advance from the daily menu.</p>
      </section>

      <section className="feature-section">
        <h2>No More Waiting in Line</h2>
        <p>AI assigns optimal time slots to prevent rush.</p>
      </section>

      <section className="feature-section">
        <h2>Quick, Cashless Checkout</h2>
        <p>Pay securely using UPI, QR, or Wallets.</p>
      </section>

      <section className="feature-section">
        <h2>One Tap Google Login</h2>
        <p>Sign in quickly and securely with Google.</p>
      </section>

      <section className="feature-section coming-soon">
        <h2>Personalized Dashboard</h2>
        <p>Coming soon: your own meal analytics, past orders, and feedback tools.</p>
      </section>
    </div>
  );
};

export default FeatureSections;
