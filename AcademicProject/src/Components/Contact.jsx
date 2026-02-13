import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-blue-700 text-white px-6 py-3 flex justify-between items-center">
        <h1 className="font-semibold text-lg">BCA Repository</h1>
        <ul className="flex gap-8 font-medium">
          
          <li className="underline">Contact Us</li>
          
        </ul>
        
      </nav>

      
      <div className="text-center mt-6 text-gray-600">
        <span className="text-blue-600 font-semibold">BCA Repository</span>
      </div>

      
      <div className="flex justify-center mt-8 px-4">
        <div className="w-full max-w-xl bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-500 mb-4">
            This contact page is only for general questions regarding the platform
            and inquiries related to uploading files.
          </p>

          <form className="space-y-4">
           
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border rounded px-3 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full"
              />
            </div>

           
            <select className="border rounded px-3 py-2 w-full text-gray-500">
              <option>- Reason -</option>
              <option>General Query</option>
              <option>Upload Issue</option>
              <option>Bug Report</option>
            </select>

            
            <input
              type="text"
              placeholder="Subject"
              className="border rounded px-3 py-2 w-full"
            />

           
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="border rounded px-3 py-2 w-full"
            ></textarea>

            
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-pink-600 text-white px-5 py-2 rounded"
              >
                SEND MESSAGE
              </button>
              <button
                type="reset"
                className="bg-gray-300 text-gray-700 px-5 py-2 rounded"
              >
                RESET
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            Note: Spamming this form will result in an IP ban.
          </p>
        </div>
      </div>
    </div>
  );
}