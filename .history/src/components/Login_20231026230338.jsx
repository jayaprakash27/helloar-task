import React, { useState } from 'react';
import './login.css';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    const apiEndpoint = 'https://dev.api.goongoonalo.com/v1/auth/login';
    const requestBody = {
      phoneNumber: phoneNumber,
    };

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
    <div className="login-page">
      <div className=' login-box'>
        <h1 className=" text-primary-color font-semibold"> Sign In</h1>
        <p className=' text-sm'>Please enter your mobile number to login. We will send an OTP to verify your number.</p>
        <span className=' rounded-lg h-8 m-2 w-full'>
        <input type="text" className=' w-full text-lg' placeholder='Phone number' />
        </span>
      </div>
    </div>
  );
}

export default Login;