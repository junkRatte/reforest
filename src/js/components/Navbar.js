import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import disableScroll from "disable-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);

    disableScroll[isScrollDisabled ? "off" : "on"]();
    setIsScrollDisabled(!isScrollDisabled);
  };

  const closeMenuNavLink = () => {
    setOpenMenu(false);
    disableScroll[isScrollDisabled ? "off" : "on"]();
  };

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
            <p>ReForest</p>
            <i class="fas fa-tree"></i>
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
                to="/"
                onClick={closeMenuNavLink}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/about-us"
                onClick={closeMenuNavLink}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>About us</li>
              </NavLink>
              <NavLink
                to="/projects"
                onClick={closeMenuNavLink}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>What We Do</li>
              </NavLink>
              <NavLink
                to="/news"
                onClick={closeMenuNavLink}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>Media</li>
              </NavLink>
              <NavLink
                to="/contact-us"
                onClick={closeMenuNavLink}
                className={({ isActive }) =>
                  isActive ? "navbar-active-page" : null
                }
              >
                <li>Contact</li>
              </NavLink>
              <NavLink to="/donations" onClick={closeMenuNavLink}>
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
