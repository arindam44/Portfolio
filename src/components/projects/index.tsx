import React from "react";
import "./projects.css";
import Image from "next/image";
import projects from "../../constants/projects.json";
import OpenExternal from '../../assets/icons/OpenExternal'

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="projects-container">
      <span className="projects-header">Projects</span>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <Image
              className="project-image"
              src={project.image}
              alt={project.name}
              height={250}
              width={450}
            />
            <div className="project-details">
              <span className="project-name">{project.name}</span>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                {project.code && (
                  <button className="outlined-btn">
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
                  <button className="fill-btn">
                    Demo
                    <OpenExternal />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
