import React from "react";
import { Link, useParams } from "react-router-dom";
import { EventData } from "../components/api-data/EventsData";
import AddressIcon from "../../images/address-icon.svg";
import DateIcon from "../../images/date-icon.svg";
import Events from "../components/Events";

const EventPostPage = () => {
  let { title } = useParams();

  return (
    <div className="event-post">
      {EventData.filter((event) => event.title == title).map((event) => (
        <>
          <div className="event-post-header">
            <div className="event-title event-container">
              <h1>{event.title}</h1>
              <div className="event-title-info">
                <p>
                  <img src={AddressIcon} />
                  {event.location}
                </p>
                <p>
                  <img src={DateIcon} />
                  {event.full_date}
                </p>
              </div>
            </div>
          </div>
          <div className="event-post-about event-container">
            <h2>About</h2>
            <p>{event.description}</p>
            <img src={event.image} />
            <p>{event.summary}</p>
          </div>
          <div className="other-events event-container">
            <div className="other-events-title">
              <h3>Other events</h3>
              <span className="cards-heading-line"></span>
            </div>
            <div className="events">
              {EventData.map((event) => (
                <Link to={`/event/${event.title}`}>
                  <article className="event">
                    <div className="wrapper-date">
                      <div>
                        <h2>{event.day_date}</h2>
                        <h5>{event.month_date}</h5>
                      </div>
                      <div className="wrapper-text">
                        <h5>
                          Next event <span className="heading-line"></span>
                        </h5>
                        <h2>{event.title}</h2>
                      </div>
                    </div>
                    <i class="fas fa-arrow-circle-right"></i>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default EventPostPage;
