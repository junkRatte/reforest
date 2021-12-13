import React from "react";
import HomePageAboutUs from "../sections/homepage/HomePageAboutUs";
import HomePageHeader from "../sections/homepage/HomePageHeader";
import HomePageWork from "../sections/homepage/HomePageWork";
import HomePageProjects from "../sections/homepage/HomePageProjects";
import HomePageChart from "../sections/homepage/HomePageChart";
import VolunteerSignUp from "../components/VolunteerSignUp";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomePageHeader />
      <HomePageAboutUs />
      <HomePageWork />
      <HomePageProjects />
      <HomePageChart />
      <VolunteerSignUp />
    </div>
  );
};

export default Homepage;
