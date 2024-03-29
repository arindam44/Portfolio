"use client";
import React, { useCallback, useState } from "react";
import "./navbar.css";
import { handleScrollToElement } from "@/utils";
import { useMediaQuery } from "@/customHooks/useMediaQuery";
import Hamburger from "@/assets/icons/Hamburger";
import Cross from "@/assets/icons/Cross";

type Props = {};

const Navbar = (props: Props) => {
  const match512 = useMediaQuery(512);
  const [menuOpen, setmenuOpen] = useState(false);

  const handleMenuItemClick = useCallback(
    (targetClass: string) => {
      handleScrollToElement(targetClass);
      if (menuOpen)
        setmenuOpen(false);
    },
    [menuOpen],
  )
  

  const navMenuItems = (
    <>
      <button
        className="nav-right-item"
        onClick={() => handleMenuItemClick("home-container")}
      >
        Home
      </button>
      <button
        className="nav-right-item"
        onClick={() => handleMenuItemClick("about-container")}
      >
        About
      </button>
      <button
        className="nav-right-item"
        onClick={() => handleMenuItemClick("projects-container")}
      >
        Projects
      </button>
      <button
        className="nav-right-item"
        onClick={() => handleMenuItemClick("contacts-container")}
      >
        Contacts
      </button>
    </>
  );

  return (
    <div className="nav-container">
      <div className="nav-left">Arindam.dev</div>
      <div className="nav-right desktop">{navMenuItems}</div>

      <div className="nav-right mobile">
        {!menuOpen ? (
          <Hamburger
            className="nav-right-icon"
            onClick={() => setmenuOpen(true)}
          />
        ) : (
          <Cross
            className="nav-right-icon close"
            style={{height: '35px'}}
            onClick={() => setmenuOpen(false)}
          />
        )}
        <div className="nav-right-list" style={{height: menuOpen ? '173px' : '0px'}}>{menuOpen && navMenuItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
