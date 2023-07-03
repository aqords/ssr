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
          desc1=""
          desc2="
       "
          blockStyle="bg-primary h-[250px] lg:h-[600px] mt-[-30px]"
        />
        <RoadMap />
        <Navigationblock />
        <Footer />
      </div>
    </>
  );
};

export default roadmap;
