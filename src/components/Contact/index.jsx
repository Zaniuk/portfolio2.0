import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
export default function index() {
  return (
    <motion.div >
        <h1 className="contact-section-title">Let's get in touch!</h1>
      <form>
        <label>
          <span>Subject</span>
          <input type="text" required placeholder='How can I help you?'/>
        </label>
        <label>
          <span>Name</span>
          <input type="text" required placeholder='Put your beautiful name here'/>
        </label>
        <label>
          <span>Email</span>
          <input type="email" required placeholder={`I'll get in contact soon`} />
        </label>
        <label>
          <span>Message</span>
          <textarea name="" id="" placeholder="Tell me more about"></textarea>
        </label>
        <label> 
          
          <div className="button-wrapper">
            <motion.button layout
            initial={{
              backgroundColor: '#0496FF',
              padding: '1rem 2rem'
            }}
            whileHover={{
              backgroundColor: '#4a3ca0',
              padding: '1.5rem 10rem'
            }}
            transition={{duration: 0.35}}
             type="submit">Send</motion.button>
          </div>
        </label>
      </form>
    </motion.div >
  );
}
