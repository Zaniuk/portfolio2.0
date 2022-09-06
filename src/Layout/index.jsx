import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navbar";
import "./index.scss";
import { motion } from "framer-motion";
export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <motion.div
          className="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          
          transition={{ ease: "easeInOut", duration: 1}}
        >
          <Outlet />
          <div className="separator"></div>
        </motion.div>
      </div>
    </div>
  );
}
