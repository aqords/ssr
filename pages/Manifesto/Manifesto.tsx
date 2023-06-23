import React from "react";
import BlockWithBackground from "../../components/BlockWithBackground/BlockWithBackground";
import { ManifestList } from "../../components/Constant/WhyAqordsItems";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import WhyAqords from "../../components/WhyAqords/WhyAqordsList";
import manifesto from "../../public/assets/images/manifesto-background.svg";
import { useTranslation } from "next-i18next";

const Manifesto = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <BlockWithBackground
        blockStyle="relative h-[580px] lg:h-[807px] overflow-hidden "
        title={"Manifesto"}
        desc1={
          "At AQORDS, we envision a future where trust, transparency, and efficiency reign supreme in the world of freight transportation. We are a team of visionaries, technologists, and industry experts dedicated to revolutionizing the freight transportation landscape through blockchain innovation."
        }
        desc2={
          "Our mission is to transform the way contracts are executed and payments are processed, bringing transparency, efficiency, and trust to supply chains worldwide."
        }
        img={manifesto}
        imgStyle="absolute top-[65%] right-[-40%] sm:top-[45%] sm:right-[-30%] lg:top-[0%] lg:right-[-63%] xl:top-[-12%] xl:right-[-43%] 2xl:top-[-12%] 2xl:right-[-25%]"
      />
      <div className="bg-second">
        <div className="container">
          <h2 className="text-[32px] lg:text-[48px] max-w-[680px] font-bold pt-[40px] lg:pt-[123px] pb-[0px] lg:pb-[5px] tracking-[-1.5px] leading-[3.34rem]">
            {t("We stand firmly committed to the following principles:")}
          </h2>
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
