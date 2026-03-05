import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [visits, setVisits] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [activeTab, setActiveTab] = useState("visitors"); // visitors or downloads

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await axios.get("http://localhost:5000/api/stats");
        setVisits(res.data.visits);
        setDownloads(res.data.downloads);
      } catch (err) {
        console.error(err);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-purple-700 to-blue-600 text-white p-6">
        <h2 className="text-xl font-bold mb-10">Admin Panel</h2>

        <ul className="space-y-6">
          <li
            className="cursor-pointer hover:text-gray-200"
            onClick={() => setActiveTab("downloads")}
          >
            Downloads
          </li>

          <li
            className="cursor-pointer hover:text-gray-200"
            onClick={() => setActiveTab("visitors")}
          >
            Visitors
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">
          Student Community Dashboard
        </h1>

        {activeTab === "visitors" && (
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-72">
            <h2 className="text-xl font-semibold mb-2">Total Visitors</h2>
            <p className="text-4xl text-green-600">{visits}</p>
          </div>
        )}

        {activeTab === "downloads" && (
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-72">
            <h2 className="text-xl font-semibold mb-2">Total Downloads</h2>
            <p className="text-4xl text-blue-600">{downloads}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;