import React from 'react'
import { NavLink } from 'react-router-dom'
export default function DesktopNav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeclassname="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            Acerca
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeclassname="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
