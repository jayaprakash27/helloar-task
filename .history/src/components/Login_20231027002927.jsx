import React, { useState } from "react";
import "./login.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [reqId, setReqId] = useState('');
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleLogin = () => {
    const apiEndpoint = "https://dev.api.goongoonalo.com/v1/auth/login";
    const requestBody = {
      phoneNumber: "+" + phoneNumber,
    };

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
        setReqId(data.requestId);
        setOtpSent(true);
      })
      .catch((error) => {
        // Handle any error that occurred during the API request
        console.error("Error sending OTP:", error);
      });
  };


  const handleInputChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
    }
  };


  const handleVerifyOTP = () => {
    const apiEndpoint = 'https://dev.api.goongoonalo.com/auth/verify_otp';
    const requestBody = {
      phoneNumber: phoneNumber, // Use the 'phoneNumber' state or passed as a prop from the previous page
      requestId: reqId, // Use the 'requestId' state or passed as a prop from the previous page
      otp: otp.join(""),
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
          throw new Error('OTP verification failed');
        }
      })
      .then((data) => {
        // Handle the API response data
        console.log('OTP verified successfully:', data);
        sessionStorage.setItem('userToken', data);
      })
      .catch((error) => {
        // Handle any error that occurred during the API request
        console.error('Error verifying OTP:', error);
      });
  };


  return (
    <div className="login-page">
        { !otpSent ? 
      <div className=" login-box flex flex-col w-80 items-center gap-2 justify-center">
        <h1 className=" text-primary-color w-full text-left font-semibold"> Sign In</h1>
        <p className=" text-sm">
          Please enter your mobile number to login. We will send an OTP to
          verify your number.
        </p>
        <PhoneInput
          country={"in"}
          enableSearch={true}
          value={phoneNumber}
          containerClass=" w-full"
          onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        <button
          onClick={handleLogin}
          className=" w-full rounded-lg p-3 hover:bg-purple-600  bg-primary-color text-white"
        >
          {" "}
          Sign In{" "}
        </button>
      </div> : 
      <div className=" login-box flex flex-col w-80 gap-2 items-center justify-center">
        <h1 className=" text-primary-color text-left w-full font-semibold">OTP Verification</h1>
        <p className=" text-sm">
          We have sent and OTP to +{phoneNumber}. Please enter the code received
          to verify.
        </p>
        <div className="otp-input flex space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              maxLength="1"
              className="w-16 h-16 border border-gray-300 rounded text-3xl text-center"
            />
          ))}
        </div>
        <button
          onClick={handleVerifyOTP}
          className=" w-full rounded-lg p-3 hover:bg-purple-600  bg-primary-color text-white"
        > Verify
        </button>
      </div>
      }
    </div>
  );
}

export default Login;
