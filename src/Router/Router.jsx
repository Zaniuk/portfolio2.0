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
export default function ExtRouter() {
    const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
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
          </Routes>
    </AnimatePresence>
  )
}
