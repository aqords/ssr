import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import RoadMap from "../components/RoadMap/RoadMap";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import roadmapimg from "/public/assets/images/roadmap.jpg";

const roadmap = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("roadmap_title")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        img={roadmapimg}
        imgStyle="object-cover"
        imgStyleWrapper="rounded-[20px] overflow-hidden mx-[12px] min-h-[232px]"
        title={t("road_map")}
        desc1={t("team_page_desc3")}
        desc2={t("team_page_desc3")}
        blockStyle=""
      />
      <div className="container">
        <RoadMap />
        <Navigationblock />
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
}

export default roadmap;
