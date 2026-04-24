import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          About Me
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          I'm Anshu Kumar Kushwaha, a passionate MERN stack developer who enjoys building
          modern, scalable, and user-friendly web applications. I have hands-on experience
          working with technologies like React, Node.js, Express, and MongoDB through
          multiple personal and academic projects.
        </p>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          I focus on writing clean and efficient code while creating smooth user experiences.
          I have built several projects including a blog platform, employee management system,
          and various React-based applications, where I implemented features like authentication,
          API integration, and responsive UI design.
        </p>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Currently, I am looking for opportunities to start my career as a full-stack developer
          where I can contribute, learn, and grow in a real-world development environment.
        </p>

      </div>
    </section>
  );
};

export default About;