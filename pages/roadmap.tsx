import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import RoadMap from "../components/RoadMap/RoadMap";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";

const roadmap = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Road map")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>

      <div className="container">
        <Header />
        <BlockWithBackground
          title="Roadmap"
          desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          desc2="
        Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          blockStyle="bg-primary h-[479px] lg:h-[550px] mt-[-30px]"
        />
        <RoadMap />
        <Navigationblock />
        <Footer />
      </div>
    </>
  );
};

export default roadmap;
