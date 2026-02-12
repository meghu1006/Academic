import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Navbar from "./Navbar";


function BCOM() {
                                                                                                                                                                                                                            
    const [page, setPage] = useState("home");
  return (
     <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-200 p-8">

      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">
        📚 Course Notes App
      </h1>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setPage("home")}
          className="px-4 py-2 rounded-xl bg-white/40 text-blue-700 font-semibold shadow hover:scale-105 transition"
        >
          Home
        </button>

        <button
          onClick={() => setPage("bcom")}
          className="px-4 py-2 rounded-xl bg-white/40 text-blue-700 font-semibold shadow hover:scale-105 transition"
        >
          BCom
        </button>
      </nav>

      {/* Home Section */}
      {page === "home" && (
        <div className="text-center bg-white/60 p-10 rounded-3xl shadow-xl max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800">Welcome 👋</h2>
          <p className="mt-4 text-lg text-gray-700">
            Click on <b>BCom</b> to explore notes, question papers, and projects.
          </p>
        </div>
      )}

      {/* BCom Section */}
      {page === "bcom" && <Navbar/>}
        
      
     

    </div>
    
  )
}

export default BCOM
