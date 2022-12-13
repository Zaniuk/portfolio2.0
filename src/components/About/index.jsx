import React from "react";
import { motion } from "framer-motion";
import "./index.scss";
import UserPicture from "./UserPicture";
import NewAbout from "./NewAbout";
export default function index() {
  return (
    <section className="about">
      <UserPicture />
      <NewAbout/>
    </section>
  );
}
