import React from "react";
import Events from "../components/Events";
import NewsCards from "../components/NewsCards";
import NewsCardsHeading from "../components/NewsCardsHeading";
import VolunteerSignUp from "../components/VolunteerSignUp";
import ProjectsPageHeader from "../sections/projectspage/ProjectsPageHeader";
import ProjectsPageProjects from "../sections/projectspage/ProjectsPageProjects";
import ProjectsPageWork from "../sections/projectspage/ProjectsPageWork";

const ProjectsPage = () => {
  return (
    <div className="projectspage">
      <ProjectsPageHeader />
      <ProjectsPageWork />
      <ProjectsPageProjects />
      <VolunteerSignUp />
      <NewsCardsHeading />
      <NewsCards />
      <Events />
    </div>
  );
};

export default ProjectsPage;
