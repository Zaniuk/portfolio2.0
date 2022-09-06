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
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
      tag: "Backend",
    },
    {
      title: "Blog API",
      description:
        "A simple blog API built with Node.js, Express, MongoDB and Mongoose.",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
      tag: "Backend",
    },
    {
      title: "Blog API",
      description:
        "A simple blog API built with Node.js, Express, MongoDB and Mongoose.",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
      tag: "Backend",
    },
    {
      title: "Blog API",
      description:
        "A simple blog API built with Node.js, Express, MongoDB and Mongoose.",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
      tag: "Backend",
    },
    {
      title: "Blog API",
      description:
        "A simple blog API built with Node.js, Express, MongoDB and Mongoose.",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
      tag: "Backend",
    },
  ];
  const certifications = [
    {
      company: "JP Morgan",
      title: "Paths to the Future",
      status: "Ongoing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, accusantium!",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
    },
    {
      company: "OpenBootcamp",
      title: "Java Backend Engineer",
      status: "Ongoing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, accusantium!",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
    },
    {
      company: "Nuntius IT",
      title: "Scrum  Methodology",
      status: "Completed",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, accusantium!",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
    },
    {
      company: "Freecodecamp",
      title: "Javascript Algorithms and Data Structures",
      status: "Completed",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, accusantium!",
      image:
        "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
    },
    {
      company: "Freecodecamp",
      title: "Responsive Web Design",
      status: "Completed",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, accusantium!",
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
              tag={project.tag}
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
