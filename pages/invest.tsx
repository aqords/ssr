import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import {
  detailInvestList,
  whyInvestList,
} from "../components/Constant/WhyAqordsItems";
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
        title="Invest in AQORDS Pre-Sale"
        desc1="We are excited to announce the launch of AQORDS pre-sale, an exclusive opportunity for early investors to participate in our groundbreaking logistics and supply chain platform."
        desc2="As a pre-sale investor, you will have the chance to be part of the future of freight transportation and benefit from our innovative solutions."
        blockStyle="bg-gray h-[479px] lg:h-[807px]"
      />
      <div className="bg-[#19191A]">
        <div className="container py-[40px] md:py-[130px]">
          <h3 className="md:text-[48px] text-[32px] font-bold tracking-[-1.5px] md:mb-[10px]">
            Why Invest in AQORDS?
          </h3>
          <WhyAqordsList itemsArray={whyInvestList} />
        </div>
      </div>
      <div className="container">
        <WhyAqordsList itemsArray={detailInvestList} />
      </div>
      <BlockWithBackground
        title="Take the first step towards becoming an investor in AQORDS by contacting us today."
        desc1="Together, let's shape the future of logistics and supply chain management."
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
