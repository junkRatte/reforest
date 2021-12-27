import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPostPage from "../pages/ProjectPostPage";
import NewsPage from "../pages/NewsPage";
import NewsPostPage from "../pages/NewsPostPage";
import ContactPage from "../pages/ContactPage";
import DonationPage from "../pages/DonationPage";
import EventPostPage from "../pages/EventPostPage";

const RoutesComponent = () => {
  return (
    <>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/reforest" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:title" element={<ProjectPostPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:title/:id" element={<NewsPostPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/donations" element={<DonationPage />} />
        <Route path="/event/:title" element={<EventPostPage />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
