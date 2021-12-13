import React from "react";
import ChartImage from "../../../images/chart-image.png";

const HomePageChart = () => {
  return (
    <section className="homepage-chart">
      <div className="container wrapper">
        <div className="homepage-chart-text">
          <h2>How we spend your donations and where it goes</h2>
          <p>
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <ul>
            <li>40% planting trees</li>
            <li>35% cleanliness program</li>
            <li>10% helping people</li>
            <li>10% animal safety</li>
            <li>5% feeding the poor</li>
          </ul>
        </div>
        <div className="homepage-chart-image">
          <img src={ChartImage} />
        </div>
      </div>
    </section>
  );
};

export default HomePageChart;
