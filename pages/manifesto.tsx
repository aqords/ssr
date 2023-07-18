import React, { useRef } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";
import Footer from '../components/Footer/Footer'
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import { ManifestList } from "../components/Constants/WhyAqordsItems";
import Header from "../components/Header/Header";

import WhyAqords from "../components/WhyAqords/WhyAqordsList";
import manifesto2 from "../public/assets/images/manifest-background2.png";
import truck3 from "/public/assets/images/truck3.jpg";
import ScrollToggle from "../utils/hooks/ScrollToggle";
import useScrollClassChange from "../utils/hooks/useScrollChange";
import WhyAqordsList from "../components/WhyAqords/WhyAqordsList";

const Manifesto = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: ["el-1"],
    visibleClass: "visible",
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [elementRef],
    className: "original",
  });

  return (
    <div className="pt-[76px] sm:pt-[96px]">
      <Head>
        <title>{t("manifesto_title")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 "
        />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        blockStyle="hidden md:block relative h-[580px] smx:h-[450px] lg:h-[807px] overflow-hidden pt-[120px] lg:pt-[0px] "
        blockStyle3="max-w-[532px] mt-[-120px]"
        title={t("manifesto_page_title1")}
        desc1={t("manifesto_page_desc1")}
        desc2={t("manifesto_page_desc2")}
        img={manifesto2}
        imgStyle="relative md:absolute  md:top-[0%] md:right-[-25%] lg:top-[0%] lg:right-[0%] z-[-10]"
      />
      <BlockWithBackground
        priority={true}
        blockStyle="block md:hidden relative h-[580px] smx:h-[450px] overflow-hidden pt-[120px] "
        blockStyle3="max-w-[532px] mt-[-120px]"
        title={t("manifesto_page_title1")}
        desc1={t("manifesto_page_desc1")}
        desc2={t("manifesto_page_desc2")}
        img={manifesto2}
        imgStyle="absolute top-[65%] right-[0%] sm:top-[65%] sm:right-[0%] md:top-[0%] md:right-[-25%] lg:top-[0%] lg:right-[-0%]"
      />
      <div className="bg-second">
        <div className="container">
          <div
            ref={elementRef}
            className={`${
              isScrolled["el-1"] ? "el-1 visible" : "el-1 original"
            }`}
          >
            <h2 className="text-[32px] lg:text-[48px] max-w-[680px] font-bold pt-[40px] lg:pt-[123px] pb-[0px] lg:pb-[5px] tracking-[-1.5px] leading-[3.34rem]">
              {t("manifesto_page_desc3")}
            </h2>
          </div>
          <WhyAqords itemsArray={ManifestList} />
        </div>
      </div>
      <BlockWithBackground
        img={truck3}
        imgStyle="absolute  min-h-[807px] min-w-[1280px] top-0 left-0  lg:right-0  m-auto object-cover z-[-10]"
        title={t("manifesto_page_title2")}
        desc1={t("manifesto_page_desc4")}
        blockStyle="relative h-[478px] md:h-[810px] overflow-hidden py-[40px] flex"
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

export default Manifesto;
