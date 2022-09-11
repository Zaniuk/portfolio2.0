import React from 'react'
import { Viewer } from '@bytemd/react'
export default function TableOfContents({ lines }) {
    let str = ''
    lines.map((line, index) => {
        str += `- [${line.title}](#user-content-${line.slug})\n`
    })
    console.log(str)
    return (
        <div>
            <Viewer value={str} />
        </div>
    )
}
