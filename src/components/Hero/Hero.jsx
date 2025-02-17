import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Hi, I'm Anshu Kumar Kushwaha</h1>
      <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto">
        A passionate MERN stack developer
      </p>
      <a href="#projects" className="mt-6 inline-block bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-200">
        View Projects
      </a>
    </section>
  );
};

export default Hero;
