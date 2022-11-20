import React from 'react'
import './index.scss'
export default function SkillCard({name, icon, color, classList}) {
  return (
    <div className={`skill-card ${classList}`}>
        <h1 className='skill-icon' style={{
            color: color ? color : 'white'
        }}>{icon}</h1>
        <h3 className="skill-card__name">{name}</h3>
    </div>
  )
}
