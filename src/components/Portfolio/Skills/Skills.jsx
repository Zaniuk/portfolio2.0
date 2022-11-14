import React from 'react'
import SkillCard from './SkillCard'
import {DiReact} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {DiNodejs, DiPython} from 'react-icons/di'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiSass} from 'react-icons/si'
import {SiMaterialui, SiFastapi, SiTypescript} from 'react-icons/si'
import {TbTestPipe2} from 'react-icons/tb'
import {SiVisualstudiocode} from 'react-icons/si'
import {SiGit} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {SiSpring} from 'react-icons/si'
import {SiAzuredevops} from 'react-icons/si'




export default function Skills() {
  return (
    <div className="skills">
        <SkillCard icon={<DiReact />} color="#347CC4" name={"React.js"}/>
        <SkillCard icon={<DiJavascript1 />} color="#F3DC4C" name={"Javascript"}/>
        <SkillCard icon={<SiTypescript />} color="#347CC4" name={"Typescript"}/>
        <SkillCard icon={<SiExpress />} color="#6BA75C" name={"Express.js"}/>
        <SkillCard icon={<SiMongodb />} color="#6BA75C" name={"MongoDB"}/>
        <SkillCard icon={<SiPostgresql />}  color="#347CC4" name={"PostgreSQL"}/>
        <SkillCard icon={<SiMysql />} color="#D58B24" name={"MySQL"}/>
        <SkillCard icon={<DiNodejs />} color="#6BA75C" name={"Node.js"}/>
        <SkillCard icon={<SiHtml5 />} color="#D58B24" name={"HTML5"}/>
        <SkillCard icon={<SiCss3 />} color="#347CC4"  name={"CSS3"}/>
        <SkillCard icon={<SiSass />} color="#D47CA7" name={"SASS"}/>
        <SkillCard icon={<SiMaterialui />} color="#047CFC" name={"Material UI"}/>
        <SkillCard icon={<DiPython />} name={"Python"}/>
        <SkillCard icon={<SiFastapi />}  color="#049C8C  " name={"FastAPI"}/>
        <SkillCard icon={<TbTestPipe2 /> } color="#DB3509" name={"SQLAlchemy"}/>
        <SkillCard icon={<SiVisualstudiocode />} color="#347CC4" name={"VSCode"}/>
        <SkillCard icon={<SiGit />} color="#D58B24" name={"Git"}/>
        <SkillCard icon={<SiJava />} color="#DB3509" name={"Java"}/>
        <SkillCard icon={<SiSpring />} color="#6BA75C" name={"Spring"}/>
        <SkillCard icon={<SiAzuredevops />} color="#347CC4" name={"Azure"}/>
    </div>
  )
}
