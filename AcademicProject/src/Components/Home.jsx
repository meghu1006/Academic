import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[url(/Home.png)] bg-no-repeat bg-cover flex flex-col">
      
      {/* Navbar */}
      <nav className="w-full bg-gray-900 px-8 py-4 shadow-md relative">
        <div className="flex items-center justify-center">
          
          {/* Logo - Left Side */}
          <div className="absolute left-8 flex items-center gap-2">
            <img 
              src="/Logo.jpeg" 
              alt="Logo" 
              className="h-15 w-15 object-contain" 
            />
            
          </div>

          {/* Centered Navigation Links */}
          <ul className="flex items-center gap-8 text-lg font-semibold text-white">
            <li>
              <Link to="/home" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-yellow-400 transition">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/AdminDash" className="hover:text-yellow-400 transition">
                Admin Dashboard
              </Link>
            </li>
          </ul>

        </div>
      </nav>

      {/* Center Button */}
      <div className="flex flex-1 items-center justify-center">
        <Link
          to="/RegisterPage"
          className="bg-gray-100 text-black px-8 py-4 rounded-xl text-2xl font-bold hover:bg-yellow-300 transition shadow-lg"
        >
          Register Now
        </Link>
      </div>

    </div>
  );
};

export default Home;
