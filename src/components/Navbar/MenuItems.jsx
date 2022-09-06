import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function MenuItems({ open }) {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <motion.ul
      id="menu-items"
      className={`menu-${open}`}
      initial="hidden"
      animate="visible"
      variants={list}
    >
      <motion.li variants={item}>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink to="/portfolio" activeclassname="active">
          Portfolio
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink to="/about" activeclassname="active">
          About
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink to="/blog" activeclassname="active">
          Blog
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink to="/contact" activeclassname="active">
          Contact
        </NavLink>
      </motion.li>
    </motion.ul>
  );
}
