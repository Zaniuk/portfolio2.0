import React, { useEffect, useState } from "react";
import "./index.scss";
import { motion } from "framer-motion";
import PostCard from "./PostCard";
import UnderDevelopment from "./UnderDevelopment";
export default function Blog() {
  // const [postList , setPostList] = useState([])
  // useEffect(() => {
  //   fetch('https://zaniukblog.azurewebsites.net/posts')
  //     .then(res => res.json())
  //     .then(res => setPostList(res))
  // }, [])
  // return (
  //   <div className="post-list">
  //    {postList.map((post, index) => {
  //       return (
  //         <PostCard key={`post-${index}`} title={post.title} img={post.img} desc={post.desc} date={post.date} slug={post.slug} />
  //       )
  //    })}
  //   </div>
  // );
  return (
    <UnderDevelopment/>
  )
}
