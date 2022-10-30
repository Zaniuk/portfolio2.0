import { CardMembership, ContactPhone, Home, Info, Work } from "@mui/icons-material";
import { Box, Button, Icon, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Backoffice.scss";

export default function Backoffice() {
    const routes = [
        {
          name: "Bienvenida",
          path: "/backoffice/home",
          icon:  <Home sx={{fontSize: '60px'}}/>
        },
        {
          name: "Proyectos",
          path: "/backoffice/projects",
          icon: <Work sx={{fontSize: '60px'}}/>
        },
        {
          name: "Certificaciones",
          path: "/backoffice/certifications",
          icon: <CardMembership sx={{fontSize: '60px'}}/>
        },
        {
          name: "About",
          path: "/backoffice/about",
          icon: <Info sx={{fontSize: '60px'}}/>
        },
        {
          name: "Contacto",
          path: "/backoffice/contact",
          icon: <ContactPhone sx={{fontSize: '60px'}}/>
        },
      ];
  return (
    <>
    
        <Typography textAlign='center' component='h2' variant="h3" color='#6b5bd4'>Backoffice</Typography>
    <div className="backoffice-items-container">
      {routes.map((route, index) => (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            aspectRatio: "3/2",
            borderRadius: "10px",
            padding: "1rem",
            backgroundColor: "#3B3561",
            '& a': {
                textDecoration: "none",
                color: "inherit",
            },
        }}>
            <Typography textAlign='center' component='h2' variant="h5" color='#6b5bd4'>{route.name}</Typography>
            <Icon 
            sx={{
                width: "fit-content",
                height: "fit-content",
                marginTop: "20px",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
            {route.icon}
            </Icon>
            <Link to={route.path}>
                <Button sx={{
                    padding: ".5rem 1rem",
                    backgroundColor: "#6b5bd4",
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: "#0496FF",
                    }

                }}>

                <Typography>
                    Navegar
                </Typography>
                </Button>
            </Link>
        </Box>
      ))}
    </div>
    </>
  );
}
