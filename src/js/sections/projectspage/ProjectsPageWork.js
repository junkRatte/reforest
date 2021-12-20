import React from "react";
import AnimalIcon from "../../../images/animal-icon.svg";
import BiodiversityIcon from "../../../images/biodiversity-icon.svg";
import CitiesIcon from "../../../images/cities-icon.svg";
import SustainabilityIcon from "../../../images/sustainability-icon.svg";
import TreeIcon from "../../../images/tree-icon.svg";
import WaterIcon from "../../../images/water-icon.svg";

const ProjectsPageWork = () => {
  return (
    <section className="projectspage-work">
      <div className="container">
        <h2>What we do for the environment</h2>
        <ul>
          <li>
            <img src={AnimalIcon} />
            <div>
              <h5>Build healthy cities</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </li>
          <li>
            <img src={WaterIcon} />
            <div>
              <h5>Protect land and water</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </li>
          <li>
            <img src={TreeIcon} />
            <div>
              <h5>Tree plantation</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </li>
          <li>
            <img src={SustainabilityIcon} />
            <div>
              <h5>Water sustainability</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </li>
          <li>
            <img src={AnimalIcon} />
            <div>
              <h5>Animal safety</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </li>
          <li>
            <img src={BiodiversityIcon} />
            <div>
              <h5>Biodiversity</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectsPageWork;
