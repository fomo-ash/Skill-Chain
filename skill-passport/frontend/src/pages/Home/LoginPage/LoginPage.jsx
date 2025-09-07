import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios"; 

const LoginPage = ({ handleLoginSuccess }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError("");

    try {
      const res = await axiosInstance.post("/auth/login", formData);

      handleLoginSuccess(res.data);

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
        <form onSubmit={handleLogin}>
          <div className="inputs">
            <input
              className="input"
              type="email" 
              name="email" 
              placeholder="Email"
              value={formData.email} 
              onChange={handleChange} 
            />
            <input
              className="input"
              type="password" 
              name="password" 
              placeholder="Password"
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="signup-btn">
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <p className="para">Or continue with</p>
            <div className="acc-btns">
              <button>Facebook</button>
              <button>Google</button>
              <button>Apple</button>
            </div>
          </div>
        </form>
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
