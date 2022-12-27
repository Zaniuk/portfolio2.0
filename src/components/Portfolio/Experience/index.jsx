import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import timelineItemClasses from "@mui/lab/TimelineItem";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Paper, Typography } from "@mui/material";


const experience = [
  {
    title: "Fullstack Developer",
    date: "09-2022 - Presente",
    company: "Alkemy Labs",
    description:
      `La arquitectura propuesta por mí logró un tiempo de respuesta rápido y estable del sistema, lo que resultó en una mejora significativa en la satisfacción del usuario final.\n
        Aplicando los principios SOLID y arquitectura CLEAN he diseñado y desarrollado un sistema que se ha mostrado altamente escalable y fácil de mantener y actualizar en el futuro.
      `,
    color: "#347CC4",
  },
  {
    title: "Profesor de React / NodeJS",
    date: "05-2022 - Presente",
    company: "Freelance",
    description:
      `Diseñar planes de estudio personalizados que ayuden a los alumnos a alcanzar sus metas y objetivos académicos.\n
      Implementar buenas prácticas en el diseño de las rutas de estudio, como la lectura de documentaciones oficiales y la creación de arquitecturas de proyecto sólidas y bien pensadas.\n
      Enseñar a los alumnos cómo escribir código limpio, escalable y mantenible, lo que les ayudará a desarrollar habilidades técnicas valiosas en su carrera profesional.
      `,
    color: "#6BA75C",
  },
  {
    title: "Fullstack Developer",
    date: "03-2022 - 09-2022",
    company: "J.P Morgan Chase & Co.",
    description:
      `(Capacitación laboral)\n
      Metodologías ágiles y GitFlow
      Aplicación de patrones de diseño
      Desarrollo de soluciones utilizando arquitecturas límpias y microservicios
      Desarrollo de aplicaciones eficientes y escalables con un alto grado de adaptabilidad a diferentes proyectos y situaciones.
      
      `,
    color: "#347CC4",
  },
  {
    title: "Fullstack Developer",
    date: "03-2018 - 04-2020",
    company: "PCShow Computación",
    description:
      `Mejorar la eficiencia del registro de usuarios y las incidencias, lo que reduce el tiempo y los esfuerzos necesarios para llevar un registro completo y preciso.
      Acelerar el tiempo de respuesta en búsquedas, lo que permite a los usuarios y clientes encontrar la información que necesitan de manera más rápida y sencilla.
      Aumentar la tolerancia a errores del sistema aplicando filtros y normalizado de datos.
      Decreció el coste de capacitación de nuevos empleados gracias a una interfaz amigable para el usuario.
      `,
    color: "#5744dc",
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
            <TimelineItem
              key={index}
              sx={{
                "&:before": {
                  display: "none",
                },
              }}
            >
              <TimelineOppositeContent
                sx={{ m: "auto 0", textAlign: "right" }}  
              >
                <Typography variant="body2" color={item.color}>
                  {item.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: item.color }} />
                {index !== experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{
              }}>
                <Paper elevation={3} sx={{ p: "6px 16px", bgcolor: 'transparent', color: 'white' }}>
                  <Typography variant="h6" component="span" color={item.color}>
                    {item.title}
                  </Typography>
                  <Typography>{item.company}</Typography>
                  <Typography>{item.description}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        ) : (
        <Timeline align="right" >
          {experience.map((item, index) => (
            <TimelineItem

              key={index}
              sx={{
                "&:before": {
                  display: "none",
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: item.color }} />
                {index !== experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ p: "6px 16px" }}>
                  <Typography variant="h6" component="span" color={item.color}>
                    {item.title}
                  </Typography>
                  <Typography>{item.company}</Typography>
                  <Typography>{item.description}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        )

        
  );
}
