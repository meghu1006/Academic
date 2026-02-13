import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

export default function Dasboard() {
  const navigate = useNavigate();
  function back() {
    navigate("/Admin")
  }

  const data = [
    { date: "Sep 9", downloads: 20 },
    { date: "Sep 10", downloads: 45 },
    { date: "Sep 11", downloads: 30 },
    { date: "Sep 12", downloads: 50 },
    { date: "Sep 13", downloads: 40 },
    { date: "Sep 14", downloads: 70 },
    { date: "Sep 15", downloads: 65 },
    { date: "Sep 16", downloads: 45 },
  ];

  const resources = [
    { name: "Notes on AI", total: 120 },
    { name: "Web Dev Guide", total: 95 },
    { name: "Data Structures", total: 60 },
  ];
  return (
    <div>
     
      <div className="flex justify-end mb-6">
        <button

          className="mt-6 px-4 py-2 mr-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition" onClick={back}>
          ← Back
        </button>
      </div>

      <div className='grid grid-cols-3 gap-6 mb-6 p-11'>
        {resources.map((res, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold">{res.name}</h3>
            <p className="text-2xl font-bold mt-2">{res.total} downloads</p>

          </div>
        ))}
      </div>


      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Downloads Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="downloads" stroke="#4f46e5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  )
}
