import React from "react";
import { Link } from "react-router-dom";
import { NewsData } from "./api-data/NewsData";

const NewsCards = () => {
  return (
    <div className="container">
      <div className="news-cards">
        {NewsData.map((news) => (
          <Link className="news-card" to={`/news/${news.title}/${news.id}`}>
            <img src={news.image} />
            <h4>{news.title}</h4>
            <p>{news.introduction_text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
