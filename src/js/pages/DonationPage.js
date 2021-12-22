import React from "react";
import VolunteerSignUp from "../components/VolunteerSignUp";
import DonationPageHeader from "../sections/donationpage/DonationPageHeader";
import DonationPageTabs from "../sections/donationpage/DonationPageTabs";

const DonationPage = () => {
  return (
    <div className="donationpage">
      <DonationPageHeader />
      <DonationPageTabs />
      <VolunteerSignUp />
    </div>
  );
};

export default DonationPage;
