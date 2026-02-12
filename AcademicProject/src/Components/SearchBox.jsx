import React from "react";

function SearchBox({ value, onChange }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="🔍 Search notes/projects/questions..."
        className="p-3 w-96 rounded-2xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox; 