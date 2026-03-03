import React from 'react'
import { useNavigate } from "react-router-dom";


function LandingPage() {
    const navigate = useNavigate();
    
    return (
        <div className="font-sans min-h-screen bg-gray-100">

            {/* TOP HEADLINE */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-12">
                <h1 className="text-5xl font-bold">
                    Student Community Development
                </h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Empowering students with technology, business knowledge, leadership skills,
                    and real-world experience to build a successful future.
                </p>
            </div>

            {/* HERO SECTION WITH BACKGROUND IMAGE */}
            <section
                className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-20 text-white"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* LEFT CONTENT */}
                <div className="relative md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        Develop your skills in a new and unique way
                    </h2>

                    <p className="mb-8 text-gray-200">
                        Build a strong foundation in technology, business, and finance through
                        structured academic programs designed to prepare you for real-world careers.
                    </p>

                    <button
                        onClick={() => navigate("/student-course")}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                    >
                        Enroll Now
                    </button>
                </div>

                {/* RIGHT CIRCLE IMAGE */}
                <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                            alt="Student Learning"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-20 bg-gray-50">

                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <div className="w-72 h-80 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
                            alt="Graduation Students"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold mb-8">
                        Why Choose Our Technology & Business Programs
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-pink-500 font-semibold text-lg">
                                Comprehensive Academic Foundation
                            </h4>
                            <p className="text-gray-600">
                                A balanced blend of technical and business expertise.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-pink-500 font-semibold text-lg">
                                Practical Learning Approach
                            </h4>
                            <p className="text-gray-600">
                                Hands-on projects and real-world applications.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-pink-500 font-semibold text-lg">
                                Career Growth Opportunities
                            </h4>
                            <p className="text-gray-600">
                                Prepare for careers in IT, corporate, finance, and entrepreneurship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COURSES SECTION */}
            <section className="py-20 bg-white text-center">
                <h2 className="text-3xl font-bold mb-12">
                    Our Featured Programs
                </h2>

                <div className="flex justify-center gap-10 flex-wrap px-6">

                    <div className="bg-gray-50 w-80 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                            alt="Computer Applications"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6 text-left">
                            <h3 className="font-semibold text-xl mb-3">
                                Computer Applications
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Learn programming, databases, web development, and modern software technologies.
                            </p>
                            <button className="text-purple-600 font-semibold">
                                Learn More →
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-50 w-80 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                            alt="Commerce & Finance"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6 text-left">
                            <h3 className="font-semibold text-xl mb-3">
                                Commerce & Finance
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Master accounting, financial management, economics, and business strategies.
                            </p>
                            <button className="text-purple-600 font-semibold">
                                Learn More →
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-50 w-80 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Business Management"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6 text-left">
                            <h3 className="font-semibold text-xl mb-3">
                                Business & Management
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Develop leadership, marketing, entrepreneurship, and management skills.
                            </p>
                            <button className="text-purple-600 font-semibold">
                                Learn More →
                            </button>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default LandingPage
