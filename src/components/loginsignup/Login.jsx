import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-signup.css";

// Hardcoded users array (used for demonstration)
const users = [
  { name: "John", email: "john@example.com", password: "123456" },
  { name: "Jane", email: "jane@example.com", password: "password123" },
  {name: "Vinayak", email: "vinayak@gmail.com", password: "vinayak123"}
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the user with matching email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert("Login successful");
      navigate("/"); // Redirect to home page after login
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" id="kaamkabutton">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Signup here</a>
      </p>
    </div>
  );
};

export default Login;
