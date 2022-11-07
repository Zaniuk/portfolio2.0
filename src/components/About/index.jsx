import React from "react";
import { motion } from "framer-motion";
import "./index.scss";
import UserPicture from "./UserPicture";
export default function index() {
  return (
    <section className="about">
      <UserPicture />
      <motion.article
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <h1>About me</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
        >
          Mi camino en la tecnología empezó a los 4 años, cuando me regalaron
          una PC HP Pavilion 7910. Con esa máquina que me acompañó hasta llegar
          a mi adolescencia descubrí el internet y el mundo del hardware y de la
          programación, aprendiendo HTML, CSS y Python. Desde 2018 que trabajo
          freelance como soporte técnico de computadoras. En 2021 me propuse
          dedicarme de lleno a estudiar programación, algo que me apasiona y me
          motiva día a día a seguir aprendiendo más y más. A día de hoy diría
          que mi lenguaje de dominio principal es JavaScript pero estoy abierto
          a nuevos lenguajes y tecnologías.
        </motion.p>
      </motion.article>

      <motion.article
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
      >
        <h1>Why me?</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 1 }}
        >
          Soy una persona autodidacta, que no le cuesta preguntar o ayudar a sus
          compañeros. Suelo tomar mucho las iniciativas, aprendo rápido, tengo
          conocimientos de SCRUM y KANBAN. Me apasiona estar costantemente
          aprendiendo, resolviendo problemas y brindando soluciones.
        </motion.p>
      </motion.article>

      <motion.article
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
      >
        <h1>What makes me different?</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 1.5 }}
        >
          Algo que me diferencia del resto es mi capacidad de aprender,
          tanto de forma autodidacta como de forma más formal, prueba de ello es que
          se han estado moviendo a través de diferentes campos de la tecnología, tales como
          soporte técnico de computadores, venta de insumos tecnológicos, y
          mantenimiento de máquinas industriales (CNC). Estoy seguro de que mi
          capacidad de aprendizaje, adaptabilidad rápida, compromiso y ambiciones de
          crecimiento me convierten en el mejor candidato para su equipo.
        </motion.p>
      </motion.article>
    </section>
  );
}
