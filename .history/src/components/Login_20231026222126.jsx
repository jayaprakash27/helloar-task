// src/LoginPage.js
import React, { useState } from 'react';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLogin = () => {
    // Define the URL of the "Send OTP" API from your Postman environment
    const apiEndpoint = pm.environment.get("endpoint") + "/auth/send_otp";
  
    // Create the request payload
    const requestBody = {
      phoneNumber: phoneNumber, // Use the 'phoneNumber' state
    };
  
    // Make the POST request using the 'fetch' API
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // Handle API errors here
          throw new Error("Failed to send OTP");
        }
      })
      .then((data) => {
        // Handle the API response data
        console.log("OTP sent successfully:", data);
  
        // You can add code here to navigate to the OTP verification page or perform the next step as needed.
      })
      .catch((error) => {
        // Handle any error that occurred during the API request
        console.error("Error sending OTP:", error);
      });
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
