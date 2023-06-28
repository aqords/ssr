import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import { ManifestList } from "../components/Constant/WhyAqordsItems";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import WhyAqords from "../components/WhyAqords/WhyAqordsList";
import manifesto from "../public/assets/images/manifesto-background.png";

const Manifesto = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Manifesto")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
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
          "Together, we can reshape the freight transportation industry, transforming it into a seamless, secure, and efficient ecosystem."
        }
        desc1={
          "AQORDS is more than just a platform; it is a movement towards a future where trust and transparency prevail. Join us in this revolution and be part of a new era in freight transportation. Together, let's embark on a journey of empowerment, innovation, and shared success. Welcome to AQORDS."
        }
      />
      <Navigationblock />
      <Footer />
    </>
  );
};

export default Manifesto;
