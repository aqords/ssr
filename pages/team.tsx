import React, { useRef } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import TeamCard from "../components/TeamCard/TeamCard";
import { teamList } from "../components/Constants/TeamList";
import truck5 from "/public/assets/images/truck5.jpg";
import teambg from "/public/assets/images/teambg.jpg";
import teambridge from "/public/assets/images/teambridge.jpg";
import ScrollToggle from "../utils/hooks/ScrollToggle";
import useScrollClassChange from "../utils/hooks/useScrollChange";

const team = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: ["el-1", "el-2", "el-3", "el-4"],
    visibleClass: "rightvisible",
  });

  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const elementRef4 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [elementRef, elementRef2, elementRef3, elementRef4],
    className: "original",
  });

  return (
    <div className="pt-[80px] sm:pt-[96px]">
      <Head>
        <title>{t("team_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        priority={true}
        title={t("team_page_title1")}
        desc1={t("team_page_desc1")}
        desc2={t("team_page_desc2")}
        img={teambg}
        imgStyle="absolute object-center object-cover top-[250px] right-[0px] h-[220px] sm:h-[320px] smx:h-[400px] smx:mt-[30px] lg:h-[800px] lg:object-center  lg:top-[0px]  lg:right-[0px] z-[-10]"
        blockStyle="relative h-[460px] smx:h-[660px] lg:h-[819px] overflow-hidden"
        blockStyle2="container flex lg:h-full items-center mb-[30px]"
      />

      <div className="bg-[#19191A]">
        <section className="container flex flex-col mt-[40px]">
          <div
            ref={elementRef}
            className={`${
              isScrolled["el-1"] ? "el-1 visible" : "el-1 original"
            }`}
          >
            <h2 className="font-bold tracking-[-1.5px] text-[32px] lg:text-[48px] mb-[30px] md:mb-[47px] mt-[40px] md:mt-[120px]">
              {t("team_page_title4")}
            </h2>
            <p className="text-[14px] md:text-[21px] mb-[30px] md:mb-[120px]">
              {t("team_page_title2")}
            </p>
          </div>

          {teamList.map((obj) => {
            return (
              <TeamCard
                key={obj.name}
                name={obj.name}
                img={obj.img}
                position={obj.position}
                skills={obj.skills}
                desc={obj.desc}
              />
            );
          })}
        </section>
      </div>
      <BlockWithBackground
        img={teambridge}
        imgStyle="absolute  min-h-[807px] min-w-[1280px] top-0 left-0  lg:right-0  m-auto object-cover z-[-10]"
        title={t("team_page_title3")}
        desc1={t("team_page_desc3")}
        blockStyle="relative h-[478px] md:h-[810px] overflow-hidden py-[40px] flex"
      />
      <div className="md:bg-[#19191A] md:py-[120px] py-[30px]">
        <div
          ref={elementRef2}
          className={`${
            isScrolled["el-2"] ? "el-2 visible " : "el-2 original "
          }`}
        >
          <div className="container flex flex-wrap md:flex-nowrap  justify-center  md:jutify-between gap-[40px] md:gap-[112px] mb-[40px]">
            <div className="max-w-[532px]">
              <p className="font-man leading-[31px] tracking-[-0.14px] md:text-[20px]">
                {t("team_page_desc4")}
              </p>
              <br />
              <p className="font-man text-[#838383] text-[15px] leading-[24px] tracking-[-0.14px] md:text-[18px]">
                {t("team_page_desc5")}
              </p>
            </div>

            <div className="md:w-[440px] md:h-[286px] min-w-[350px] min-h-[230px] rounded-[20px] overflow-hidden">
              <Image src={truck5} alt="truck" />
            </div>
          </div>
        </div>
        <div
          ref={elementRef3}
          className={`${isScrolled["el-3"] ? "el-3 visible" : "el-3 original"}`}
        >
          <div className="container">
            <p className="font-man md:text-[20px] leading-[24px] tracking-[-0.14px] mb-[30px]">
              {t("team_page_desc6")}
            </p>
            <p className="font-man text-[#838383]  text-[15px] leading-[24px] tracking-[-0.14px]">
              {t("team_page_desc7")}
            </p>
          </div>
        </div>
      </div>
      <span className="block h-[1px] w-full bg-[#98A2B3] opacity-25"></span>
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

export default team;
