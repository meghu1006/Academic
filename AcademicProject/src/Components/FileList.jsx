import React from "react";

function FileList({ files }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {files.length > 0 ? (
        files.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center w-96 p-5 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl hover:scale-105 transition"
          >
            <span className="font-semibold text-gray-800">
              {item.title}
            </span>

         
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-blue-400 text-white rounded-xl shadow hover:opacity-90 transition"
            >
              ⬇️ Download
            </a>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No results found</p>
      )}
    </div>
  );
}

export default FileList;