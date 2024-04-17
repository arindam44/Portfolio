import React from "react";
import "./experiences.css";
import experiences from "../../constants/experiences.json";
import Image from "next/image";

type Props = {};

const Experiences = (props: Props) => {
  return (
    <section className="experiences-container">
      <span className="experiences-header">Work Experiences</span>
      <div className="experiences-list">
        {experiences.map((exp) => (
          <article className="experience-card" key={exp.id}>
            <div className="experience-card-header">
              <Image
                className="experience-logo"
                src={exp.logoSrc}
                alt={exp.company}
                height={75}
                width={75}
              />
              <div className="experience-card-header-right">
              <div className="experience-role">{exp.position}</div>
                <div className="experience-company">{exp.company}</div>
                <div className="experiemce-duration">
                  <span className="experience-duration-item">{exp.start}</span>{" "}
                  -{" "}<span className="experience-duration-item">{exp.end}</span>
                </div>
                <div className="experience-location">{exp.location}</div>
              </div>
            </div>
            <ul>
            {exp.description.map((descItem, index) => (
              <li className="experience-description" key={`experience-desc-${exp.id}-${index}`}>{descItem}</li>
            ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
