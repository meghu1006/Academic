import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || !course || !phone) {
      setError("Please fill all fields.");
      return;
    }

   
    if (course !== "BCom") {
      setError("Only BCom students can continue.");
      return;
    }

    
    setError("");
    navigate("/bcom");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-80 p-6 rounded-2xl bg-white shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          
          <div>
            <label className="block font-medium mb-1">Student Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Course</option>
              <option value="BCA">BCA</option>
              <option value="BCom">BCom</option>
            </select>
          </div>

          
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
