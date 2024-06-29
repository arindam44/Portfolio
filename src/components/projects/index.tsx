import React from "react";
import "./projects.css";
import Image from "next/image";
import projects from "../../constants/projects.json";
import OpenExternal from "../../assets/icons/OpenExternal";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.section
      className="projects-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <span className="projects-header">Projects</span>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={project.id}>
            <span className="project-name mobile">{project.name}</span>
            <motion.div
              initial={{ x: index % 2 === 0 ? "300px" : "-300px", opacity: 0 }}
              whileInView={{ x: "0px", opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Image
                className="project-image"
                src={project.image}
                alt={project.name}
                height={250}
                width={450}
              />
            </motion.div>
            <motion.div
              className="project-details"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <span className="project-name">{project.name}</span>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                {project.code && (
                  <button
                    className="outlined-btn"
                    onClick={() => window.open(project.code, "_blank")}
                  >
                    Code
                    <Image
                      src="/githubIcon.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </button>
                )}
                {project.demo && (
                  <button
                    className="fill-btn"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    Demo
                    <OpenExternal />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
