import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.scss";
export default function Home() {
  return (
    <div className="landing-wrapper">
      <div className="landing">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ¡Hola! Soy <span className="highlight bold">Geronimo Zaniuk</span>,{" "}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="color-blue bold"
        >
          Un desarrollador web fullstack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Entusiasta de todo lo relacionado con el desarrollo web. 
          Principalmente autodidacta y he estado perfeccionando mis habilidades durante mas de dos años.
          Tengo experiencia en la creación de aplicaciones web desde cero y siempre me emociona aprender nuevas tecnologías.
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
