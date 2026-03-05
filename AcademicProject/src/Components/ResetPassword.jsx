import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (!data.username || !data.newPassword || !data.confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (data.newPassword !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password reset successful!");
     navigate("/LoginPage")
 
  };
 

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          Reset Password
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={data.username}
          onChange={handleChange}
          className="border w-full h-10 px-3 rounded-md mb-4"
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={data.newPassword}
          onChange={handleChange}
          className="border w-full h-10 px-3 rounded-md mb-4"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={data.confirmPassword}
          onChange={handleChange}
          className="border w-full h-10 px-3 rounded-md mb-4"
        />

        <button
          onClick={handleReset}
          className="bg-blue-500 text-white w-full h-10 rounded-md"
        >
          Reset Password
        </button>

      </div>
    </div>
  );
}

export default ResetPassword;