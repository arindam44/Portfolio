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
      <div
        className="nav-right-item"
        onClick={() => handleMenuItemClick("home-container")}
      >
        Home
      </div>
      <div
        className="nav-right-item"
        onClick={() => handleMenuItemClick("about-container")}
      >
        About
      </div>
      <div
        className="nav-right-item"
        onClick={() => handleMenuItemClick("projects-container")}
      >
        Projects
      </div>
      <div
        className="nav-right-item"
        onClick={() => handleMenuItemClick("contacts-container")}
      >
        Contacts
      </div>
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
        {menuOpen && <div className="nav-right-list">{navMenuItems}</div>}
      </div>
    </div>
  );
};

export default Navbar;
