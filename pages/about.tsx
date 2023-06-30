import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import InfoAboutblock from "../components/AboutUsblock/InfoAboutblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import aboutusbg from "../public/assets/images/about-bg.svg";

const about = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t("about_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        blockStyle="relative overflow-hidden items-start  h-[479px] lg:h-[807px]"
        title={"about_page_title1"}
        desc1={"about_page_desc1"}
        desc2={"about_page_desc2"}
        img={aboutusbg}
        imgStyle="absolute z-[-1] top-[65%]   smx:top-[50%]  sm:top-[0%]  lg:top-[10%]  xl:top-[-12%]xl  2xl:top-[-12%]  w-[1920px]  left-1/2 transform -translate-x-1/2 px-[10px] sm:px-[0px]"
      />
      <InfoAboutblock />
      <Navigationblock />
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
}

export default about;
