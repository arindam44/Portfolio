import React from "react";
import "./about.css";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-container">
      <div className="about-left">
        <Image src='/instagramIcon.svg' alt="About" width={200} height={200} />
      </div>
      <div className="about-right">
        <div className="about-right-section-header">About Me</div>
        <div className="about-right-heading">
          A passionate FrontEnd Developer <br /> based in Kolkata, India 📍
        </div>
      </div>
    </section>
  );
};

export default About;
