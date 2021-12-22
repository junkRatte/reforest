import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../components/api-data/ProjectsData";
import ProjectCard from "../components/ProjectCard";
import VolunteerSignUp from "../components/VolunteerSignUp";

const ProjectPostPage = () => {
  let { title } = useParams();
  return (
    <>
      {ProjectsData.filter((project) => project.title == title).map(
        (project) => (
          <>
            <div className="project-post post-container">
              <span className="heading-line"></span>
              <>
                <div className="project">
                  <h5>Our project</h5>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <img src={project.image} />
                  <h2>{project.info_heading}</h2>
                  <p>{project.info}</p>
                  <ul>
                    {project.info_steps.map((step) => (
                      <li>{step}</li>
                    ))}
                  </ul>
                  <p>{project.info_end}</p>
                </div>
              </>
            </div>
            <div className="project-data">
              <div className="data-list data-container">
                <div className="data">
                  <img src={project.plantation_icon} />
                  <div>
                    <h5>{project.plants_planted}+ Plantations in 1 week</h5>
                    <p>{project.plants_planted_summary}</p>
                  </div>
                </div>
                <div className="data">
                  <img src={project.donated_icon} />
                  <div>
                    <h5>{project.people_donated} People have donated</h5>
                    <p>{project.people_donated_summary}</p>
                  </div>
                </div>
                <div className="data">
                  <img src={project.joined_icon} />
                  <div>
                    <h5>{project.people_joined}+ People joined</h5>
                    <p>{project.people_joined_summary}</p>
                  </div>
                </div>
                <div className="data">
                  <img src={project.raised_icon} />
                  <div>
                    <h5>${project.money_raised} Raised for this initiative</h5>
                    <p>{project.money_raised_summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
      <ProjectCard />
      <VolunteerSignUp />
    </>
  );
};

export default ProjectPostPage;
