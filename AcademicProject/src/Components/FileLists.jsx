import React from "react";

function FileLists({ files }) {
  return (
    <div className="flex flex-col items-center gap-6">

      {files.length > 0 ? (

        files.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center w-96 p-5 bg-white rounded-2xl shadow hover:scale-105 transition"
          >
            <span className="font-semibold text-gray-800">
              {item.title}
            </span>

            <a
              href={item.file}
              download
              className="px-4 py-2 bg-indigo-500 text-white rounded-xl shadow hover:bg-indigo-600"
            >
               Download
            </a>

          </div>
        ))

      ) : (
        <p className="text-gray-500">No results found</p>
      )}

    </div>
  );
}

export default FileLists;