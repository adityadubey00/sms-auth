// src/components/SignIn.js
import React, { useState } from 'react';

const SignIn = ({ toggleForm, onForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data:', formData);
    // Handle sign-in logic here
  };

  return (
    <div className="auth-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        <span onClick={onForgotPassword}>Forgot Password?</span>
      </p>
      <p>
        Don't have an account? <span onClick={toggleForm}>Sign Up</span>
      </p>
    </div>
  );
};

export default SignIn;
