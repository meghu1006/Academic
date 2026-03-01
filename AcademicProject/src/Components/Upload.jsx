import React, { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [notesName, setNotesName] = useState("");
  const [notesDesc, setNotesDesc] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("notesName", notesName);
    formData.append("notesDesc", notesDesc);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setDownloadUrl(data.url);
        alert("Uploaded Successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Upload failed");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url(public/Upload.png)] bg-cover bg-center w-full h-screen pt-20">
     <div className="w-full max-w-md p-8 rounded-2xl
                      bg-transparent 
                      backdrop-blur-md
                      border border-white/30">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Upload Notes
        </h2>

        <form onSubmit={handleUpload} className="space-y-5">
          {/* Notes Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Notes Name
            </label>
            <input
              type="text"
              value={notesName}
              onChange={(e) => setNotesName(e.target.value)}
              placeholder="Enter notes name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Notes Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Notes Description
            </label>
            <textarea
              value={notesDesc}
              onChange={(e) => setNotesDesc(e.target.value)}
              placeholder="Enter notes description"
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Custom File Upload Box */}
          <div>
            <label className="block font-medium text-gray-700 mb-2 ">
              Choose File
            </label>

            <label className="flex flex-col items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
              
              <span className="text-gray-500 text-sm">
                {file ? file.name : "Click to upload or drag and drop"}
              </span>

              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                required
              />
            </label>
          </div>

          {/* Upload Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Upload
          </button>
        </form>

        {/* Download Link */}
        {downloadUrl && (
          <div className="mt-5 text-center">
            <a
              href={downloadUrl}
              download
              className="text-blue-600 underline font-medium"
            >
              📥 Download Your Notes
            </a>
          </div>
        )}
      </div>
    </div>
  );
}