import React from "react";
import { Link } from "react-router-dom";
import { NewsData } from "../../components/api-data/NewsData";

const NewsPageHeader = () => {
  return (
    <header className="newspage-header">
      <div className="newspage-header-container container">
        <div className="newspage-header-wrapper">
          <span className="heading-line"></span>
          <div>
            <h5>Top news</h5>
            <h1>Our goal is to make water available for everyone</h1>
            <p>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
            <button href="#" className="primary-btn">
              Read more
            </button>
          </div>
        </div>
        <div className="side-list">
          {NewsData.slice(0, 3).map((item) => (
            <Link
              to={`/news/${item.title}/${item.id}`}
              className="side-list-item"
            >
              <img src={item.image} />
              <div>
                <h5>{item.title}</h5>
                <p>{item.description_title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NewsPageHeader;
