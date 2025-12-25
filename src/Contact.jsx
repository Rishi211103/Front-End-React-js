import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p>
        Have questions, suggestions, or feedback?  
        We’d love to hear from you!
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> support@moviesda.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
      </div>

      <button className="contact-btn">Send Message</button>
    </div>
  );
}
