import React from "react";
import "./experiences.css";
import experiences from "../../constants/experiences.json";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type Props = {};

const cardVariants: Variants = {
  offscreen: {
    x: -300,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      // bounce: 0.1,
      duration: 1,
      ease: "easeInOut"
    },
  },
};

const Experiences = (props: Props) => {
  return (
    <section className="experiences-container">
      <span className="experiences-header">Work Experiences</span>
      {experiences.map((exp) => (
        <motion.article
          className="experience-card"
          key={exp.id}
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true }}
        >
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
                <span className="experience-duration-item">{exp.start}</span> -{" "}
                <span className="experience-duration-item">{exp.end}</span>
              </div>
              <div className="experience-location">{exp.location}</div>
            </div>
          </div>
          <ul className="experience-description-list">
            {exp.description.map((descItem, index) => (
              <li
                className="experience-description-item"
                key={`experience-desc-${exp.id}-${index}`}
              >
                {descItem}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </section>
  );
};

export default Experiences;
