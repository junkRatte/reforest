import React from "react";
import { Link } from "react-router-dom";
import ReforestFooterLogo from "../../images/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper container">
        <img src={ReforestFooterLogo} />
        <div className="footer-links">
          <div>
            <p>Our team</p>
            <ul>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>More</p>
            <ul>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/donations">Donate</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>Connect</p>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Subscribe to get latest updates</h3>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="email-input"
            />
            <input type="submit" className="secondary-btn" value="Subscribe" />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
