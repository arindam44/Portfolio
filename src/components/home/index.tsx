import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./home.css";
import Image from "next/image";
import { handleScrollToElement } from "@/utils";
import { motion } from "framer-motion";
import socialMedias from "@/constants/socialMedias.json";

type Props = {};

const Home = (props: Props) => {
  return (
    <motion.section
      className="home-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="home-left"
        initial={{ x: "-200px" }}
        whileInView={{ x: "0px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
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
                "https://drive.google.com/uc?export=download&id=1w_Z6icHmesO2klEMrD0GyJcgYXKp2ylM",
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
          {socialMedias.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                src={item.svgUrl}
                alt={item.title}
                className="home-left-social-media-btn"
                width={50}
                height={50}
              />
            </a>
          ))}
        </div>
      </motion.div>
      <video className="home-right-img" src="/logo.mp4" muted autoPlay loop />
    </motion.section>
  );
};

export default Home;
