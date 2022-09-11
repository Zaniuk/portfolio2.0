import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import Card from "./Card";
import Certification from "./Certification";
export default function index() {
  const projectList = [
    {
      title: "Blog API",
      description:
        "A simple blog API built with Node.js, Express, MongoDB and Mongoose.",
      image:
        "https://i.ibb.co/vP8Mg1n/GERONIMO.png",
      tags: ["Backend", "RESTful API"],
      github: "https://github.com/Zaniuk/portfolio-backend"
    },
    // {
    //   title: "Udemy Free Course Notifier",
    //   description:
    //     "A simple app that notifies you when a course you're interested in goes free on Udemy.",
    //   image:
    //     "https://i.pinimg.com/originals/84/34/0d/84340dfa0ee08fec0ab5b573f4716221.jpg",
    //   tags: ["Backend", "Tooling"],
    //   github: "https://github.com/Zaniuk/AlkemyChallenge"
    // },
    {
      title: "ABM Bancario",
      description:
        "A banking system built with React.js, Node.js, Express, PostgreSQL and Sequelize.",
      image:
        "https://www.ubackground.com/_ph/2/617246434.jpg",
      tags: ["Fullstack", "RESTful API"], 
      github: "https://github.com/Zaniuk/AlkemyChallenge"
    },

    {
      title: "Anime Recommendations App",
      description:
        "A simple anime recommendations app built with React.JS.",
      image:
        "https://i1.sndcdn.com/artworks-000630799198-kqinmt-t500x500.jpg",
      tags: ["Frontend", "API"],
      github: "https://github.com/Zaniuk/Anime-App"
    },
    {
      title: "React Weather App",
      description:
        "A simple weather app built with React.js and OpenWeatherMap API.",
      image:
        "http://store-images.s-microsoft.com/image/apps.10595.14397430983184912.cfdf6f70-0a34-4999-b494-936559d822c3.7355576f-baf9-4be3-8b34-27bdc6ac1bd2",
      tags: ["Frontend", "API"],
      github: "https://github.com/Zaniuk/WeatherReactApp"
    },
    {
      title: "The Wine Valley",
      description:
        "Static website built with HTML, CSS and JavaScript. Simulates a wine shop.",
      image:
        "https://wallpaperaccess.com/full/468014.jpg",
      tags: ["Frontend", "Static"],
      github: "https://github.com/Zaniuk/TiendaVinos"
    },  
   
  ];
  const certifications = [
    {
      company: "JP Morgan",
      title: "Paths to the Future",
      status: "Ongoing",
      description:
        "Object Oriented Programming. MongoDB, ExpressJS, React, NodeJS, test-driven development, domain driven development.",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
    },
    {
      company: "OpenBootcamp",
      title: "Java Backend Engineer",
      status: "Ongoing",
      description:
        "OOP, Design Patterns, Git, Spring, REST, Postman, Performance, CLEAN Architecture, SOLID Principles, Clean Code Patterns",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
    },
    {
      company: "Nuntius IT",
      title: "Scrum  Methodology",
      status: "Completed",
      description:
        "Introduction to SCRUM Methodology: User Stories, Processes, Scrum Roles, Events, Artifacts, Planning",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
    },
    {
      company: "Freecodecamp",
      title: "Javascript Algorithms and Data Structures",
      status: "Completed",
      description:
        "JavaScript, ES6 - ES12, destructuring, regular expressions, JavaScript good practices.",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
    },
    {
      company: "Freecodecamp",
      title: "Responsive Web Design",
      status: "Completed",
      description:
        "HTML, CSS, Bootstrap, responsive and accesible  design, SEO good practices",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
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
