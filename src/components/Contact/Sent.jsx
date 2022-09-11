import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.scss";
export default function Sent() {
  const { name } = useParams();
  return (
    <div className="container">
      <div className="contact-status">
        <h1>
          Thank you{' '}
          <motion.span
            initial={{ opacity: 0, color: "#6b5bd4" }}
            animate={{ opacity: 1, color: "#0496FF" }}
            transition={{ ease: 'easeIn' , delay: 0.3 }}

          >
            {name}
          </motion.span>
          {' '} for your message!
        </h1>
        <h2>I'll contact you soon</h2>
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  );
}
