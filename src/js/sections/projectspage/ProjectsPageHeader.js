import React from "react";
import ProjectsHeaderImage from "../../../images/projects-header-image.png";

const ProjectsPageHeader = () => {
  return (
    <header className="projectspage-header">
      <div className="container">
        <div className="projectspage-header-title">
          <span className="heading-line"></span>
          <div className="title-image-wrapper">
            <div>
              <h5>What we do</h5>
              <h1>We are working worldwide</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <img src={ProjectsHeaderImage} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectsPageHeader;
