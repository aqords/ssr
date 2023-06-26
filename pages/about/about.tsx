import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import InfoAboutblock from "../../components/AboutUsblock/InfoAboutblock";
import BlockWithBackground from "../../components/BlockWithBackground/BlockWithBackground";
import aboutusbg from "../../public/assets/images/about-bg.svg";

const about = () => {
  return (
    <div>
      <Header />
      <BlockWithBackground
        blockStyle="relative overflow-hidden"
        title={"About us!"}
        desc1={
          " We are a team of visionaries, technologists, and industry experts dedicated to revolutionizing the freight transportation landscape through blockchain innovation."
        }
        desc2={
          "Our mission is to transform the way contracts are executed andpayments are processed, bringing transparency, efficiency, and trustto supply chains worldwide."
        }
        img={aboutusbg}
        imgStyle="absolute z-[-1] top-[-10%] w-[1920px]  left-1/2 transform -translate-x-1/2"
      />

      <InfoAboutblock />
      <Navigationblock />
      <Footer />
    </div>
  );
};

export default about;
