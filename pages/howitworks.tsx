import Image from "next/image";
import Head from "next/head";
import React from "react";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Accordion from "../components/Accordion/Accordion";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import Footer from "../components/Footer/Footer.Component";
import Header from "../components/Header/Header";
import { HowItWorksData } from "../components/Constants/HowItWorks";

const HowWorks = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("howitworks_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <section className="container relative">
        <article className="mb-[80px] lg:mt-[120px]">
          <h2 className="font-bold tracking-[-1.5px] text-[32px] lg:text-[48px] mb-[40px]">
            {t("howitworks_page_title1")}
          </h2>
          <p className="font-man lg:text-[20px] tracking-[0.3px] leading-8 mb-[40px] lg:mb-[80px]">
            {t("howitworks_page_desc1")}
          </p>
          <div className="h-[375px] w-full rounded-[20px] bg-gray ">
            {/* <Image /> */}
          </div>
        </article>
        {HowItWorksData.map((obj) => {
          return (
            <>
              <Accordion
                title={t(`${obj.title}`)}
                desc1={t(`${obj.desc1}`)}
                desc2={t(`${obj.desc2}`)}
              />
            </>
          );
        })}
      </section>
      <BlockWithBackground
        title={t("howitworks_page_title2")}
        desc1={t("howitworks_page_desc2")}
        desc2={t("howitworks_page_desc3")}
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

export default HowWorks;
