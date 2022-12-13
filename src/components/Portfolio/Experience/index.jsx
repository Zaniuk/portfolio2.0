import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import timelineItemClasses from "@mui/lab/TimelineItem";

import { ExperienceItem, ExperienceItemMobile } from "./ExperienceItem";
const experience = [
  {
    title: "Fullstack Developer",
    date: "09-2022 - Presente",
    company: "Alkemy Labs",
    description:
      "Responsable de desarrollar y mantener una aplicación web de una ONG Diseñé el front-end de la aplicación utilizando React y MaterialUI, y el back-end utilizando Node.js, Express y MySQL con Sequelize. Configuré la integración y despliegue contínuo en un servidor privado virtual.",
    color: "#347CC4",
  },
  {
    title: "Profesor de React / NodeJS",
    date: "05-2022 - Presente",
    company: "Freelance",
    description:
      "Responsable de diseñar una ruta de estudio en base a las necesidades del alumno. Indicar cómo seguir buenas prácticas, leer las documentaciones oficiales y como diseñar una arquitectura de proyecto. Enseñar maneras en las que podemos escribir código limpio, escalable y mantenible.",
    color: "#6BA75C",
  },
  {
    title: "Python Developer",
    date: "01-2019 - 04-2020",
    company: "PCShow Computación",
    description:
      "Responsable del diseño, desarrollo e implementación de plataforma de registro de incidencias teniendo en cuenta la eficiencia y escalabilidad de la misma.",
    color: "#5744dc",
  },
  {
    title: "Técnico en Soporte Informático",
    date: "02-2018 - 03-2020",
    company: "PCShow Computación",
    description:
      "Asistencia técnica. Diagnósis a nivel de software y de componentes. Documentación de procedimientos e incidentes. Configuración, instalación, mantenimiento y soporte a usuarios de software base.",
    color: "#047CFC",
  },
];
export default function CustomizedTimeline() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const breakpoint = 768;
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    width > breakpoint ? (
        <Timeline align="alternate">
          {experience.map((item, index) => (    
            <ExperienceItem
              key={index}
              {...item}
                index={index}
            />
            ))}
        </Timeline>
        ) : (
        <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
        }}>
            {experience.map((item, index) => (
            <ExperienceItemMobile
                key={index}
                {...item}
                index={index}
            />
            ))}
        </Timeline>
        )
        
  );
}
