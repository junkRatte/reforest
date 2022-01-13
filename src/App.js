import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./js/components/Footer";
import Navbar from "./js/components/Navbar";
import Aboutpage from "./js/pages/AboutPage";
import Homepage from "./js/pages/HomePage";
import NewsPage from "./js/pages/NewsPage";
import ProjectPostPage from "./js/pages/ProjectPostPage";
import ProjectsPage from "./js/pages/ProjectsPage";
import NewsPostPage from "./js/pages/NewsPostPage";
import ContactPage from "./js/pages/ContactPage";
import DonationPage from "./js/pages/DonationPage";
import EventPostPage from "./js/pages/EventPostPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<Aboutpage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:title" element={<ProjectPostPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:title/:id" element={<NewsPostPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/donations" element={<DonationPage />} />
        <Route path="/event/:title" element={<EventPostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
