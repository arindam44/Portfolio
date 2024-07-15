import React from "react";
import "./about.css";
import Image from "next/image";
import skills from "../../constants/skills.json";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.section
      className="about-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="about-right-section-header mobile">About Me</div>
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: "-200px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Image src="/about.png" alt="About" width={400} height={400} />
      </motion.div>
      <div className="about-right">
        <div className="about-right-section-header">About Me</div>
        <motion.div
          className="about-right-heading"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          A passionate FrontEnd Developer <br className="about-right-heading-break" /> based in Kolkata, India 📍
        </motion.div>
        <motion.div
          className="about-right-desc"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          As a Front-End Developer my key skills include React.js, JavaScript,
          TypeScript, HTML, CSS & SCSS. I excel in designing and maintaining
          responsive websites that offer a smooth user experience. My expertise
          lies in crafting dynamic, engaging interfaces through writing clean
          and optimized code and utilizing cutting-edge development tools and
          techniques. I am also a team player, with proven experience of working
          efficiently in a remote team, who thrives in collaborating with
          cross-functional teams to produce outstanding web applications. <br />
          <br />
          Welcome to my portfolio, where you&apos;ll find a showcase of my work,
          a testament to my commitment to crafting outstanding web experiences.
          Join me on this journey where code and creativity intertwine, and
          let&apos;s embark on exciting digital adventures together. Welcome to
          the digital playground where code meets creativity and where the
          future is built, one line at a time.
        </motion.div>
        <motion.div
          className="about-right-stack"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <Image
              key={skill.name}
              src={skill.src}
              alt={skill.name}
              height={50}
              width={50}
            />
          ))}
        </motion.div>
        <motion.button
          className="fill-btn about-resume-btn"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          onClick={() => {
            window.open(
              "https://drive.google.com/uc?export=download&id=1w_Z6icHmesO2klEMrD0GyJcgYXKp2ylM",
              "_blank"
            );
          }}
        >
          Download Resume
        </motion.button>
      </div>
    </motion.section>
  );
};

export default About;
