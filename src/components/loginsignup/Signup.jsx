import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-signup.css";

// Hardcoded users array (used for demonstration)
let users = [
  { name: "John", email: "john@example.com", password: "123456" },
  { name: "Jane", email: "jane@example.com", password: "password123" }
];

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email already exists in the array
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert("Email is already registered!");
      return;
    }

    // Save the new user to the hardcoded array
    const newUser = { name, email, password };
    users.push(newUser); // Add the new user to the array

    alert("Signup successful!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" id="kaamkabutton">Signup</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Signup;
