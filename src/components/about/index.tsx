import React from "react";
import "./about.css";
import Image from "next/image";
import skills from "../../constants/skills.json";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-container">
      <div className="about-right-section-header mobile">About Me</div>
      <div className="about-left">
        <Image src="/about.png" alt="About" width={400} height={400} />
      </div>
      <div className="about-right">
        <div className="about-right-section-header">About Me</div>
        <div className="about-right-heading">
          A passionate FrontEnd Developer <br /> based in Kolkata, India 📍
        </div>
        <div className="about-right-desc">
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
        </div>
        <div className="about-right-stack">
          {skills.map((skill) => (
            <Image
              key={skill.name}
              src={skill.src}
              alt={skill.name}
              height={50}
              width={50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
