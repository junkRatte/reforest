import React from "react";
import AboutUsImage from "../../../images/aboutus-video-image.png";
import LogoOne from "../../../images/logo-one.png";
import LogoTwo from "../../../images/logo-two.png";
import LogoThree from "../../../images/logo-three.png";
import LogoFour from "../../../images/logo-four.png";
import LogoFive from "../../../images/logo-five.png";
import LogoSix from "../../../images/logo-six.png";

const AboutPageHeader = () => {
  return (
    <header className="aboutpage-header">
      <div className="aboutpage-header-title container">
        <span className="heading-line"></span>
        <div>
          <h5>Know about us</h5>
          <h1>We are a nonprofit team working worldwide</h1>
        </div>
        <p>
          <span>
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </span>
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Suspendisse varius enim elementum tristique.
        </p>
        <img src={AboutUsImage} />
      </div>
      <div className="green-bg">
        <div className="aboutpage-header-columns container">
          <div className="mission-column">
            <h5>Our mission</h5>
            <h3>We make the world we save our own environment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="vision-column">
            <h5>Our vision</h5>
            <h3>Plant more trees to make world air pollution free</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <div className="aboutpage-header-logos container">
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
      </div>
    </header>
  );
};

export default AboutPageHeader;
