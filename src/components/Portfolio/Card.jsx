import React, {useRef} from "react";
import "./Card.scss";
import { motion, useInView } from "framer-motion";
import Tags from "./Tags";
export default function Card({ title, description, image, tags, github, demo}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="card"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="card-header">
        <img src={image} alt="rover" />
      </div>
      <div className="card-body">
        <Tags tags={tags} />
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <a href={github} className="project-link">
            <motion.button
            initial={{scale: 1}}
            whileHover={{scale: 1.2}}
            transition={{type: "spring", stiffness: 300, bounce: 0.5}}
            className="project-button-link">Github</motion.button>
          </a>
          <a href={demo} className="project-link">
            <motion.button
            initial={{scale: 1}}
            whileHover={{scale: 1.2}}
            transition={{type: "spring", stiffness: 300, bounce: 0.5}}
            className="project-button-link">Demo</motion.button>
          </a>
        </div>
      </div>
    </div>
  );
}
