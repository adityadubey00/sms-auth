// src/components/ForgotPassword.js
import React, { useState } from 'react';
import SendOTP from './Otp';

const ForgotPassword = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot Password for email:', email);

    // Simulate sending the forgot password email
    // Replace this with actual email sending logic
    setOtpSent(true);
  };

  return (
    <div className="auth-form">
      <h2>Forgot Password</h2>
      {!otpSent ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Forgot Password Email</button>
        </form>
      ) : (
        <SendOTP/>
      )}
      <p>
        Remember your password? <span onClick={toggleForm}>Sign In</span>
      </p>
    </div>
  );
};

export default ForgotPassword;
