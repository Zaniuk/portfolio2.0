import React from 'react'

export default function Tags({ tags }) {
  return (
    <div>
        {tags.map((tag, index) => {
            return <span className="tag tag-teal" key={`tag-${index}`}>{tag}</span>
        })}
    </div>
  )
}
