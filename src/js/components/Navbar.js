import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReforestLogo from "../../images/reforest-logo.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={ReforestLogo} alt="Company logo" />
          </div>
          <div className="navbar-menu">
            <div
              className={`navbar-menu-icon ${
                openMenu ? "navbar-menu-icon-open" : null
              }`}
              onClick={toggleMenu}
            >
              <span className="navbar-menu-icon-one"></span>
              <span className="navbar-menu-icon-two"></span>
              <span className="navbar-menu-icon-three"></span>
            </div>
            <ul
              className={`navbar-menu-list ${
                openMenu ? "open-menu" : "close-menu"
              }`}
            >
              <NavLink
                to="/reforest"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/about-us"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>About us</li>
              </NavLink>
              <NavLink
                to="/projects"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>What We Do</li>
              </NavLink>
              <NavLink
                to="/news"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>Media</li>
              </NavLink>
              <NavLink
                to="/contact-us"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>Contact</li>
              </NavLink>
              <NavLink to="/donations" onClick={toggleMenu}>
                <li className="navbar-btn">Donate</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
