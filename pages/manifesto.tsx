import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import { useIsMobile } from "../utils/hooks/useMobile/useIsMobile";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import { ManifestList } from "../components/Constants/WhyAqordsItems";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import WhyAqords from "../components/WhyAqords/WhyAqordsList";
import manifesto from "../public/assets/images/manifesto-background1.png";
import manifestoMob from "../public/assets/images/manifesto-mobile.png";
import truck3 from "/public/assets/images/truck3.jpg";


const Manifesto = () => {
  const { t } = useTranslation();

  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <title>{t("manifesto_title")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        blockStyle="relative h-[580px] lg:h-[807px] overflow-hidden mt-[-40px]"
        title={t("manifesto_page_title1")}
        desc1={t("manifesto_page_desc1")}
        desc2={t("manifesto_page_desc2")}
        img={isMobile ? manifestoMob : manifesto}
        imgStyle="absolute top-[65%] right-[0%] sm:top-[65%] sm:right-[0%] md:top-[0%] md:right-[-40%] lg:top-[0%] lg:right-[-10%] xl:top-[0%] xl:right-[0%] 2xl:top-[0%] 2xl:right-[0%]"
      />
      <div className="bg-second">
        <div className="container">
          <h2 className="text-[32px] lg:text-[48px] max-w-[680px] font-bold pt-[40px] lg:pt-[123px] pb-[0px] lg:pb-[5px] tracking-[-1.5px] leading-[3.34rem]">
            {t("manifesto_page_desc3")}
          </h2>
          <WhyAqords itemsArray={ManifestList} />
        </div>
      </div>
      <BlockWithBackground
        img={truck3}
        imgStyle="absolute  min-h-[807px] min-w-[1280px] top-0 left-0  lg:right-0  m-auto object-cover z-[-10]"
        title={t("manifesto_page_title2")}
        desc1={t("manifesto_page_desc4")}
        blockStyle="relative h-[478px] md:h-[810px] overflow-hidden py-[40px] flex"
      />
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

export default Manifesto;
