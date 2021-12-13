import React from "react";
import HomePageAboutUs from "../sections/homepage/HomePageAboutUs";
import HomePageHeader from "../sections/homepage/HomePageHeader";
import HomePageWork from "../sections/homepage/HomePageWork";
import HomePageProjects from "../sections/homepage/HomePageProjects";
import HomePageChart from "../sections/homepage/HomePageChart";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomePageHeader />
      <HomePageAboutUs />
      <HomePageWork />
      <HomePageProjects />
      <HomePageChart />
    </div>
  );
};

export default Homepage;
