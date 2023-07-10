import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Navigationblock from "../components/Navigationblock/Navigationblock";
import InfoAboutblock from "../components/AboutUsblock/InfoAboutblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import aboutusbg from "../public/assets/images/aboutbg.svg";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

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
        blockStyle="relative overflow-hidden items-start  h-[610px] md:h-[580px]  lg:h-[800px] mt-[-40px] sm:mt-[0px] pt-[120px] lg:pt-[0px]"
        title={t("about_page_title1")}
        desc1={t("about_page_desc1")}
        desc2={t("about_page_desc2")}
        img={aboutusbg}
        imgStyle="absolute top-[250px] smx:top-[150px] smx:right-[-100px] smx:scale-[0.7] scale-[0.8] right-[-40px] sm:right-[-155px] sm:scale-[0.6] sm:top-[100px] md:top-[-20px]  md:right-[-250px] md:scale-[0.6] lg:scale-[1] lg:right-[-370px]  xl:right-[-230px] 2xl:right-[-170px] 3xl:right-[0px]"
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
