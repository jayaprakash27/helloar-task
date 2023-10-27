import React, { useState } from "react";
import "./login.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");

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

        // You can add code here to navigate to the OTP verification page or perform the next step as needed.
      })
      .catch((error) => {
        // Handle any error that occurred during the API request
        console.error("Error sending OTP:", error);
      });
  };

  const [otp, setOtp] = useState(["", "", "", ""]);
  const expectedOtp = "1234";

  const handleInputChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === expectedOtp) {
      alert("OTP is correct. You are verified.");
    } else {
      alert("OTP is incorrect. Please try again.");
    }
  };

  return (
    <div className="login-page">
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
      </div>
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
          onClick={handleLogin}
          className=" w-full rounded-lg p-3 hover:bg-purple-600  bg-primary-color text-white"
        >
          {" "}
          Sign In{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
