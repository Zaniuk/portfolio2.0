import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.scss";
import parse from "html-react-parser";
import httpService from '../../services/httpService';
export default function Home() {
  const [data, setData] = React.useState();
  const getData = async () => {
    const res = await httpService.get('/home')
    setData(res.data)
  }
  React.useEffect(() => {
    getData()
  }, []);

  return (
    <div className="landing-wrapper">
      <div className="landing">
       
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {data && parse(data.description)}
        </motion.p>
        <Link to="/contact">
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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
