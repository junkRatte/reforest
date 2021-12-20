import React from "react";
import NewsCards from "../../components/NewsCards";

const NewsPageNews = () => {
  return (
    <section className="newspage-news">
      <div className="container">
        <div className="newspage-news-title">
          <h2>Read our Recent News</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim
          </p>
        </div>
        <NewsCards />
      </div>
    </section>
  );
};

export default NewsPageNews;
