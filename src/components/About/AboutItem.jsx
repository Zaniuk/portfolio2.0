
import { Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import React from 'react'
import AboutItemMobile from './AboutItemMobile';
import AboutItemDesktop from './AboutItemDesktop';

export default function AboutItem({title, description, i, screenSize}) {
  return screenSize === 'sm' ? <AboutItemMobile title={title} description={description}/> : <AboutItemDesktop title={title}  description={description} i={i}  />
}
