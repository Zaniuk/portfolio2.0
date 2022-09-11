import React from 'react'
import { colorTag } from '../../services/tagColorService'

export default function Tags({ tags }) {
  return (
    <div>
        {tags.map((tag, index) => {
            return <span className={`tag ${colorTag(tag)}`} key={`tag-${index}`}>{tag}</span>
        })}
    </div>
  )
}
