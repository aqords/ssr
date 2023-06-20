import React from "react";
import MainContent from "../../components/main/MainContent";
import Header from "../../components/Header/Header";
import Upperblock from "../../components/Upperblock/Upperblock";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Upperblock />
      <MainContent />
      <Navigationblock />
      <Footer />
    </>
  );
};

export default Homepage;
