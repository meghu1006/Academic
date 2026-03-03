import React from "react";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9aa5e774-c10b-4753-9d6c-486df47ca81f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-indigo-800 min-h-screen">
      
      {/* Info Section */}
      <div className="bg-white w-full max-w-2xl p-8 md:p-10 flex flex-col justify-center items-center rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
         Contact Us
        </h1>

        {/* <p className="mt-6 text-lg md:text-xl font-semibold text-center text-gray-700">
          Connect with the Bachelor of Computer Applications (BCA) department 
          for academic guidance, project support, technical workshops, 
          and career development assistance.
        </p> */}

        <div className="mt-6 flex flex-col items-center text-gray-800 text-lg">
          {/* <h2 className="font-semibold">Reach the BCA Office</h2> */}
          <p className="mt-2">student.department@college.edu</p>
          <p className="mt-2">(Mon–Sat, 9:30 AM – 5:30 PM)</p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-3xl bg-white p-6 md:p-10 rounded-2xl mt-8 shadow-lg"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center text-blue-900">
           Student Inquiry Form
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="flex flex-col w-full text-gray-800 text-lg">
            <label>Full Name</label>
            <input
              type="text"
              className="border-2 p-2 rounded text-gray-800 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>

          <div className="flex flex-col w-full text-gray-800 text-lg">
            <label>Email</label>
            <input
              type="email"
              className="border-2 p-2 rounded text-gray-800 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mt-6 text-gray-800 text-lg">
          <label>Your Query / Message</label>
          <textarea
            name="message"
            className="border-2 p-2 rounded text-gray-800 min-h-[120px] focus:outline-none focus:border-blue-500"
            placeholder="Enter your message related to course, projects, placements,business etc."
            required
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="h-[45px] w-[140px] bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;