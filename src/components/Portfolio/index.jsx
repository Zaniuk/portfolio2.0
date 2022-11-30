import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import Card from "./Card";
import Certification from "./Certification";
import Skills from "./Skills/Skills";
export default function index() {
  const projectList = [
    {
      title: "ONG Alkemy client",
      
      description: "Webapp para una ONG que permite gestionar todo el contenido de la página, desde las actividades y novedades, hasta los contactos",
      image:
        "/projects/ong.webp",
      tags: ["Frontend", "React"],
      github: "https://github.com/Zaniuk/OT288-client",
      demo: "https://ong.zaniuk.tech/",
    },
    {
      title: "ONG Alkemy API",
      //description: "RESTful API made with NodeJS, Express, MySQL and Sequelize. It have JWT-based auth system and form validations.",
      description: "API RESTful hecha con NodeJS, Express, MySQL y Sequelize. Cuenta con sistema de autenticación con JWT y validación de formularios",
      image:
        "/projects/ong.webp",
      tags: ["Backend", "RESTful API"],
      github: "https://github.com/alkemyTech/OT288-server/tree/dev"
    },
    {
      title: "Portfolio CMS",
      description:
        "API RESTful para manejar todo el contenido de mi portfolio de manera dinámica sin tocar el código",
      image:
        "/projects/cms.webp",
      tags: ["Backend", "RESTful API"],
      github: "https://github.com/Zaniuk/Portfolio-Server"
    },
    {
      title: "Blog API",
      description:
        "Sistema de blogging basado en REST. Hecho con NodeJS, Express y MongoDB. Deploy en Azure.",
      image:
        "/projects/GERONIMO.webp",
      tags: ["Backend", "RESTful API", "Azure"],
      github: "https://github.com/Zaniuk/portfolio-backend",
    },
    {
      title: "ABM Bancario",
      description:
        "Sistema ABM bancario. Hecho con React, NodeJS, Express, Sequelize y PostgreSQL. Autenticación con JWT.",
      image:
        "/projects/money.webp",
      tags: ["Fullstack", "RESTful API"], 
      github: "https://github.com/Zaniuk/AlkemyChallenge",
      demo: "https://abm.zaniuk.tech/"
    },

    {
      title: "Anime Recommendations App",
      description:
        "WebApp de recomendación de anime. Hecho con React y Pico.css",
      image:
        "/projects/anime.webp",
      tags: ["Frontend", "API"],
      github: "https://github.com/Zaniuk/Anime-App",
      demo: "https://anime.zaniuk.tech/"
    },
    {
      title: "React Weather App",
      description:
        "WebApp de demostración sobre consumo de APIs en React",
      image:
        "/projects/weather.webp",
      tags: ["Frontend", "API"],
      github: "https://github.com/Zaniuk/WeatherReactApp",
      demo: "https://weather.zaniuk.tech/"
    },
    {
      title: "The Wine Valley",
      description:
        "Página estática hecha con HTML, CSS y Javascript. Simula una tienda de vinos",
      image:
        "/projects/wine.webp",
      tags: ["Frontend", "Static"],
      github: "https://github.com/Zaniuk/TiendaVinos",
      demo: "https://winevalley.zaniuk.tech/"
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
    <section className="skills-section">
      <h1 className="section-title">Tecnologías</h1>
      <Skills/>
    </section>
      <section className="projects">
        <h1 className="section-title">Proyectos</h1>
        <div className="projects-container">
          {projectList.map((project, index) => (
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              key={`project-${index}`}
            />
          ))}
        </div>
      </section>
      <section>
        <hr/>
        <h1 className="section-title">Certificaciones</h1>
        <hr/>
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
