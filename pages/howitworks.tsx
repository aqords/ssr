import Head from "next/head";
import React from "react";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";

import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { HowItWorksData } from "../components/Constants/HowItWorks";
import truck from "/public/assets/images/truck.jpg";
import truck4 from "/public/assets/images/truck4.jpg";

const BlockWithBackground = dynamic(
  () => import("../components/BlockWithBackground/BlockWithBackground")
);

const HowWorks = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("howitworks_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("howitworks_description")} />
        <meta name="theme-color" content="default" />
      </Head>
      <Header />
      <section className="container relative pt-[80px] md:pt-[120px]">
        <article className="mb-[80px] ">
          <h2 className="font-bold tracking-[-1.5px] text-[32px] lg:text-[48px] mb-[40px]">
            {t("howitworks_page_title1")}
          </h2>
          <p className="font-man lg:text-[20px] tracking-[0.3px] leading-8 mb-[40px] lg:mb-[80px]">
            {t("howitworks_page_desc1")}
          </p>
          <div className="w-full  rounded-[20px] overflow-hidden">
            <Image
              priority={true}
              className="h-[247px] sm:h-auto object-cover"
              src={truck4}
              alt="truck"
            />
          </div>
        </article>
        {HowItWorksData.map((obj) => {
          return (
            <div key={obj.title}>
              <Accordion
                title={t(`${obj.title}`)}
                desc1={t(`${obj.desc1}`)}
                desc2={t(`${obj.desc2}`)}
              />
            </div>
          );
        })}
      </section>
      <BlockWithBackground
        img={truck}
        imgStyle="absolute  min-h-[807px] min-w-[1280px] top-0 left-0  lg:right-0  m-auto object-cover z-[-10]"
        title={t("howitworks_page_title2")}
        desc1={t("howitworks_page_desc2")}
        desc2={t("howitworks_page_desc3")}
        blockStyle="relative h-[478px] md:h-[810px] overflow-hidden py-[40px] flex"
      />

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

export default HowWorks;
