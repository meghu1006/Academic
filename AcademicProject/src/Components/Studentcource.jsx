import React from "react";
import { useNavigate } from "react-router-dom";



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
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-10 md:px-20">

        {/* Left Side Text */}
        <h1 className="text-white text-4xl md:text-5xl font-semibold max-w-3xl mb-8 drop-shadow-lg text-left">
          {"Welcome to Student Community  Development".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block animate-letter"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Centered Buttons */}
        <div className="w-full flex justify-center gap-6">
          <button
            onClick={() => navigate("/LoginPage")}
            className="px-10 py-5 bg-black hover:bg-blue-500 text-white font-semibold rounded shadow-lg transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/Register")}
            className="px-10 py-5  bg-black  hover:bg-blue-500 text-white font-semibold rounded shadow-lg transition"
          >
            Register
          </button>
        </div>

      </div>
    </div>
  );
}

export default Studentcource;