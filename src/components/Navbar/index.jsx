import React, { useState , useEffect} from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import "./index.scss";
export default function Sidebar() {
  const [mobile, setMobile] = useState(true)
  useEffect(() => {
    const initialSize = window.innerWidth
    if (initialSize > 500) setMobile(false)
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      width <= 500 ? setMobile(true) : setMobile(false)
    }) 
  }, []);
  return (
    mobile ? <MobileNav /> : <DesktopNav />
  );
}
