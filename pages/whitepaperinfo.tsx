import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import PaperInfo from "../components/WhitepapperBlock/PaperInfo";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const whitepapperinfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("whitepaperinfo_title")}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400&family=Rubik:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <meta name="theme-color" content="default" />
      </Head>
      <Header />
      <PaperInfo />
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

export default whitepapperinfo;
