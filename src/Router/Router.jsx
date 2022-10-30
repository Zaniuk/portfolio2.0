import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import Layout from '../Layout'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Post from '../components/Blog/Post'
import {AnimatePresence} from 'framer-motion'
import Sent from '../components/Contact/Sent'
import Backoffice from '../components/Backoffice/Backoffice'
import BackofficeHome from '../components/Backoffice/routes/Home/BackofficeHome'
import BackofficeProjects from '../components/Backoffice/routes/Projects/BackofficeProjects'
import BackofficeCertifications from '../components/Backoffice/routes/Certifications/BackofficeCertifications'
import BackofficeAbout from '../components/Backoffice/routes/About/BackofficeAbout'
import Login from '../components/Backoffice/routes/Login/Login'
import Auth from '../components/Auth'

import { ThemeProvider, createTheme } from '@mui/material/styles'
export default function ExtRouter() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
    const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
        <ThemeProvider theme={darkTheme}>
          <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
              </Route>
              <Route path='/portfolio' element={<Layout/>}>
                <Route index element={<Portfolio/>} />
              </Route>
              <Route path='/about' element={<Layout/>}>
                <Route index element={<About/>} />
              </Route>
              <Route path='/blog' element={<Layout/>}>
                <Route index element={<Blog/>} />
              </Route>
              <Route path='/contact' element={<Layout/>}>
                <Route index element={<Contact/>} />
              </Route>
              <Route path='/contact/sent/:name' element={<Layout/>}>
                <Route index element={<Sent/>} />
              </Route>
              <Route path='/blog/post/:slug' element={<Layout/>}>
                <Route index element={<Post/>} />
              </Route>
              /* Login */
              <Route path='/login' element={<Layout/>}>
                <Route index element={<Login/>} />
              </Route>
              /* Backoffice routes */
              <Route path='/backoffice' element={<Layout/>}>
                <Route index element={<Auth><Backoffice/></Auth>} />
              </Route>
              <Route path='/backoffice/home' element={<Layout/>}>
                <Route index element={<Auth><BackofficeHome/></Auth>} />
              </Route>
              <Route path='/backoffice/projects' element={<Layout/>}>
                <Route index element={<Auth><BackofficeProjects/></Auth>} />
              </Route>
              <Route path='/backoffice/certifications' element={<Layout/>}>
                <Route index element={<Auth><BackofficeCertifications/></Auth>} />
              </Route>
              <Route path='/backoffice/about' element={<Layout/>}>
                <Route index element={<Auth><BackofficeAbout/></Auth>} />
              </Route>
            </Routes>
        </ThemeProvider>
    </AnimatePresence>
  )
}
