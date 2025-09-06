import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  // form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle login submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3790/api/auth/login", // backend login route
        formData,
        { withCredentials: true }
      );

      console.log("Login success:", res.data);
      alert("Login successful!");
      navigate("/dashboard"); // redirect after login
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Login failed. Try again.");
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
              required
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="signup-btn">
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="para">Or continue with</p>
            <div className="acc-btns">
              <button type="button">
                <img src="/facebook.png" alt="Facebook" />
              </button>
              <button type="button">
                <img src="/devicon_google.png" alt="Google" />
              </button>
              <button type="button">
                <img src="/apple.png" alt="Apple" />
              </button>
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
