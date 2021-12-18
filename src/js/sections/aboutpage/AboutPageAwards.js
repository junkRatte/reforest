import React from "react";
import AwardBadges from "../../components/AwardBadges";
import TeamImage from "../../../images/team-image.png";

const AboutPageAwards = () => {
  return (
    <div className="aboutpage-awards container">
      <h2>Awards & Recognitions</h2>
      <AwardBadges />
      <div className="aboutpage-awards-team">
        <div className="team-description">
          <h5>Our journey</h5>
          <h2>How we raised 34M</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh.
          </p>
          <div className="team-description-stats">
            <div>
              <span>34M+</span>
              <p>Donations Received</p>
            </div>
            <div>
              <span>400+</span>
              <p>Volunteers</p>
            </div>
            <div>
              <span>40K+</span>
              <p>Trees planted</p>
            </div>
          </div>
        </div>
        <div className="team-image">
          <img src={TeamImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutPageAwards;
