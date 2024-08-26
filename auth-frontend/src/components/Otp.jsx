// src/components/SendOTP.js
import React, { useState } from 'react';

const SendOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOTP = async () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    setOtp(generatedOtp);

    try {
      const response = await fetch('http://localhost:3000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp: generatedOtp }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('OTP sent successfully!');
      } else {
        setMessage(`Failed to send OTP: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="otp-form">
      <h2>Send OTP</h2>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SendOTP;
