import React from "react";
import HomePageAboutUs from "../sections/homepage/HomePageAboutUs";
import HomePageHeader from "../sections/homepage/HomePageHeader";
import HomePageProjects from "../sections/homepage/HomePageProjects";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomePageHeader />
      <HomePageAboutUs />
      <HomePageProjects />
    </div>
  );
};

export default Homepage;
