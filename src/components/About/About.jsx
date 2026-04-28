import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/350"
            alt="profile"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            About Me
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I'm <span className="font-semibold text-blue-600">Anshu Kumar Kushwaha</span>, 
            a passionate MERN stack developer who enjoys building modern and scalable web applications.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I have experience working with React, Node.js, Express, and MongoDB through multiple projects like blog platforms and management systems.
          </p>

          {/* Highlights */}
          <div className="mt-6 space-y-2">
            <p>✅ MERN Stack Development</p>
            <p>✅ REST APIs & Authentication</p>
            <p>✅ Responsive UI Design</p>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block mt-6 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;