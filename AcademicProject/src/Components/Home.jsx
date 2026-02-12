import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[url(/image.png)] bg-no-repeat bg-cover flex flex-col">

     
      <nav className="w-full bg-gray-900 px-8 py-4 shadow-md">
        <ul className="flex justify-center gap-12 text-lg font-semibold text-white">
          <li>
            <Link to="/home" className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-yellow-400">Resources</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </li>
        </ul>
      </nav>

      
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
