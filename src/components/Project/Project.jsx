import React from "react";
import { nanoid } from "nanoid";

const Project = () => {

  const uniqueid = nanoid()
  const projectsList = [
    {
      id: uniqueid,
      name: "Chat-Bot",
      image: "https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg?ga=GA1.1.896190247.1728736946&semt=ais_hybrid", 
      description: "A simple chatbot built using HTML, CSS, and JavaScript."
    },
    {
      id: uniqueid,
      name: "Portfolio Website",
      image: "https://via.placeholder.com/150",
      description: "A personal portfolio website designed with HTML and CSS."
    },
    {
      id: uniqueid,
      name: "Weather Application",
      image: "https://via.placeholder.com/150",
      description: "A weather app using HTML, CSS, and JavaScript to fetch real-time weather data."
    },
    {
      id: uniqueid,
      name: "E-commerce Website",
      image: "https://via.placeholder.com/150",
      description: "An e-commerce platform built with HTML, CSS, JavaScript, and Node.js."
    },
    {
      id: uniqueid,
      name: "Password Generator",
      image: "https://via.placeholder.com/150",
      description: "A React-based password generator with custom length and complexity settings."
    },
    {
      id: uniqueid,
      name: "Todos App (Context API)",
      image: "https://via.placeholder.com/150",
      description: "A React to-do list app using Context API for state management."
    },
    {
      id: uniqueid,
      name: "Todos App (Redux)",
      image: "https://via.placeholder.com/150",
      description: "A React to-do list app powered by Redux for state management."
    },
    {
      id: uniqueid,
      name: "Currency Converter",
      image: "https://via.placeholder.com/150",
      description: "A React-based currency converter fetching real-time exchange rates."
    },
    {
      id: uniqueid,
      name: "Blog Website",
      image: "https://via.placeholder.com/150",
      description: "A full-fledged blog platform using React, Redux, TinyMCE, and Appwrite."
    }
  ];
  

  return (
    <section id="projects" className="py-16 px-1">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projectsList.map((project)=>(
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={`${project.image}`}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
          <p className="mt-2">
            {project.description}
          </p>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
