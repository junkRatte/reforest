import React from "react";
import ProjectCard from "../../components/ProjectCard";

const ProjectsPageProjects = () => {
  return (
    <section className="projectspage-projects">
      <div className="projectspage-projects-title">
        <h5>Projects we have done</h5>
        <h2>
          We are creating a sustainable
          <br />
          society, for everyone.
        </h2>
      </div>
      <ProjectCard />
    </section>
  );
};

export default ProjectsPageProjects;
