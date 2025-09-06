import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  // state for form inputs
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit signup form
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3790/api/auth/signup",  // backend signup route
        formData,
        { withCredentials: true } // allow cookies (JWT if you’re using it)
      );

      console.log("Signup success:", res.data);
      alert("Account created successfully!");
      navigate("/login"); // redirect to login page
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-up">
      <div className="right-side">
        <h1>Join Skill Chain</h1>
        <p>Create your account and start growing!</p>
        <form onSubmit={handleSignUp}>
          <div className="inputs">
            <input
              className="input"
              type="text"
              name="fullname"
              placeholder="Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
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
          <div>
            <input type="checkbox" required />
            <label>I Agree with privacy policy</label>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="signup-btn">
            <button type="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white no-underline font-bold py-2 px-4 rounded-md transition-colors text-sm sm:text-base"
          >
            Log In
          </Link>
        </div>
      </div>
      <div className="left-side">
        <img src="/Frame 120.png" alt="Future" />
        <h1>Welcome to the Future</h1>
        <p>The future begins with you. Join us today to unlock your vision.</p>
      </div>
    </div>
  );
};

export default SignUpPage;
