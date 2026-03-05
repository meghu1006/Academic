import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboad() {

  const navigate = useNavigate();

  useEffect(() => {
    alert("Welcome to Admin Dashboard");
  }, []);

  function btn() {
    navigate("/Admin-login");
  }

  return (
    <div className="h-screen w-full bg-[url(/Dash.png)] bg-no-repeat bg-cover">

      <div className="text-white text-3xl font-bold pt-24 text-center">
        STUDENT COMMUNITY DEVELOPMENT
      </div>

      <div className="text-white text-2xl font-bold text-center mt-10">
        ADMIN DASHBOARD
      </div>

      <div className="flex justify-center mt-20">
        <button
          className="w-72 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          onClick={btn}
        >
          Login
        </button>
      </div>

    </div>
  );
}

export default AdminDashboad;