import React from "react";

const About = () => {
  return (
    <div
      className="w-screen h-screen rounded-xl flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/a1/4e/e6/a14ee6fe6f5fe7e668774fcc9a244802.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-40 rounded-xl"></div>

      {/* Main Heading */}
      <h1 className="relative z-10 text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        About Education
      </h1>

      {/* Content */}
      <div className="flex gap-6 w-[90%] h-[80%] relative z-10">  
        {/* Student Image Box */}
        <div className="flex items-center justify-center rounded-xl w-[50%] h-full overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/140/375/large_2x/young-business-woman-working-on-laptop-at-office-free-photo.jpg"
            alt="Student"
            className="w-[700px] h-[700px] object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Information Box */}
        <div className="flex flex-col items-start justify-center rounded-xl flex-1 h-full p-6 space-y-4">
          <p className="text-gray-100 text-lg leading-relaxed font-bold">
            A degree in education is an academic qualification that prepares
            individuals for careers in teaching, training, or educational
            leadership. It provides both theoretical knowledge and practical
            skills related to learning, curriculum design, classroom management,
            and student development. Students pursuing an education degree study
            subjects like psychology, pedagogy, educational technology, and
            assessment methods, which equip them to address diverse learning
            needs.
          </p>

          <p className="text-gray-100 text-lg leading-relaxed font-bold">
            Depending on the level, degrees can range from bachelor’s to
            master’s or doctoral programs, each offering deeper specialization
            in areas such as early childhood education, secondary education, or
            educational administration. Beyond preparing teachers, a degree in
            education also opens opportunities in research, policy-making,
            instructional design, and community development, making it a
            versatile and impactful field of study.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
