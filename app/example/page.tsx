
"use client"
import React, { useState } from "react";


import { validateEmail, validatePassword, validateName, validateCustom } from "email-password-validator"; 


export default function ExampleForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const emailResult = validateEmail(email);
  const passwordResult = validatePassword(password);
  const nameResult = validateName(name);
  const usernameResult = validateCustom(
    username,
    (val) => /^[a-zA-Z0-9_]{3,15}$/.test(val), // custom regex for username
    "Username must be 3-15 characters, letters/numbers/underscore only"
  );



  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Validation Example</h2>

      {/* Name */}
      <div style={{ marginBottom: "1rem" }}>
        <label>Name</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {!nameResult.valid && <p style={{ color: "red" }}>{nameResult.error}</p>}
      </div>

      {/* Email */}
      <div style={{ marginBottom: "1rem" }}>
        <label>Email</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {!emailResult.valid && <p style={{ color: "red" }}>{emailResult.error}</p>}
      </div>

      {/* Password */}
      <div style={{ marginBottom: "1rem" }}>
        <label>Password</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {!passwordResult.valid && (
          <ul style={{ color: "red", marginTop: "4px", paddingLeft: "16px" }}>
            {passwordResult.errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Username (Custom validator) */}
      <div style={{ marginBottom: "1rem" }}>
        <label>Username</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {!usernameResult.valid && <p style={{ color: "red" }}>{usernameResult.error}</p>}
      </div>

      <button
        disabled={!emailResult.valid || !passwordResult.valid || !nameResult.valid || !usernameResult.valid}
        style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", cursor: "pointer" }}
      >
        Submit
      </button>
    </div>
  );
}
