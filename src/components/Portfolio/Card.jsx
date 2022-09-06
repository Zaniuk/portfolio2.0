import React, {useRef} from "react";
import "./Card.scss";
import { motion, useInView } from "framer-motion";
export default function Card({ title, description, image, tag }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="card"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="card-header">
        <img src={image} alt="rover" />
      </div>
      <div className="card-body">
        <span className="tag tag-teal">{tag}</span>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#">
          <button>Github</button>
        </a>
      </div>
    </div>
  );
}
