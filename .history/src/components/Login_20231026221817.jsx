// src/LoginPage.js
import React, { useState } from 'react';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLogin = () => {
    // Add code to trigger the "Send OTP" API here
    // You can use the 'phoneNumber' state to send the phone number to the API.
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
