import React from 'react'
import { Link } from 'react-router-dom'
import './PostCard.scss'
export default function PostCard({title, desc, date, img, slug}) {
  return (
    <div className='post-card'>
        <img src={img} alt={title} />
      <div className="post-card-content">
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{date}</p>
        <div className="post-button-wrapper"><Link to={`post/${slug}`}>Read More</Link></div>
      </div>
    </div>
  )
}
