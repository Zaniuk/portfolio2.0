import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import ExperienceItem from './ExperienceItem';
const experience = [
    {
        title: "Fullstack Developer",
        date: "09-2022 - Presente",
        company: "Alkemy Labs",
        description: "Responsable de desarrollar y mantener una aplicación web de una ONG Diseñé el front-end de la aplicación utilizando React y MaterialUI, y el back-end utilizando Node.js, Express y MySQL con Sequelize. Configuré la integración y despliegue contínuo en un servidor privado virtual.",
        color :"#347CC4"
    },
    {
        title: "Profesor de React / NodeJS",
        date: "05-2022 - Presente",
        company: "Freelance",
        description: "Responsable de diseñar una ruta de estudio en base a las necesidades y deseos del alumno. Indicar cómo seguir buenas prácticas, leer las documentaciones oficiales y como diseñar una arquitectura de proyecto. Enseñar maneras en las que podemos escribir código limpio, escalable y mantenible.",
        color :"#6BA75C"
    },
    {
        title: "Python Developer",
        date: "01-2019 - 04-2020",
        company: "PCShow Computación",
        description :"Responsable del diseño, desarrollo e implementación de plataforma de registro de incidencias teniendo en cuenta la eficiencia y escalabilidad de la misma.",
        color :"#5744dc"
    },
    {
        title: "Técnico en Soporte Informático",
        date : "02-2018 - 03-2020",
        company: "PCShow Computación",
        description: "Asistencia técnica. Diagnósis a nivel de software y de componentes. Documentación de procedimientos e incidentes. Configuración, instalación, mantenimiento y soporte a usuarios de software base.",
        color :"#047CFC"
    }
]
export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
        {experience.map((item, index) => (
            <ExperienceItem key={index} index={index} {...item} />
        ))}
    </Timeline>
  );
}
