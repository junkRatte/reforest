import React from "react";
import DonationImage from "../../../images/donation-image.png";

const DonationPageHeader = () => {
  return (
    <section className="donationpage-header">
      <div className="donationpage-header-wrapper container">
        <div className="donationpage-header-title">
          <span className="heading-line"></span>
          <div>
            <h5>Donate</h5>
            <h1>Making a donation for Nature.</h1>
            <p>
              When you donate, you’re supporting effective solutions to big
              environmental challenges—an investment in the future of our
              planet.
            </p>
            <button className="primary-btn submit">Donate now</button>
          </div>
        </div>
        <div className="donationpage-header-image">
          <img src={DonationImage} />
        </div>
      </div>
    </section>
  );
};

export default DonationPageHeader;
