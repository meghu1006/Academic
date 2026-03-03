import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const fetchData = async () => {
    try {
      const response = await axios.post("https://localhost:44359/api/Registration/InsertRegisters");
      console.log("Data from backend:", response.data);
    } catch (error) {
      console.error("Error calling backend:", error);
    }
  };
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    navigate("/home");
    // Add your API call here
  };

  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url(public/Rig.png)] bg-cover bg-center w-full h-screen pt-20">
      <div className="w-full max-w-md p-8 rounded-2xl
                      bg-transparent 
                      backdrop-blur-md
                      border border-white/30">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
             
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
             
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white"
              
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}