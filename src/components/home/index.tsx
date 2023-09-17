"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./home.css";
import Image from "next/image";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="home-container">
      <div className="home-left">
        <div className="home-left-heading">Hi, I&apos;m Arindam Roy</div>
        <TypeAnimation
          sequence={[
            "Front-End React Developer",
            1000,
            "ML Enthusiast",
            1000,
			"Tech Geek",
            1000,
			"MotorHead",
			1000
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
        <div className="home-left-desc">
		A passionate enthusiast at the intersection of technology, design and innovation. With a strong foundation in frontend development and a burning curiosity for machine learning, I&apos;m your go-to creative mind for crafting captivating web experiences and exploring the cutting-edge world of artificial intelligence. 
		{/* Welcome to the digital playground where code meets creativity and where the future is built, one line at a time. */}
        </div>
        <div className="home-left-btns">
          <button className="hire-btn">Hire Me</button>
          <button className="chat-btn">Let&apos;s talk</button>
        </div>
		<div className="home-left-btns" style={{paddingLeft: '10px', columnGap: '50px'}}>
          <a href="https://linkedin.com/in/arindam19/" target="_blank" rel="noopener noreferer"><Image src="/linkedinIcon.svg" alt="linkedin" className="home-left-social-media-btn" width={50} height={50}  /></a>
		  <a href="https://github.com/arindam44" target="_blank" rel="noopener noreferer"><Image src="/githubIcon.png" alt="github" className="home-left-social-media-btn" width={50} height={50} /></a>
		  <a href="https://facebook.com/arindam.roy.44/" target="_blank" rel="noopener noreferer"><Image src="/metaIcon.svg" alt="meta" className="home-left-social-media-btn" width={50} height={50} /></a>
		  <a href="https://instagram.com/arindam_.roy" target="_blank" rel="noopener noreferer"><Image src="/instagramIcon.svg" alt="instagram" className="home-left-social-media-btn" width={50} height={50} /></a>
		  <a href="https://twitter.com/arindam_roy_19" target="_blank" rel="noopener noreferer"><Image src="/xIcon.svg" alt="twitter" className="home-left-social-media-btn" width={50} height={50} /></a>
        </div>
      </div>
      <video className="home-right-img" src="/logo.mp4" muted autoPlay loop />
    </section>
  );
};

export default Home;
