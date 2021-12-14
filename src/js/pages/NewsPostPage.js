import React from "react";
import { useParams } from "react-router-dom";
import { NewsData } from "../components/api-data/NewsData";

const BlogPostPage = () => {
  let { id } = useParams();

  return (
    <div>
      {NewsData.filter((news) => news.id == id).map((news) => (
        <>
          <h1>{news.title}</h1>
          <img src={news.image} />
          {/* <ul>
            {news.pros.map((pros) => (
              <li>{pros}</li>
            ))}
          </ul> */}
        </>
      ))}
    </div>
  );
};

export default BlogPostPage;
