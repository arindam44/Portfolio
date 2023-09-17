import React from "react";
import "./navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="nav-container">
      <div className="nav-left">Arindam.dev</div>
      <div className="nav-right">
        <div className="nav-right-item">Home</div>
        <div className="nav-right-item">About</div>
        <div className="nav-right-item">Education</div>
        <div className="nav-right-item">Skills</div>
        <div className="nav-right-item">Contacts</div>
      </div>
    </div>
  );
};

export default Navbar;
