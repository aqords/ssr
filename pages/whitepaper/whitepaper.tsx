import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import WhitePapperHead from "../../components/WhitepapperBlock/WhitePapperHead";
// import WhitePapper from "../../components/WhitepapperBlock/WhitePapper";

const whitepaper = () => {
  return (
    <div>
      <Header />
      <WhitePapperHead />
      {/* <WhitePapper /> */}
      <Navigationblock />
      <Footer />
    </div>
  );
};

export default whitepaper;
