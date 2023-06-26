import React from "react";
import AboutUsblock from "../../components/AboutUsblock/AboutUsblock";
import InfoAboutblock from "../../components/AboutUsblock/InfoAboutblock";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../../components/BlockWithBackground/BlockWithBackground";
import aboutusbg from "../../public/assets/images/about-bg.svg";

const AboutUs = () => {
  return (
    <div>
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
        imgStyle="absolute top-[-10%] right-[-25%]"
      />
      <InfoAboutblock />
      <Navigationblock />
    </div>
  );
};

export default AboutUs;
