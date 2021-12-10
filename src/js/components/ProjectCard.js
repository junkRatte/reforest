import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectsData } from "./api-data/ProjectsData";

const ProjectCard = () => {
  return (
    <section className="homepage-projects-cards">
      {ProjectsData.map((project) => (
        <div
          className="project-card"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="project-card-content">
            <h3>{project.title}</h3>
            <p>{project.card_summary}</p>
            <Link className="secondary-btn" to={`/projects/${project.title}`}>
              See more
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectCard;
