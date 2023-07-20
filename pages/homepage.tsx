import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";

import Upperblock from "../components/Upperblock/Upperblock";
import { whyAqordsList } from "../components/Constants/WhyAqordsItems";
import Header from "../components/Header/Header";

const Footer = dynamic(() => import("../components/Footer/Footer"));
const WhyAqords = dynamic(() => import("../components/WhyAqords/WhyAqords"));
const Navigationblock = dynamic(
  () => import("../components/Navigationblock/Navigationblock")
);

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("home_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>{" "}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap"
        />
      </Head>
      <Header />
      <Upperblock />
      <WhyAqords itemsArray={whyAqordsList} />
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

export default Homepage;
