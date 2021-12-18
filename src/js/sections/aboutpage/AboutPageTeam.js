import React from "react";
import { TeamMembersData } from "../../components/api-data/TeamMembersData";

const AboutPageTeam = () => {
  return (
    <section className="aboutpage-team container">
      <h2>Meet our team</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        <br />
        varius enim in eros elementum tristique.
      </p>
      <div className="team-gallery">
        {TeamMembersData.map((member) => (
          <div className="team-member-info">
            <img src={member.image} />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
            <div className="social-links">
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPageTeam;
