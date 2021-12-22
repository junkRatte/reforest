import React from "react";
import { useParams } from "react-router-dom";
import { NewsData } from "../components/api-data/NewsData";

const BlogPostPage = () => {
  let { id } = useParams();

  return (
    <div className="news-post container">
      {NewsData.filter((news) => news.id == id).map((news) => (
        <>
          <div className="news-post-title data-container">
            <h5>{news.date}</h5>
            <h1>{news.title}</h1>
            <p>{news.introduction_text}</p>
          </div>
          <img src={news.image} />
          <div className="news-post-data data-container">
            <h2>{news.description_title}</h2>
            <p>{news.description}</p>
            <h3>{news.pros_heading}</h3>
            <ul>
              {news.pros.map((pros) => (
                <li>{pros}</li>
              ))}
            </ul>
            <h3>{news.summary_title}</h3>
            <p>{news.summary}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default BlogPostPage;
