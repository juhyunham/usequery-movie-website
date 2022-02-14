import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestMovieSection from "../features/movie/latest";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <LatestMovieSection />
      <Footer />
    </div>
  );
};

export default MainPage;
