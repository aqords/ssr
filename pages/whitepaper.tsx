import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import WhitePaperHead from "../components/WhitepapperBlock/PaperHead";

const whitepaper = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("Aqords - Whitepaper")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <WhitePaperHead />
      <Navigationblock />
      <Footer />
    </>
  );
};

export default whitepaper;
