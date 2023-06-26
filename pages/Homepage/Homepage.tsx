import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import Upperblock from "../../components/Upperblock/Upperblock";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import WhyAqords from "../../components/WhyAqords/WhyAqords";
import { whyAqordsList } from "../../components/Constant/WhyAqordsItems";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Homepage")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <Upperblock />
      <WhyAqords itemsArray={whyAqordsList} />
      <div className="pt-[124px] pb-[157px]">
        <Navigationblock />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
