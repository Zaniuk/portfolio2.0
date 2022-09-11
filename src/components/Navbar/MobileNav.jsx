import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";
import {FcCollapse, FcExpand } from "react-icons/fc";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
    useEffect(()  => {
      
      const togglebutton = document.getElementById('toggle-button')
      togglebutton.addEventListener('click' , () => {
        setTimeout(() => {
          setOpen(!open);
          clearTimeout()
        }, 500)
      })
    
    } , [open])
  return (
    <nav className="mobile-nav">
      <div className="button-wrapper">
        <button className="toggle-button" id="toggle-button">
          {open ?  <FcExpand  /> : <FcCollapse /> }
        </button>
      </div>
      {open ? <MenuItems open={open} /> : null}
      
    </nav>
  );
}
