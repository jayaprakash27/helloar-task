import React, { useState } from 'react';
import 'login.css';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLogin = () => {
    // Define the URL of the "Send OTP" API
    const apiEndpoint = 'https://dev.api.goongoonalo.com/v1/auth/login'; // Replace with the actual API endpoint URL
  
    // Create the request payload
    const requestBody = {
      phoneNumber: phoneNumber, // Use the 'phoneNumber' state
    };
  
    // Make the POST request using the 'fetch' API
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // Handle API errors here
          throw new Error('Failed to send OTP');
        }
      })
      .then((data) => {
        // Handle the API response data
        console.log('OTP sent successfully:', data);
  
        // You can add code here to navigate to the OTP verification page or perform the next step as needed.
      })
      .catch((error) => {
        // Handle any error that occurred during the API request
        console.error('Error sending OTP:', error);
      });
  };
  

  return (
    <div className="login-page bg-white flex justify-center items-center">
      <div className=' login-box'></div>
    </div>
  );
}

export default Login;
