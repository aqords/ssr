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
} from "../components/Constants/WhyAqordsItems";
import investBg from "../public/assets/images/invest.png";
import investBull from "../public/assets/images/investBull.png";
import Button from "../components/UI/Button/Button";

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
        title={t("invest_page_title1")}
        desc1={t("invest_page_desc1")}
        desc2={t("invest_page_desc2")}
        img={investBg}
        imgStyle="absolute top-[10px] right-[0px] z-[-10]"
        blockStyle="relative h-[479px] lg:h-[807px]"
      />
      <div className="bg-[#19191A]">
        <div className="container py-[40px] md:py-[130px]">
          <h3 className="md:text-[48px] text-[32px] font-bold tracking-[-1.5px] md:mb-[92px] ">
            {t("why_invest")}
          </h3>
          {whyInvestList.map((obj, id) => {
            return (
              <div className="mb-[37px]">
                <p className="text-[24px] font-bold mt-[16px] mb-[11px] tracking-[-1.5px]">
                  <span className="mr-[20px]">{id + 1 + "."}</span>
                  {t(`${obj.title}`)}
                </p>
                <p className="font-man tracking-[-0.35px] mb-[15px]">
                  {t(`${obj.description}`)}
                </p>
                <p className="font-man text-[#838383]">{t(`${obj.text}`)}</p>
              </div>
            );
          })}
          <span className="block h-[1px] w-full bg-[#98A2B3] mt-[77px] mb-[91px]"></span>
          <h3 className="md:text-[48px] text-[32px] font-bold tracking-[-1.5px] md:mb-[95px]">
            {t("detail_invest")}
          </h3>
          {detailInvestList.map((obj, id) => {
            return (
              <div className="mb-[73px]">
                <p className="text-[24px] font-bold mt-[16px] mb-[11px] tracking-[-1.5px]">
                  <span className="mr-[15px]">·</span>
                  {t(`${obj.title}`)}
                </p>
                <p className="font-man tracking-[-0.35px] mb-[15px]">
                  {t(`${obj.description}`)}
                </p>
                <p className="font-man text-[#838383]">{t(`${obj.text}`)}</p>
              </div>
            );
          })}
          <Button outsideGradient="hover:btn-hover-gradient rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px] w-[158px] h-[42px] hover:cursor-pointer">
            <div className="px-[30px] text-[20px] mt-[3px]">
              {t(`contact_us`)}
            </div>
          </Button>
        </div>
      </div>
      <BlockWithBackground
        title={t("invest_page_title2")}
        desc1={t("invest_page_desc3")}
        desc2={t("invest_page_desc4")}
        img={investBull}
        imgStyle="absolute top-[0px] right-[0px] "
        blockStyle="relative h-[390px] lg:h-[807px]"
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
