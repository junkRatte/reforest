import React from "react";
import ProjectsImage from "../../../images/homepage-projects-image.png";
import ProjectsIconOne from "../../../images/projects-icon-one.png";
import ProjectsIconTwo from "../../../images/projects-icon-two.png";
import ProjectsIconThree from "../../../images/projects-icon-three.png";
import ProjectsIconFour from "../../../images/projects-icon-four.png";

const HomePageWork = () => {
  return (
    <section className="homepage-work">
      <div className="container">
        <div className="homepage-work-summary">
          <div className="summary-text">
            <span className="heading-line"></span>
            <div>
              <h4>What we do</h4>
              <h2>
                We care for the earth, care for
                <br />
                the coming birth
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <ul>
                <li>
                  <img src={ProjectsIconOne} />
                  <div>
                    <h3>Build Healthy Cities</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={ProjectsIconTwo} />
                  <div>
                    <h3>Tree Plantation</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={ProjectsIconThree} />
                  <div>
                    <h3>Protect Land and Water</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={ProjectsIconFour} />
                  <div>
                    <h3>Animal Safety</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="summary-image">
            <img src={ProjectsImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageWork;
