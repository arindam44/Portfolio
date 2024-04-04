import React from "react";
import "./experiences.css";
import experiences from "../../constants/experiences.json";
import Image from "next/image";

type Props = {};

const Experiences = (props: Props) => {
  return (
    <section className="experience-container">
      <span className="experience-header">Work Experiences</span>
      <div className="experience-list">
        {experiences.map((exp) => (
          <article className="experience-card" key={exp.id}>
            <div className="experience-card-header">
              <Image
                className="experience-logo"
                src={exp.logoSrc}
                alt={exp.company}
                height={100}
                width={100}
              />
              <div className="experience-card-header-right">
                <div className="experience-company">{exp.company}</div>
                <div className="experience-role">{exp.position}</div>
                <div className="experiemce-duration">
                  <span className="experience-duration-item">{exp.start}</span>{" "}
                  -<span className="experience-duration-item">{exp.end}</span>
                </div>
                <div className="experience-location">{exp.location}</div>
              </div>
            </div>
            <div className="experience-description">{exp.description}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
