import React from "react";
import Header from "./../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      <HeroSection />

      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
