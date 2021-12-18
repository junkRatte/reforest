import React from "react";
import VolunteerSignUp from "../components/VolunteerSignUp";
import NewsCardsHeading from "../components/NewsCardsHeading";
import NewsCards from "../components/NewsCards";
import Events from "../components/Events";
import AboutPageAwards from "../sections/aboutpage/AboutPageAwards";
import AboutPageHeader from "../sections/aboutpage/AboutPageHeader";
import AboutPageTeam from "../sections/aboutpage/AboutPageTeam";

const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <AboutPageHeader />
      <AboutPageAwards />
      <AboutPageTeam />
      <VolunteerSignUp />
      <NewsCardsHeading />
      <NewsCards />
      <Events />
    </div>
  );
};

export default Aboutpage;
