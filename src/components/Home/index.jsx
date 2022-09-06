import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.scss";
export default function Home() {
  return (
    <div>
      <div className="landing">
        <h1>Hi! <span className="highlight bold">I'm Geronimo Zaniuk</span>, </h1>
        <h2 className="color-blue bold">A Full-stack Web Developer</h2>
        <p>
          Natural <span className="color-blue bold">challenge-seeker</span>, a <span className="color-blue bold">fast-learner</span> and <span className="color-blue bold">multidisciplinary</span> person.
          I'm searching for my first oportunity to work on a software
          development team.
        </p>
        <Link to="/contact">
          <motion.button
            className="contact-button"
            initial={{backgroundColor: '#0496FF', color: '#fff', scale: 1}}
            whileHover={{
              backgroundColor: '#6b5bd4',
              scale: 1.2,
              transition: { ease: 'circIn', duration: 0.5 },
            }}
          >
            Contact Me
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
