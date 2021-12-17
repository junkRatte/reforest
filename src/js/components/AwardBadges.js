import React from "react";
import AwardBadgeOne from "../../images/award-badge-one.svg";
import AwardBadgeTwo from "../../images/award-badge-two.svg";
import AwardBadgeThree from "../../images/award-badge-three.svg";
import AwardBadgeFour from "../../images/award-badge-four.svg";

const AwardBadges = () => {
  return (
    <div className="aboutpage-awards-badges">
      <div className="badge">
        <img src={AwardBadgeOne} />
        <h5>2021</h5>
        <span>Best NGO Award</span>
        <p>Berlin, Germany</p>
      </div>
      <div className="badge">
        <img src={AwardBadgeTwo} />
        <h5>2018</h5>
        <span>Global Award</span>
        <p>New York, USA</p>
      </div>
      <div className="badge">
        <img src={AwardBadgeThree} />
        <h5>2014</h5>
        <span>Foresto Award</span>
        <p>New Delhi, India</p>
      </div>
      <div className="badge">
        <img src={AwardBadgeFour} />
        <h5>2010</h5>
        <span>Earth Saver Award</span>
        <p>Vienna, Austria</p>
      </div>
    </div>
  );
};

export default AwardBadges;
