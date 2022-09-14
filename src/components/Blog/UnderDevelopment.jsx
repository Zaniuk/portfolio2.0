import React from 'react'
import { Link } from 'react-router-dom'
export default function UnderDevelopment() {
  return (
    <div className='under-dev'>
        <h1>Sorry, this is currently under development</h1>
        <Link to='/'> Go back home</Link>
    </div>
  )
}
