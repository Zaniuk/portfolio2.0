import React from 'react'
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
import AboutItem from './AboutItem';


const aboutItems = [
    {
        title: "Un poco sobre mí",
        description: "Mi camino en la tecnología empezó a los 4 años, cuando me regalaron una PC HP Pavilion 7910. Con esa máquina que me acompañó hasta llegar a mi adolescencia descubrí el internet y el mundo del hardware y de la programación, aprendiendo HTML, CSS y Python. Desde 2018 que trabajo freelance como soporte técnico de computadoras. En 2021 me propuse dedicarme de lleno a estudiar programación, algo que me apasiona y me motiva día a día a seguir aprendiendo más y más. A día de hoy diría que mi lenguaje de dominio principal es JavaScript pero estoy abierto a nuevos lenguajes y tecnologías."
    },
    {
        title: "¿Por qué yo?",
        description: "Soy una persona autodidacta, que no le cuesta preguntar o ayudar a sus compañeros. Suelo tomar mucho las iniciativas, aprendo rápido, tengo conocimientos de SCRUM y KANBAN. Me apasiona estar costantemente aprendiendo, resolviendo problemas y brindando soluciones."

    },
    {
        title: "¿Qué me hace diferente?",
        description: "Algo que me diferencia del resto es mi capacidad de aprender, tanto de forma autodidacta como de forma más formal, prueba de ello es que se han estado moviendo a través de diferentes campos de la tecnología, tales como soporte técnico de computadores, venta de insumos tecnológicos, y mantenimiento de máquinas industriales (CNC). Estoy seguro de que mi capacidad de aprendizaje, adaptabilidad rápida, compromiso y ambiciones de crecimiento me convierten en el mejor candidato para su equipo."
    }
]

export default function NewAbout() {
    const [screenSize, setScreenSize] = React.useState('');
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setScreenSize('sm');
            } else {
                setScreenSize('md');
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <Timeline position="alternate">
    
        {aboutItems.map((item, index) => (
            <AboutItem screenSize={screenSize}  key={index} title={item.title} description={item.description} i={index} />
        ))}

  </Timeline>
  )
}
