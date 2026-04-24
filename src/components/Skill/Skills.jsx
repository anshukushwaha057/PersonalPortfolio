import React from "react";
import { nanoid } from "nanoid";

const Skills = () => {
  const skills = [
    {
      id: nanoid(),
      name: "JavaScript",
      level: "Expert",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: nanoid(),
      name: "React",
      level: "Advanced",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: nanoid(),
      name: "Redux",
      level: "Intermediate",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      id: nanoid(),
      name: "Node.js",
      level: "Advanced",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: nanoid(),
      name: "Express.js",
      level: "Intermediate",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      id: nanoid(),
      name: "MongoDB",
      level: "Intermediate",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      id: nanoid(),
      name: "HTML & CSS",
      level: "Expert",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: nanoid(),
      name: "Tailwind CSS",
      level: "Advanced",
      image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      id: nanoid(),
      name: "Git & GitHub",
      level: "Advanced",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      id: nanoid(),
      name: "Java",
      level: "Advanced",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
    id: nanoid(),
    name: "Postman",
    level: "Intermediate",
    image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    id: nanoid(),
    name: "npm",
    level: "Advanced",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          Tech & Language Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200 flex items-center gap-4"
            >
              
              {/* Image */}
              <img
                src={skill.image}
                alt={skill.name}
                className="w-10 h-10"
              />

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {skill.level}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Skills;