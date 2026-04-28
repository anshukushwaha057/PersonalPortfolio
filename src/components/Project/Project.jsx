import React from "react";
import { nanoid } from "nanoid";

const Project = () => {

  const projectsList = [
    {
      id: nanoid(),
      name: "NarrativeNest Blog Platform",
      image: "https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg",
      link: "https://weather-ten-pink.vercel.app/",
      description: "A full-stack blogging platform built with the MERN stack, allowing users to create, edit, and share their stories with a vibrant community."
    },
    {
      id: nanoid(),
      name: "Weather Application",
      image: "https://cdn.vectorstock.com/i/1000v/10/87/weather-forecast-vector-11181087.jpg",
      link: "https://weather-ten-pink.vercel.app/",
      description: "A responsive weather application that provides real-time weather updates and forecasts for any location, utilizing the OpenWeatherMap API for accurate data."
    },
    {
      id: nanoid(),
      name: "Password Generator",
      image: "https://www.xcitium.com/blog/wp-content/uploads/2025/11/password-generator.png",
      link: "https://project-reactjs-psi.vercel.app/",
      description: "A simple and secure password generator that creates strong, random passwords for your accounts."
    },
    {
      id: nanoid(),
      name: "Currency Converter",
      image: "https://static.vecteezy.com/system/resources/previews/048/457/783/non_2x/currency-converter-currency-exchange-rate-dollars-to-euro-currency-trading-flat-icon-illustration-vector.jpg",
      link: "https://project-reactjs-x8ov.vercel.app/",
      description: "A currency converter that allows users to easily convert between different currencies."
    },
    {
      id: nanoid(),
      name: "Employee Mangement System",
      image: "https://www.hrmware.com/blog/wp-content/uploads/2021/04/Employee-Management-1024x519.jpg",
      link: "https://project-reactjs-ten.vercel.app/",
      description: "An employee management system that helps businesses manage their workforce efficiently, with features for tracking employee information, attendance, and performance."
    },
    {
      id: nanoid(),
      name: "Todo Creator",
      image: "https://raw.githubusercontent.com/codedex-io/projects/main/projects/create-a-to-do-list-app-with-html-css-js/finished-todo-list.png",
      link: "https://project-reactjs-chi.vercel.app/",
      description: "A simple and intuitive todo list application that allows users to organize their tasks and stay productive."
    },
    {
      id: nanoid(),
      name: "Number Guessing Game",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTctEl6xMBBH2PLVLLGw2h0dOJ__s3nuKeg&s",
      link: "https://projects-63iw.vercel.app/",
      description: "A fun and engaging number guessing game where players try to guess a randomly generated number within a limited number of attempts."
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projectsList.map((project) => (

          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-s transition duration-300 hover:-translate-y-1 cursor-pointer">

              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-fit group-hover:scale-110 transition duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4 group-hover:text-blue-600">
                {project.name}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {project.description}
              </p>

            </div>
          </a>

        ))}

      </div>
    </section>
  );
};

export default Project;