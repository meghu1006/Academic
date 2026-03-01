import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

function Studentcource() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://www.pexels.com/download/video/33187889/"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">

        <h1 className="text-white text-4xl md:text-5xl font-semibold max-w-3xl mb-8 drop-shadow-lg">
          Welcome to Student Community Development
        </h1>

        {/* Buttons Container */}
        <div className="flex gap-4">

          {/* Login Button */}
          <button
            onClick={() => navigate("/LoginPage")}
            className="px-6 py-3 bg-black hover:bg-blue-500 text-white font-semibold rounded shadow-lg transition"
          >
            Login
          </button>

          {/* Register Button */}
          <button
            onClick={() => navigate("/Register")}
            className="px-6 py-3 bg-blue-500 hover:bg-green-500 text-white font-semibold rounded shadow-lg transition"
          >
            Register
          </button>

        </div>

      </div>
    </div>
  );
}

export default Studentcource;