import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ForestVideo from "../../../videos/homepage-forest.mp4";

const HomePageHeader = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <header className="homepage-header">
      <video muted ref={videoRef}>
        <source src={ForestVideo} type="video/mp4" />
      </video>
      <div className="container">
        <div className="homepage-title">
          <h1>
            Save the environment
            <br />
            today for a better
            <br />
            tomorrow
          </h1>
          <div className="homepage-title-buttons">
            <Link to="/projects" className="secondary-btn">
              What We Do
            </Link>
            {playing ? (
              <button
                className="video-btn"
                onClick={() => videoHandler("pause")}
              >
                <i class="fas fa-pause"></i>Pause Video
              </button>
            ) : (
              <button
                className="video-btn"
                onClick={() => videoHandler("play")}
              >
                <i class="fas fa-play-circle"></i>Play Video
              </button>
            )}
          </div>
          <div className="homepage-title-statistics">
            <p>23,800 treen planted</p>
            <span></span>
            <p>5840 donations collected</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
