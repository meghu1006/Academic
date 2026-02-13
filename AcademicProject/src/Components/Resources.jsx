import React from 'react'

function Resources() {
  return (
     <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 text-center">
          Welcome to Your Course Notes Resource Page!
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          This page serves as a dedicated hub for high-quality, comprehensive study notes for students pursuing Bachelor of Computer Applications (BCA) and Bachelor of Commerce (BCom) degrees.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Our Project's Purpose:
        </h2>
        <p className="text-base text-gray-700 mb-4">
          The primary goal of this project is to provide an accessible and centralized repository of course-specific notes, helping students to:
        </p>
        <ul className="list-none p-0 mb-8 space-y-3">
          <li className="bg-blue-50 text-blue-800 p-4 rounded-md shadow-sm">
            <strong className="font-semibold">Enhance Understanding:</strong> Offer clear and concise explanations of complex topics.
          </li>
          <li className="bg-blue-50 text-blue-800 p-4 rounded-md shadow-sm">
            <strong className="font-semibold">Aid Exam Preparation:</strong> Provide well-structured material suitable for revision.
          </li>
          <li className="bg-blue-50 text-blue-800 p-4 rounded-md shadow-sm">
            <strong className="font-semibold">Support Learning:</strong> Complement classroom teaching with additional resources.
          </li>
          <li className="bg-blue-50 text-blue-800 p-4 rounded-md shadow-sm">
            <strong className="font-semibold">Save Time:</strong> Reduce the need for extensive self-research by compiling essential information.
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Available Course Notes:
        </h2>
        <p className="text-base text-gray-700 mb-4">
          Currently, we are offering notes for the following courses:
        </p>
        <ul className="list-none p-0 mb-8 space-y-4">
          <li className="bg-gray-50 p-4 rounded-md shadow-sm">
            <strong className="text-xl text-gray-800">Bachelor of Computer Applications (BCA):</strong>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><a href="#bca-semester1" className="text-blue-500 hover:underline">Semester 1 Notes</a></li>
              <li><a href="#bca-semester2" className="text-blue-500 hover:underline">Semester 2 Notes</a></li>
              <li><a href="#bca-programming" className="text-blue-500 hover:underline">Programming Concepts</a></li>
              <li><a href="#bca-database" className="text-blue-500 hover:underline">Database Management Systems</a></li>
              
            </ul>
          </li>
          <li className="bg-gray-50 p-4 rounded-md shadow-sm">
            <strong className="text-xl text-gray-800">Bachelor of Commerce (BCom):</strong>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><a href="#bcom-financial-accounting" className="text-blue-500 hover:underline">Financial Accounting</a></li>
              <li><a href="#bcom-business-economics" className="text-blue-500 hover:underline">Business Economics</a></li>
              <li><a href="#bcom-corporate-law" className="text-blue-500 hover:underline">Corporate Law</a></li>
              <li><a href="#bcom-taxation" className="text-blue-500 hover:underline">Taxation</a></li>
             
            </ul>
          </li>
        </ul>

        <p className="text-base text-gray-700 mb-8">
          We are continuously updating and expanding our collection to cover more subjects and semesters for both BCA and BCom programs. Stay tuned for more resources!
        </p>

        
        <section id="bca-semester1" className="bg-gray-50 p-6 rounded-md shadow-sm mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3">BCA - Semester 1 Notes</h3>
          <p className="text-gray-700">Content for BCA Semester 1 notes goes here. You can link to PDFs or embed text directly.</p>
        </section>

        <section id="bcom-financial-accounting" className="bg-gray-50 p-6 rounded-md shadow-sm mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3">BCom - Financial Accounting Notes</h3>
          <p className="text-gray-700">Content for BCom Financial Accounting notes goes here.</p>
        </section>


      </div>
    </div>
  )
}

export default Resources
