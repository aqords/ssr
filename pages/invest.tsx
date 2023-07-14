import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import { Routes } from "../components/Constants/Routes";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import { whyInvestList } from "../components/Constants/WhyAqordsItems";
import investBg from "../public/assets/images/invest.jpg";
import investBull from "../public/assets/images/investBull.png";
import Button from "../components/UI/Button/Button";

import ScrollToggle from "../utils/hooks/ScrollToggle";
import useScrollClassChange from "../utils/hooks/useScrollChange";

const invest = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: ["el-2", "el-3", "el-4", "el-6"],
    visibleClass: "visible",
  });

  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const elementRef4 = useRef<HTMLDivElement>(null);
  const elementRef6 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [elementRef2, elementRef3, elementRef4, elementRef6],
    className: "original",
  });

  return (
    <div className="pt-[70px] md:pt-[96px]">
      <Head>
        <title>{t("invest_title")}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        priority={true}
        title={t("invest_page_title1")}
        desc1={t("invest_page_desc1")}
        desc2={t("invest_page_desc2")}
        img={investBg}
        imgStyle="absolute object-right h-[320px] object-cover smx:scale-[1.2] smx:right-[0px] sml:right-[50px] sm:right-[130px] h-[420px] smx:mt-[30px] lg:h-[819px] lg:scale-[1] lg:object-center  lg:top-[10px]  lg:right-[0px] z-[-10]"
        blockStyle="relative h-[560px] smx:h-[560px] lg:h-[819px] overflow-hidden"
        blockStyle2="container flex lg:h-full items-center mb-[30px]"
      />
      <div className="bg-[#19191A]">
        <div className="container py-[40px] md:py-[130px]">
          <div
            ref={elementRef2}
            className={`${
              isScrolled["el-2"] ? "el-2 visible" : "el-2 original"
            }`}
          >
            <h3 className="md:text-[48px] text-[32px] font-bold tracking-[-1.5px] md:mb-[92px] ">
              {t("why_invest")}
            </h3>
          </div>
          <div
            ref={elementRef3}
            className={`${
              isScrolled["el-3"] ? "el-3 visible" : "el-3 original"
            }`}
          >
            {whyInvestList.map((obj, id) => {
              return (
                <div key={obj.title} className="mb-[37px]">
                  <span className="text-[24px] font-bold mt-[16px] mb-[11px] tracking-[-1.5px]">
                    <span className="mr-[20px]">{id + 1 + "."}</span>
                    {t(`${obj.title}`)}
                  </span>
                  <p className="font-man tracking-[-0.35px] mb-[15px]">
                    {t(`${obj.description}`)}
                  </p>
                  <p className="font-man text-[#838383]">{t(`${obj.text}`)}</p>
                </div>
              );
            })}
          </div>
          <span className="block h-[1px] w-full bg-[#98A2B3] mt-[77px] mb-[91px]"></span>
          <div
            ref={elementRef4}
            className={`${
              isScrolled["el-4"] ? "el-4 visible" : "el-4 original"
            }`}
          >
            <h3 className="md:text-[48px] text-[32px] font-bold tracking-[-1.5px] md:mb-[95px]">
              {t("detail_invest")}
            </h3>
          </div>
          <div
            ref={elementRef6}
            className={`${
              isScrolled["el-6"] ? "el-6 visible" : "el-6 original"
            }`}
          >
            <div className="mb-[73px]">
              <span className="text-[24px] font-bold mt-[16px] mb-[11px] tracking-[-1.5px]">
                <span className="mr-[15px]">·</span>
                {t(`detail_invest1_title`)}
              </span>
              <p className="font-man tracking-[-0.35px] mb-[15px]">
                {t(`detail_invest1_desc`)}
              </p>
              <p className="font-man text-[#838383]">
                {t(`detail_invest1_text`)}
              </p>
            </div>
            <div className="mb-[73px]">
              <span className="text-[24px] font-bold mt-[16px] mb-[11px] tracking-[-1.5px]">
                <span className="mr-[15px]">·</span>
                {t(`detail_invest2_title`)}
              </span>
              <span className="font-man tracking-[-0.35px] mb-[15px]">
                {t(`detail_invest2_desc`)} &nbsp;
                {
                  <Link
                    className="text-[#5682FA] underline"
                    href={Routes[4].path}
                  >
                    {t("white_paper")}
                  </Link>
                }
                &nbsp;
                {
                  <Link
                    className="text-[#5682FA] underline ml-[3px]"
                    href={Routes[10].path}
                  >
                    {t("pitch_deck")}
                  </Link>
                }
                &nbsp;
                {
                  <Link
                    className="text-[#5682FA] underline ml-[3px]"
                    href={Routes[6].path}
                  >
                    {t("road_map2")}
                  </Link>
                }
                &nbsp;
                {
                  <Link
                    className="text-[#5682FA] underline ml-[3px]"
                    href={Routes[11].path}
                  >
                    {t("tokenomics")}
                  </Link>
                }
                &nbsp; and &nbsp;
                {
                  <Link
                    className="text-[#5682FA] underline ml-[3px]"
                    href={Routes[12].path}
                  >
                    {t("token distribution")}
                  </Link>
                }
              </span>
              <p className="font-man text-[#838383]">
                {t(`detail_invest2_text`)}
              </p>
            </div>
            <div className="mb-[73px]">
              <span className="text-[24px] font-bold mt-[16px] mb-[11px] tracking-[-1.5px]">
                <span className="mr-[15px]">·</span>
                {t(`detail_invest3_title`)}
              </span>
              <p className="font-man tracking-[-0.35px] mb-[15px]">
                {t(`detail_invest3_desc`)}
              </p>
              <p className="font-man text-[#838383]">
                {t(`detail_invest3_text`)}
              </p>
            </div>
            <Button outsideGradient="hover:btn-hover-gradient rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px] w-[158px] h-[42px] hover:cursor-pointer">
              <Link
                href={Routes[7].path}
                className="px-[30px] text-[20px] mt-[3px]"
              >
                {t(`contact_us`)}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <BlockWithBackground
        title={t("invest_page_title2")}
        desc1={
          <span className="">
            {t("invest_page_desc3")}
            <br />
            <br />
            {t("invest_page_desc4")}
            <Link
              className="text-[#5682FA] underline cursor-pointer"
              href="mailto:mihail@aqords.com"
            >
              mihail@aqords.com
            </Link>
          </span>
        }
        img={investBull}
        imgStyle="lg:absolute top-[0px] lg:right-[-190px] 2xl:right-[-140px] z-[-10]"
        blockStyle="relative h-[575px] sml:h-[595px] smx:h-[620px] sm:h-[700px] md:h-[780px] overflow-hidden "
      />
      <Footer />
    </div>
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
