import React, { useCallback, useState } from "react";
import "./navbar.css";
import { handleScrollToElement } from "@/utils";
import Hamburger from "@/assets/icons/Hamburger";
import Cross from "@/assets/icons/Cross";
import navItems from "@/constants/navItems.json";

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = useCallback(
    (targetClass: string) => {
      handleScrollToElement(targetClass);
      if (menuOpen) setMenuOpen(false);
    },
    [menuOpen]
  );

  const navMenuItems = navItems.map((navItem) => (
    <button
      key={navItem.id}
      className="nav-right-item"
      onClick={() => handleMenuItemClick(navItem.value)}
    >
      {navItem.title}
    </button>
  ));

  return (
    <div className="nav-container">
      <div className="nav-left">Arindam.dev</div>
      <div className="nav-right desktop">{navMenuItems}</div>

      <div className="nav-right mobile">
        {!menuOpen ? (
          <Hamburger
            className="nav-right-icon"
            onClick={() => setMenuOpen(true)}
          />
        ) : (
          <Cross
            className="nav-right-icon close"
            style={{ height: "35px" }}
            onClick={() => setMenuOpen(false)}
          />
        )}
        <div
          className="nav-right-list"
          style={{ height: menuOpen ? "211px" : "0px" }}
        >
          {menuOpen && navMenuItems}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
