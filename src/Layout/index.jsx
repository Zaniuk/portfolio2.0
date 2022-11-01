import React , {useContext} from "react";
import { UserContext } from "../components/Context/UserProvider";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Navbar";
import "./index.scss";
import { motion } from "framer-motion";
import { Button, CssBaseline } from "@mui/material";
import UserBar from "../components/User/UserBar";
import { ArrowBack } from "@mui/icons-material";
export default function Layout() {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <div className="App">
      <CssBaseline/>
      
      {user ?
       <>
       <Sidebar />
       <div className="container">
       <UserBar user={user}/>
         <motion.div
           className="page"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           
           transition={{ ease: "easeInOut", duration: 1}}
         >
          <Button variant="contained" color="secondary" onClick={() => navigate(-1)}>
        <ArrowBack/>
      </Button>
           <Outlet />
           <div className="separator"></div>
         </motion.div>
       </div></> 
       : 
       <><Sidebar />
       <div className="container">
         <motion.div
           className="page"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           
           transition={{ ease: "easeInOut", duration: 1}}
         >
           <Outlet />
           <div className="separator"></div>
         </motion.div>
       </div></>}
      <Sidebar />
    </div>
  );
}
