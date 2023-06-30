import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

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
        <title>{t("manifesto_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        blockStyle="relative h-[580px] lg:h-[807px] overflow-hidden "
        title={t("manifesto_page_title1")}
        desc1={t("manifesto_page_desc1")}
        desc2={t("manifesto_page_desc2")}
        img={manifesto}
        imgStyle="absolute top-[65%] right-[-40%] sm:top-[45%] sm:right-[-30%] lg:top-[0%] lg:right-[-63%] xl:top-[-12%] xl:right-[-43%] 2xl:top-[-12%] 2xl:right-[-25%]"
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
        title={t("manifesto_page_title2")}
        desc1={t("manifesto_page_desc4")}
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
