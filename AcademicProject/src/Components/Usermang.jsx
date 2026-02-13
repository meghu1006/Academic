import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Usermang() {
  const navigate = useNavigate();

  function back() {
    navigate("/Admin");
  }

  const users = [
    { name: "Rebecca Fox", role: "CEO", img: "https://i.pravatar.cc/100?img=1" },
    { name: "Steve Riley", role: "HR Manager", img: "https://i.pravatar.cc/100?img=2" },
    { name: "Brian Lord", role: "Finance Manager", img: "https://i.pravatar.cc/100?img=3" },
    { name: "Diane Hall", role: "Social Media Manager", img: "https://i.pravatar.cc/100?img=4" },
    { name: "Marie Goodwin", role: "Accountant", img: "https://i.pravatar.cc/100?img=5" },
    { name: "Taylor Hardy", role: "Marketing Manager", img: "https://i.pravatar.cc/100?img=6" },
  ];

  return (
    <div className="bg-[url(/usermanange.png)] bg-cover bg-center min-h-screen w-full p-6">


      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          User Management
        </h1>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            + Add User
          </button>

          <button
            onClick={back}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
          >
            ← Back
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <img
              src={user.img}
              alt={user.name}
              className="w-16 h-16 rounded-full mx-auto mb-3"
            />
            <h3 className="font-semibold text-gray-800">
              {user.name}
            </h3>
            <p className="text-sm text-gray-500">
              {user.role}
            </p>


            <div className="flex justify-center gap-3 mt-4">
              <button className="text-sm text-indigo-600 hover:underline">
                Edit
              </button>
              <button className="text-sm text-red-500 hover:underline">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
