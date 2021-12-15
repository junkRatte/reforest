import React from "react";
import { useParams } from "react-router-dom";
import { EventData } from "../components/api-data/EventsData";

const EventPostPage = () => {
  let { title } = useParams();

  return (
    <div>
      {EventData.filter((event) => event.title == title).map((event) => (
        <>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </>
      ))}
    </div>
  );
};

export default EventPostPage;
