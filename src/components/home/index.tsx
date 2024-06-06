import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./home.css";
import Image from "next/image";
import { handleScrollToElement } from "@/utils";
import { motion } from "framer-motion";

type Props = {};

const Home = (props: Props) => {
  return (
    <motion.section
      className="home-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
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
            1000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
        <div className="home-left-desc">
          A passionate enthusiast at the intersection of technology, design and
          innovation. With a strong foundation in frontend development and a
          burning curiosity for machine learning, I&apos;m your go-to creative
          mind for crafting captivating web experiences and exploring the
          cutting-edge world of artificial intelligence.
        </div>
        <div className="home-left-btns">
          <button
            className="fill-btn"
            onClick={() => {
              window.open(
                "https://drive.google.com/uc?export=download&id=1Bg3boGGGuZ5BNFk2dLqMPqxh02eivhpo",
                "_blank"
              );
            }}
          >
            Hire Me
          </button>
          <button
            className="outlined-btn"
            onClick={() => handleScrollToElement("contacts-container")}
          >
            Let&apos;s talk
          </button>
        </div>
        <div className="home-left-btns social-media">
          <a
            href="https://linkedin.com/in/arindam19/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/linkedinIcon.svg"
              alt="linkedin"
              className="home-left-social-media-btn"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://github.com/arindam44"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/githubIcon.png"
              alt="github"
              className="home-left-social-media-btn"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://facebook.com/arindam.roy.44/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/metaIcon.svg"
              alt="meta"
              className="home-left-social-media-btn"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://instagram.com/arindam_.roy"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/instagramIcon.svg"
              alt="instagram"
              className="home-left-social-media-btn"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://twitter.com/arindam_roy_19"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/xIcon.svg"
              alt="twitter"
              className="home-left-social-media-btn"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
      <video className="home-right-img" src="/logo.mp4" muted autoPlay loop />
    </motion.section>
  );
};

export default Home;
