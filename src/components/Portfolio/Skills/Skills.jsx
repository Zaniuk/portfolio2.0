import React, { useEffect } from 'react'
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

import {SiGit} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {SiSpring} from 'react-icons/si'
import {SiAzuredevops} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'
import {SiTerraform} from 'react-icons/si'
import {SiDigitalocean} from 'react-icons/si'
// Linux
import {SiLinux} from 'react-icons/si'
import { useRef } from 'react'


export default function Skills() {
  const showAll = () => {
    const elements = parent.current.children
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('hide')) {
        elements[i].classList.remove('hide')
      }}
  }
  const filterFrontend = () => {
    const elements = parent.current.children
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('hide')) {
        elements[i].classList.remove('hide')
      }}
    for (let i = 0; i < elements.length; i++) {
      if(!elements[i].classList.contains('frontend')) {
        elements[i].classList.add('hide')
      }
    }
  }
  const filterBackend = () => {
    const elements = parent.current.children
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('hide')) {
        elements[i].classList.remove('hide')
      }}
    for (let i = 0; i < elements.length; i++) {
      if(!elements[i].classList.contains('backend')) {
        elements[i].classList.add('hide')
      }
    }
  }
  const filterDatabase = () => {
    const elements = parent.current.children
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('hide')) {
        elements[i].classList.remove('hide')
      }}
    for (let i = 0; i < elements.length; i++) {
      if(!elements[i].classList.contains('database')) {
        elements[i].classList.add('hide')
      }
    }
  }
  const filterTool = () => {
    const elements = parent.current.children
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('hide')) {
        elements[i].classList.remove('hide')
      }}
    for (let i = 0; i < elements.length; i++) {
      if(!elements[i].classList.contains('tool')) {
        elements[i].classList.add('hide')
      }
    }
  }
  const parent = useRef(null)

  return (
    <>
    <div className='skills-buttons'>
    <button onClick={() => showAll()} className='skills-buttons__button'>Todo</button>
      <button onClick={() => filterFrontend()} className='skills-buttons__button'>Frontend</button>
      <button  onClick={() => filterBackend()} className='skills-buttons__button'>Backend</button>
      <button onClick={() => filterDatabase()} className='skills-buttons__button'>Bases de datos</button>
      <button onClick={() => filterTool()} className='skills-buttons__button'>Herramientas</button>
    </div>
    <div className="skills-wrapper">
      <div ref={parent} className="skills">
          <SkillCard classList="frontend" icon={<DiReact />} color="#347CC4" name={"React.js"}/>
          <SkillCard classList="frontend" icon={<DiJavascript1 />} color="#F3DC4C" name={"Javascript"}/>
          <SkillCard classList="frontend" icon={<SiTypescript />} color="#347CC4" name={"Typescript"}/>
          <SkillCard classList="backend" icon={<SiExpress />} color="#6BA75C" name={"Express.js"}/>
          <SkillCard classList="database backend" icon={<SiMongodb />} color="#6BA75C" name={"MongoDB"}/>
          <SkillCard classList="database backend" icon={<SiPostgresql />}  color="#347CC4" name={"PostgreSQL"}/>
          <SkillCard classList="database backend" icon={<SiMysql />} color="#D58B24" name={"MySQL"}/>
          <SkillCard classList="backend" icon={<DiNodejs />} color="#6BA75C" name={"Node.js"}/>
          <SkillCard classList="frontend" icon={<SiHtml5 />} color="#D58B24" name={"HTML5"}/>
          <SkillCard classList="frontend" icon={<SiCss3 />} color="#347CC4"  name={"CSS3"}/>
          <SkillCard classList="frontend" icon={<SiSass />} color="#D47CA7" name={"SASS"}/>
          <SkillCard classList="frontend" icon={<SiMaterialui />} color="#047CFC" name={"Material UI"}/>
          <SkillCard classList="backend" icon={<DiPython />} name={"Python"}/>
          <SkillCard classList="backend" icon={<SiFastapi />}  color="#049C8C  " name={"FastAPI"}/>
          <SkillCard classList="database backend" icon={<TbTestPipe2 /> } color="#DB3509" name={"SQLAlchemy"}/>
          <SkillCard classList="tool" icon={<SiDocker />} color="#347CC4" name={"Docker"}/>
          <SkillCard classList="tool" icon={<SiGit />} color="#D58B24" name={"Git"}/>
          <SkillCard classList="backend" icon={<SiJava />} color="#DB3509" name={"Java"}/>
          <SkillCard classList="backend" icon={<SiSpring />} color="#6BA75C" name={"Spring"}/>
          <SkillCard classList="tool" icon={<SiAzuredevops />} color="#347CC4" name={"Azure"}/>
          <SkillCard classList="tool" icon={<SiTerraform />} color="#5744dc" name={"Terraform"}/>
          <SkillCard classList="tool" icon={<SiDigitalocean />} color="#347CC4" name={"Digital Ocean"}/>
          <SkillCard classList="tool" icon={<SiLinux />} name={"Linux"}/>
      </div>
    </div>
    </>
  )
}
