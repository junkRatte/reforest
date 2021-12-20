import React from "react";
import Events from "../components/Events";
import NewsPageHeader from "../sections/newspage/NewsPageHeader";
import NewsPageNews from "../sections/newspage/NewsPageNews";

const NewsPage = () => {
  return (
    <div className="newspage">
      <NewsPageHeader />
      <NewsPageNews />
      <Events />
    </div>
  );
};

export default NewsPage;
