import React from "react";
import BlockWithBackground from "../../components/BlockWithBackground/BlockWithBackground";
import { ManifestList } from "../../components/Constant/WhyAqordsItems";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import WhyAqords from "../../components/WhyAqords/WhyAqordsList";
import manifesto from "../../public/assets/images/manifesto-background.svg";

const Manifesto = () => {
  return (
    <div>
      <Header />
      <BlockWithBackground
        blockStyle="relative overflow-hidden"
        title={"Manifesto"}
        desc1={
          "At AQORDS, we envision a future where trust, transparency, and efficiency reign supreme in the world of freight transportation. We are a team of visionaries, technologists, and industry experts dedicated to revolutionizing the freight transportation landscape through blockchain innovation."
        }
        desc2={
          "Our mission is to transform the way contracts are executed and payments are processed, bringing transparency, efficiency, and trust to supply chains worldwide."
        }
        img={manifesto}
        imgStyle="absolute top-[-10%] right-[-25%]"
      />
      <div className="bg-second">
        <div className="container">
          <WhyAqords itemsArray={ManifestList} />
        </div>
      </div>
      <BlockWithBackground
        title={
          "To get started, shippers and carriers can easily integrate their existing systems or applications with the AQORDS platform."
        }
        desc1={
          "Our seamless integration process ensures a smooth transition and minimal disruption to your current operations"
        }
        desc2={
          "We also collaborate with major freight exchange platforms to enhance connectivity and expand your network of potential business partners."
        }
      />
      <Navigationblock />
      <Footer />
    </div>
  );
};

export default Manifesto;
