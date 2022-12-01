import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { DiReact, DiJavascript1, DiNodejs, DiPython } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiSass,
  SiMaterialui,
  SiFastapi,
  SiTypescript,
  SiGit,
  SiJava,
  SiSpring,
  SiAzuredevops,
  SiDocker,
  SiTerraform,
  SiDigitalocean,
  SiLinux,
} from "react-icons/si";
import { TbTestPipe2 } from "react-icons/tb";
import GridContainer from "./NewSkills/GridContainer";
import SkillCard from "./SkillCard";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const skills = [
  <SkillCard
    classList="frontend"
    icon={<DiReact />}
    color="#347CC4"
    name={"React.js"}
  />,
  <SkillCard
    classList="frontend"
    icon={<DiJavascript1 />}
    color="#F3DC4C"
    name={"Javascript"}
  />,
  <SkillCard
    classList="frontend"
    icon={<SiTypescript />}
    color="#347CC4"
    name={"Typescript"}
  />,
  <SkillCard
    classList="backend"
    icon={<SiExpress />}
    color="#6BA75C"
    name={"Express.js"}
  />,
  <SkillCard
    classList="database backend"
    icon={<SiMongodb />}
    color="#6BA75C"
    name={"MongoDB"}
  />,
  <SkillCard
    classList="database backend"
    icon={<SiPostgresql />}
    color="#347CC4"
    name={"PostgreSQL"}
  />,
  <SkillCard
    classList="database backend"
    icon={<SiMysql />}
    color="#D58B24"
    name={"MySQL"}
  />,
  <SkillCard
    classList="backend"
    icon={<DiNodejs />}
    color="#6BA75C"
    name={"Node.js"}
  />,
  <SkillCard
    classList="frontend"
    icon={<SiHtml5 />}
    color="#D58B24"
    name={"HTML5"}
  />,
  <SkillCard
    classList="frontend"
    icon={<SiCss3 />}
    color="#347CC4"
    name={"CSS3"}
  />,
  <SkillCard
    classList="frontend"
    icon={<SiSass />}
    color="#D47CA7"
    name={"SASS"}
  />,
  <SkillCard
    classList="frontend"
    icon={<SiMaterialui />}
    color="#047CFC"
    name={"Material UI"}
  />,
  <SkillCard classList="backend" icon={<DiPython />} name={"Python"} />,
  <SkillCard
    classList="backend"
    icon={<SiFastapi />}
    color="#049C8C  "
    name={"FastAPI"}
  />,
  <SkillCard
    classList="database backend"
    icon={<TbTestPipe2 />}
    color="#DB3509"
    name={"SQLAlchemy"}
  />,
  <SkillCard
    classList="tool"
    icon={<SiDocker />}
    color="#347CC4"
    name={"Docker"}
  />,
  <SkillCard classList="tool" icon={<SiGit />} color="#D58B24" name={"Git"} />,
  <SkillCard
    classList="backend"
    icon={<SiJava />}
    color="#DB3509"
    name={"Java"}
  />,
  <SkillCard
    classList="backend"
    icon={<SiSpring />}
    color="#6BA75C"
    name={"Spring"}
  />,
  <SkillCard
    classList="tool"
    icon={<SiAzuredevops />}
    color="#347CC4"
    name={"Azure"}
  />,
  <SkillCard
    classList="tool"
    icon={<SiTerraform />}
    color="#5744dc"
    name={"Terraform"}
  />,
  <SkillCard
    classList="tool"
    icon={<SiDigitalocean />}
    color="#347CC4"
    name={"Digital Ocean"}
  />,
  <SkillCard classList="tool" icon={<SiLinux />} name={"Linux"} />,
];
export default function NewSkills() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body2", color: "white" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="primary.main" centered>
            <Tab label="Todo" value="1" />
            <Tab label="Frontend" value="2" />
            <Tab label="Backend" value="3" />
            <Tab label="Bases de Datos" value="4" />
            <Tab label="Herramientas" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GridContainer>
            {skills.map((skill, k) => (
              <Grid item sm={6} md={4} lg={2} key={k}>
                {skill}
              </Grid>
            ))}
          </GridContainer>
        </TabPanel>
        <TabPanel value="2">
          <GridContainer>
            {skills.map((skill, k) => (
              <Grid item sm={6} md={4} lg={2} key={k}>
                {skill.props.classList.includes("frontend") && skill}
              </Grid>
            ))}
          </GridContainer>
        </TabPanel>
        <TabPanel value="3">
          <GridContainer>
            {skills.map((skill, k) => (
              <Grid item sm={6} md={4} lg={2} key={k}>
                {skill.props.classList.includes("backend") && skill}
              </Grid>
            ))}
          </GridContainer>
        </TabPanel>
        <TabPanel value="4">
          <GridContainer>
            {skills.map((skill, k) => (
              <Grid item sm={6} md={4} lg={2} key={k}>
                {skill.props.classList.includes("database") && skill}
              </Grid>
            ))}
          </GridContainer>
        </TabPanel>
        <TabPanel value="5">
          <GridContainer>
            {skills.map((skill, k) => (
              <Grid item sm={6} md={4} lg={2} key={k}>
                {skill.props.classList.includes("tool") && skill}
              </Grid>
            ))}
          </GridContainer>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
