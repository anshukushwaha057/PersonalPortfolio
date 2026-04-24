import React from "react";
import { nanoid } from "nanoid";

const Project = () => {

  const projectsList = [
    {
      id: nanoid(),
      name: "Weather Application",
      image: "https://cdn.vectorstock.com/i/1000v/10/87/weather-forecast-vector-11181087.jpg",
      link: "https://weather-ten-pink.vercel.app/",
      description: "Weather Application"
    },
    {
      id: nanoid(),
      name: "Password Generator",
      image: "https://www.xcitium.com/blog/wp-content/uploads/2025/11/password-generator.png",
      link: "https://project-reactjs-psi.vercel.app/",
      description: "Password Generator"
    },
    {
      id: nanoid(),
      name: "Currency Converter",
      image: "https://static.vecteezy.com/system/resources/previews/048/457/783/non_2x/currency-converter-currency-exchange-rate-dollars-to-euro-currency-trading-flat-icon-illustration-vector.jpg",
      link: "https://project-reactjs-x8ov.vercel.app/",
      description: "Currency Converter"
    },
    {
      id: nanoid(),
      name: "Employee Mangement System",
      image: "https://www.hrmware.com/blog/wp-content/uploads/2021/04/Employee-Management-1024x519.jpg",
      link:"https://project-reactjs-ten.vercel.app/",
      description: "Employee Mangement System"
    },
    {
      id: nanoid(),
      name: "Todo Creator",
      image: "https://play-lh.googleusercontent.com/L8NoeA3NFQRE-h5PczsG4cy7OGSrGv_LgGEyO1XSnFWiDPsAJSqnbTlZyC6QS3pBrlc=w240-h480-rw",
      link: "https://project-reactjs-chi.vercel.app/",
      description: "Todo Creator"
    },
    {
      id: nanoid(),
      name: "Number Guessing Game",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTctEl6xMBBH2PLVLLGw2h0dOJ__s3nuKeg&s",
      link: "https://projects-63iw.vercel.app/",
      description: "Number Guessing Game"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center">My Projects</h2>

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
                  className="w-full h-48 object-cover group-hover:scale-100 transition duration-300"
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