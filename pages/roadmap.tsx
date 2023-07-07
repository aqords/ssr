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
        imgStyle="relative rounded-[20px] p-[12px] sm:rounded-[0px] sm:p-[0px] sm:absolute  sm:min-h-[807px] sm:min-w-[1280px] top-0 object-cover  z-[-10] left-1/2 transform -translate-x-1/2"
        title={t("road_map")}
        desc1={t(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        )}
        desc2={t("Ut enim ad minim veniam, quis nostrud exercitation ullamco.")}
        blockStyle="relative  md:h-[558px] overflow-hidden sm:p-[40px] md:p-[0px]"
        blockStyle2="container flex h-full items-center sm:mb-[100px]"
        blockStyle3="max-w-[712px] mt-[50px] md:mt-[-70px]"
      />
      <div className="container">
        <RoadMap />
      </div>
      <Navigationblock />
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
