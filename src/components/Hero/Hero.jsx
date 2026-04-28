import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-center py-24 px-4">
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
       This is <span className="text-yellow-300">Anshu Kushwaha</span>
      </h1>

      <p className="text-lg sm:text-xl mt-6 max-w-2xl mx-auto text-gray-100">
        MERN Stack Developer crafting modern, scalable and user-friendly web applications.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <a
          href="#projects"
          className="bg-white text-blue-600 font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default Hero;