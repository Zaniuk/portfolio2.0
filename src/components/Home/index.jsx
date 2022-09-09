import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.scss";
export default function Home() {
  return (
    <div>
      <div className="landing">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi! <span className="highlight bold">I'm Geronimo Zaniuk</span>,{" "}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="color-blue bold"
        >
          A Full-stack Web Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Natural <span className="color-blue bold">challenge-seeker</span>, a{" "}
          <span className="color-blue bold">fast-learner</span> and{" "}
          <span className="color-blue bold">multidisciplinary</span> person. I'm
          searching for my first oportunity to work on a software development
          team.
        </motion.p>
        <Link to="/contact">
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              className="contact-button"
              initial={{ backgroundColor: "#0496FF", color: "#fff", scale: 1 }}
              whileHover={{
                backgroundColor: "#6b5bd4",
                scale: 1.2,
                transition: { type: "spring", stiffness: 300, bounce: 0.5 },
              }}
            >
              Contact Me
            </motion.button>
          </motion.span>
        </Link>
      </div>
    </div>
  );
}
