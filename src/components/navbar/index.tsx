"use client";
import React from "react";
import "./navbar.css";
import { handleScrollToElement } from "@/utils";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="nav-container">
      <div className="nav-left">Arindam.dev</div>
      <div className="nav-right">
        <div className="nav-right-item" onClick={() => handleScrollToElement('home-container')}>Home</div>
        <div className="nav-right-item" onClick={() => handleScrollToElement('about-container')}>About</div>
        <div className="nav-right-item" onClick={() => handleScrollToElement('projects-container')}>Projects</div>
        <div className="nav-right-item" onClick={() => handleScrollToElement('contacts-container')}>Contacts</div>
      </div>
    </div>
  );
};

export default Navbar;
