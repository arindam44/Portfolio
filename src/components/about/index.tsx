import React from "react";
import "./about.css";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-container">
      <div className="about-left">
        <Image src='/about.png' alt="About" width={400} height={400} />
      </div>
      <div className="about-right">
        <div className="about-right-section-header">About Me</div>
        <div className="about-right-heading">
          A passionate FrontEnd Developer <br /> based in Kolkata, India 📍
        </div>
        <div className="about-right-desc">
          As a Front-End Developer my key skills include React.js, JavaScript, TypeScript, HTML, CSS & SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player, with proven experience of working efficiently in a remote team, who thrives in collaborating with cross-functional teams to produce outstanding web applications. <br/><br/>Welcome to my portfolio, where you&apos;ll find a showcase of my work, a testament to my commitment to crafting outstanding web experiences. Join me on this journey where code and creativity intertwine, and let&apos;s embark on exciting digital adventures together. Welcome to the digital playground where code meets creativity and where the future is built, one line at a time.
        </div>
        <div className="about-right-stack">
          <Image src='/htmlIcon.svg' alt="HTML" height={50} width={50} />
          <Image src='/cssIcon.svg' alt="CSS" height={50} width={50} />
          <Image src='/jsIcon.svg' alt="JavaScript" height={50} width={50} />
          <Image src='/tsIcon.svg' alt="TypeScript" height={50} width={50} />
          <Image src='/reactIcon.svg' alt="ReactJS" height={50} width={50} />
          <Image src='/nextjsIcon.svg' alt="NextJS" height={50} width={50} />
          <Image src='/reduxIcon.svg' alt="Redux" height={50} width={50} />
          <Image src='/tailwindcssIcon.svg' alt="Tailwind CSS" height={50} width={50} />
          <Image src='/materialuiIcon.svg' alt="Material UI" height={50} width={50} />
          <Image src='/sassIcon.svg' alt="SASS" height={50} width={50} />
          <Image src='/nodejsIcon.svg' alt="NodeJS" height={50} width={50} />
          <Image src='/mongodbIcon.svg' alt="MongoDB" height={50} width={50} />
        </div>
      </div>
    </section>
  );
};

export default About;
