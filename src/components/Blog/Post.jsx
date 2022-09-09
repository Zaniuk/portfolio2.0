import React, { useEffect , useState} from 'react'
import { Viewer } from '@bytemd/react'
import { b64_to_utf8, generateTableOfContents } from '../../services/MarkdownService'
import { useParams } from 'react-router-dom'
import './Post.scss'
import '../../../node_modules/github-markdown-css/github-markdown.css'

import TableOfContents from './TableOfContents'
export default function Post() {
    const [post, setPost] = useState({})
    const [body, setBody] = useState('')
    const [lines, setLines] = useState([])
    const {slug} = useParams()
    useEffect(() => {
        fetch(`https://zaniukblog.azurewebsites.net/posts/${slug}`)
        .then(res => res.json())
        .then(res => {
            setPost(res[0])
            setBody(generateTableOfContents(b64_to_utf8(res[0].body)))
            setLines(generateTableOfContents(b64_to_utf8(res[0].body)).lines)
        })
        
    },[])
  return (
    <section className="post">
        <img src={post.img} alt={post.title} />
        <TableOfContents lines={lines} />
        <Viewer value={body.post}  />
    </section>
  )
}
