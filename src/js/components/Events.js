import React from "react";
import { Link } from "react-router-dom";
import { EventData } from "./api-data/EventsData";

const Events = () => {
  return (
    <div className="container">
      <section className="events-section">
        <div className="events-cards-heading">
          <h3>Our Events</h3>
          <span className="cards-heading-line"></span>
        </div>
        <div className="events">
          {EventData.map((event) => (
            <Link to={`/event/${event.title}`}>
              <article className="event">
                <div className="wrapper-date">
                  <h2>{event.day_date}</h2>
                  <h5>{event.month_date}</h5>
                </div>
                <div className="wrapper-text">
                  <h5>
                    Next event <span className="heading-line"></span>
                  </h5>
                  <h2>{event.title}</h2>
                </div>
                <i class="fas fa-arrow-circle-right"></i>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
