import React from "react";
import AboutPageAwards from "../sections/aboutpage/AboutPageAwards";
import AboutPageHeader from "../sections/aboutpage/AboutPageHeader";

const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <AboutPageHeader />
      <AboutPageAwards />
    </div>
  );
};

export default Aboutpage;
