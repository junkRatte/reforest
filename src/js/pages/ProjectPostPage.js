import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../components/api-data/ProjectsData";

const ProjectPostPage = () => {
  let { title } = useParams();
  return (
    <div>
      {ProjectsData.filter((project) => project.title == title).map(
        (project) => (
          <>
            <h1>{project.title}</h1>
            <img src={project.image} />
          </>
        )
      )}
    </div>
  );
};

export default ProjectPostPage;
