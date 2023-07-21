import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PaperHead from "../components/WhitepapperBlock/PaperHead";

const whitepaper = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("whitepaper_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("whitepaper_description")} />
        <meta name="theme-color" content="default" />
      </Head>
      <Header />
      <PaperHead />
      <span className="block h-[1px] w-full bg-[#98A2B3] opacity-25"></span>
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

export default whitepaper;
