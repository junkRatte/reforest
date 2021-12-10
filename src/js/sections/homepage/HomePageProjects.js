import React from "react";
import ProjectCard from "../../components/ProjectCard";

const HomePageProjects = () => {
  return (
    <section className="homepage-projects container">
      <div className="homepage-projects-title">
        <span className="heading-line"></span>
        <div>
          <h4>Projects we have done</h4>
          <h2>
            We are Creating sustainable
            <br />
            society, for everyone and
            <br />
            forever.
          </h2>
        </div>
      </div>
      <ProjectCard />
    </section>
  );
};

export default HomePageProjects;
