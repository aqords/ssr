import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import WhitePapperHead from "../components/WhitepapperBlock/WhitePapperHead";

const whitepaper = () => {
  return (
    <div>
      <Header />
      <WhitePapperHead />
      <Navigationblock />
      <Footer />
    </div>
  );
};

export default whitepaper;
