import React from 'react';
import { nanoid } from 'nanoid'



const Skills = () => {

  const uniqueid = nanoid()

  const skills = [
    { id:uniqueid, name: 'JavaScript', level: 'Expert' },
    { id:uniqueid, name: 'React', level: 'Advanced' },
    { id:uniqueid, name: 'Redux', level: 'Intermediate' },
    { id:uniqueid, name: 'Node.js', level: 'Advanced' },
    { id:uniqueid, name: 'Express.js', level: 'Intermediate' },
    { id:uniqueid, name: 'MongoDB', level: 'Intermediate' },
    { id:uniqueid, name: 'HTML & CSS', level: 'Expert' },
    { id:uniqueid, name: 'Tailwind CSS', level: 'Advanced' },
    { id:uniqueid, name: 'Git & GitHub', level: 'Advanced' },
    { id:uniqueid, name: 'Java', level: 'Advanced' },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.uniqueid} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
