  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";

  function AdLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const handleLogin = (e) => {
      e.preventDefault();

      if (email && password) {
        navigate("/Admin");  // success
      } else if (!email || !password) {
        alert("Please enter both email and password!");
      } else {
        alert("Invalid data!");
        navigate("/");
      }

    };

    return (
      <div className='flex justify-center items-center h-screen  bg-[url(/Adlogin.png)] bg-no-repeat bg-cover'>
        <div className="p-4 w-[400px] bg-blue-200/5 backdrop-blur-md rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-50">ADMIN LOGIN</h2>

          {/* ✅ Keep inputs inside the form */}
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <input className="w-80 mb-4 p-3 border rounded-lg text-white"
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input className="w-80 mb-4 p-3 border rounded-lg text-white"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-72 bg-green-600 text-white py-3 rounded-lg hover:bg-green-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  export default AdLogin;
