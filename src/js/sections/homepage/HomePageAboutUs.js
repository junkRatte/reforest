import React from "react";
import { Link } from "react-router-dom";
import AboutUsImage from "../../../images/aboutus-image.png";
import LogoOne from "../../../images/logo-one.png";
import LogoTwo from "../../../images/logo-two.png";
import LogoThree from "../../../images/logo-three.png";
import LogoFour from "../../../images/logo-four.png";
import LogoFive from "../../../images/logo-five.png";
import LogoSix from "../../../images/logo-six.png";

const HomePageAboutUs = () => {
  return (
    <section className="homepage-aboutus container">
      <div className="homepage-aboutus-summary">
        <div className="summary-text">
          <span className="heading-line"></span>
          <div>
            <h4>Know about us</h4>
            <h2>
              We help nature smile and
              <br />
              survive everywhere
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
              <br />
              <br />
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
            <Link to="/about-us" className="primary-btn">
              Learn more
            </Link>
          </div>
        </div>
        <div className="summary-image">
          <img src={AboutUsImage} />
        </div>
      </div>
      <div className="homepage-aboutus-logos">
        <h4>Our supporters</h4>
        <div className="logos">
          <img src={LogoOne} />
          <img src={LogoTwo} />
          <img src={LogoThree} />
          <img src={LogoFour} />
          <img src={LogoFive} />
          <img src={LogoSix} />
        </div>
      </div>
    </section>
  );
};

export default HomePageAboutUs;
