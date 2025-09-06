import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// This prop will be passed down from App.jsx to update the parent state
const LoginPage = ({ handleLoginSuccess }) => {
  const navigate = useNavigate();

  // Form state for email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3790/api/auth/loginyes ", // backend login route
        formData,
        { withCredentials: true }
      );

      // On successful login, call the function passed from App.jsx
      handleLoginSuccess(res.data);

      // The navigation will now be handled automatically by the router in App.jsx

    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-up">
      <div className="right-side">
        <h1>Welcome Back</h1>
        <p>Login and continue growing!</p>
        <div className="inputs">
          <input className='input' type='text' placeholder='Email'/>
          <input className='input' type='text' placeholder='Password'/>
        </div>
        <div className="signup-btn">
        <button>Login</button>
        <p className='para'>Or continue with</p>
        <div className="acc-btns">
          <button>Facebook</button>
          <button>Google</button>
          <button>Apple</button>
        </div>
      </div>
      </div>

      <div className="left-side">
        <img src="/Frame 120.png" alt="Future" />
        <h1>Welcome to the Future</h1>
        <p>
          Your skills. Your passport. Your future. Continue right where you left
          off with Skill Chain!
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
