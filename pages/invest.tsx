import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Footer from "../components/Footer/Footer.Component";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import {
  detailInvestList,
  whyInvestList,
} from "../components/Constants/WhyAqordsItems";
import WhyAqordsList from "../components/WhyAqords/WhyAqordsList";

const invest = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("invest_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        title="invest_page_title1"
        desc1="invest_page_desc1"
        desc2="invest_page_desc2"
        blockStyle="bg-gray h-[479px] lg:h-[807px]"
      />
      <div className="bg-[#19191A]">
        <div className="container py-[40px] md:py-[130px]">
          <h3 className="md:text-[48px] text-[32px] font-bold tracking-[-1.5px] md:mb-[10px]">
            {t("why_invest")}
          </h3>
          <WhyAqordsList itemsArray={whyInvestList} />
        </div>
      </div>
      <div className="container">
        <WhyAqordsList itemsArray={detailInvestList} />
      </div>
      <BlockWithBackground
        title="invest_page_title2"
        desc1="invest_page_desc3"
        blockStyle="bg-gray h-[390px] lg:h-[807px]"
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

export default invest;
