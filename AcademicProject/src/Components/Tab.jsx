import React from "react";

function Tab({ selected, setSelected }) {
  return (
    <div className="flex justify-center gap-6 mb-6">
      {["notes", "questions", "projects"].map((tab) => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={`px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105 ${
            selected === tab
              ? "bg-indigo-500 text-white font-bold"
              : "bg-indigo-100 text-indigo-700"
          }`}
        >
          {tab === "notes"
            ? "📘 Available Notes"
            : tab === "questions"
            ? "📝 Question Papers"
            : "💡 Projects"}
        </button>
      ))}
    </div>
  );
}

export default Tab;
