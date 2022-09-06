import React from "react";
import { motion } from "framer-motion";
import "./index.scss";
import UserPicture from "./UserPicture";
export default function index() {
  return (
    <section className="about">
      <UserPicture/>
      <motion.article
        initial={{ x: -500 , opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <h1>About me</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
        >
          My path in technology started when I was 4 years old, when I was given
          a HP Pavilio 7910 PC. With that machine that accompained me until I
          reached my teens, I discovered the Internet, and the world of hardware
          and programming, learning HTML, CSS and Python. Since 2018 I work as
          freelance and self-employed computer technical support. In 2021 I
          intend to dedicate myself to fully studying programming, something
          that I'm passionate about and motivates me every day to continue
          learning more and more. Today I would say that my main language is
          JavaScript but I'm open to new languages and technologies.
        </motion.p>
      </motion.article>

      <motion.article
        initial={{ x: -500 , opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
      >
        <h1>Why me?</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 1 }}
        >
          I am a self-taught person, who does not find it difficult to ask or
          help his colleagues. I tend to take many initiatives, learn quickly, I
          have knowledge of SCRUM and KANBAN. I am passionate about constantly
          learning and solving problems and everything I do is done with the
          passion and ambition to grow as a person and as a professional.
        </motion.p>
      </motion.article>

      <motion.article
        initial={{ x: -500 , opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
      >
        <h1>What makes me different?</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 1.5 }}
        >
          Something that sets me apart from the rest is my ability to learn,
          both self-taught and in a more formal way, proof of this is that I
          have been moving through different fields of technology, such as
          technical support for computers, sale of technological supplies, and
          maintenance of industrial machines (CNC). I am confident that my
          learning abilities, quick adaptability, commitment and ambitions for
          growth make me the best candidate for your team.
        </motion.p>
      </motion.article>
    </section>
  );
}
