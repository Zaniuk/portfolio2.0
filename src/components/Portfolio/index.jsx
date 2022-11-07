import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import Card from "./Card";
import Certification from "./Certification";
export default function index() {
  const projectList = [
    {
      title: "ONG Alkemy API",
      description:
        "RESTful API made with NodeJS, Express, MySQL and Sequelize. It have JWT-based auth system and form validations.",
      image:
        "/projects/ong.webp",
      tags: ["Backend", "RESTful API"],
      github: "https://github.com/Zaniuk/portfolio-backend"
    },
    {
      title: "Blog API",
      description:
        "Blog API built with Node.js, Express, MongoDB and Mongoose. Deploy in Azure.",
      image:
        "/projects/GERONIMO.webp",
      tags: ["Backend", "RESTful API"],
      github: "https://github.com/Zaniuk/portfolio-backend"
    },
    {
      title: "ABM Bancario",
      description:
        "A banking system built with React.js, Node.js, Express, PostgreSQL and Sequelize.",
      image:
        "/projects/money.webp",
      tags: ["Fullstack", "RESTful API"], 
      github: "https://github.com/Zaniuk/AlkemyChallenge"
    },

    {
      title: "Anime Recommendations App",
      description:
        "A simple anime recommendations app built with React.JS.",
      image:
        "/projects/anime.webp",
      tags: ["Frontend", "API"],
      github: "https://github.com/Zaniuk/Anime-App"
    },
    {
      title: "React Weather App",
      description:
        "A simple weather app built with React.js and OpenWeatherMap API.",
      image:
        "/projects/weather.webp",
      tags: ["Frontend", "API"],
      github: "https://github.com/Zaniuk/WeatherReactApp"
    },
    {
      title: "The Wine Valley",
      description:
        "Static website built with HTML, CSS and JavaScript. Simulates a wine shop.",
      image:
        "/projects/wine.webp",
      tags: ["Frontend", "Static"],
      github: "https://github.com/Zaniuk/TiendaVinos"
    },  
   
  ];
  const certifications = [
    {
      company: "Alkemy",
      title: "Fullstack Javascript",
      status: "Ongoing",
      description:
        "SCRUM, GitFlow, MongoDB, ExpressJS, React, MaterialUI, NodeJS.",
      image:
        "https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=750%2C422&strip=all",
    },

    {
      company: "OpenBootcamp",
      title: "Java Backend Engineer",
      status: "Ongoing",
      description:
        "OOP, Design Patterns, Git, Spring, REST, Postman, Performance, CLEAN Architecture, SOLID Principles, Clean Code Patterns",
      image:
        "https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=750%2C422&strip=all",
    },
    {
      company: "JP Morgan",
      title: "Paths to the Future",
      status: "Completed",
      description:
        "Object Oriented Programming. MongoDB, ExpressJS, React, NodeJS, test-driven development, domain driven development.",
      image:
        "https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=750%2C422&strip=all",
    },
    {
      company: "Nuntius IT",
      title: "Scrum  Methodology",
      status: "Completed",
      description:
        "Introduction to SCRUM Methodology: User Stories, Processes, Scrum Roles, Events, Artifacts, Planning",
      image:
        "https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=750%2C422&strip=all",
    },
    {
      company: "Freecodecamp",
      title: "Javascript Algorithms and Data Structures",
      status: "Completed",
      description:
        "JavaScript, ES6 - ES12, destructuring, regular expressions, JavaScript good practices.",
      image:
        "https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=750%2C422&strip=all",
    },
    {
      company: "Freecodecamp",
      title: "Responsive Web Design",
      status: "Completed",
      description:
        "HTML, CSS, Bootstrap, responsive and accesible  design, SEO good practices",
      image:
        "https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=750%2C422&strip=all",
    },
  ];
  return (
    <>
      <section className="projects">
        <h1 className="section-title">Projects</h1>
        <div className="projects-container">
          {projectList.map((project, index) => (
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              key={`project-${index}`}
            />
          ))}
        </div>
      </section>
      <section>
        <h1 className="section-title">Certifications</h1>

            <div className="cert-wrapper">
              {certifications.map((cert, index) => {
                return (
                  <Certification
                    title={cert.title}
                    company={cert.company}
                    status={cert.status}
                    description={cert.description}
                    image={cert.image}
                    key={`cert-${index}`}
                  />
                );
              })}
            </div>
      </section>
    </>
  );
}
