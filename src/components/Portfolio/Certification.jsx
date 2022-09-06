import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Certification.scss";
export default function Certification({
  title,
  company,
  status,
  description,
  image,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    
      <article
       ref={ref}
        className="cert"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="cert-header">
          <img src={image} alt={`${company}-logo`} />
          <div className="cert-text">
            <h2>{company}</h2>
            <div className="tag-wrapper">
              <span className="tag tag-teal">{status}</span>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </article>
    
  );
}
