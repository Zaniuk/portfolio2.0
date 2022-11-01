import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
export default function index() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm('service_6n7r35s', 'template_1j6w6oi', form.current, 'l7OReEpuQx8r1_E4q')
      .then((result) => {
          if(result.text === 'OK'){
            window.location.href = '/contact/sent/' + e.target[1].value;
          }
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <motion.div >
        <h1 className="contact-section-title">Let's get in touch!</h1>
      <form ref={form} className='contact-form'  onSubmit={sendEmail}>
        <label>
          <span>Subject</span>
          <input type="text" name="subject" required placeholder='How can I help you?'/>
        </label>
        <label>
          <span>Name</span>
          <input type="text" name="user_name" required placeholder='Put your beautiful name here'/>
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="user_email" required placeholder={`I'll get in contact soon`} />
        </label>
        <label>
          <span>Message</span>
          <textarea name="user_message" id="" placeholder="Tell me more about"></textarea>
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
