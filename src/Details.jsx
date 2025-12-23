import React, { useState } from "react";

export default function Details() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const containerStyle = {
    backgroundColor: "#2c4895ff",
    padding: "30px",
    borderRadius: "20px",
    width: "400px",
    margin: "0 auto",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #ccc",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={containerStyle}>
        {!submitted ? (
          <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
              <label>Firstname</label>
              <input
                style={inputStyle}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter"
                required
              />

              <label>Mobile</label>
              <input
                style={inputStyle}
                type="number"
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter"
                required
              />

              <label>Email</label>
              <input
                style={inputStyle}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter"
                required
              />

              <button
                type="submit"
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#4c6fff",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>Submitted Details</h1>
            <h2>Name: {name}</h2>
            <h2>Mobile: {mobile}</h2>
            <h2>Email: {email}</h2>
          </>
        )}
      </div>
    </div>
  );
}
