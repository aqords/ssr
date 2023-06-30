import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

import Footer from "../components/Footer/Footer.Component";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import TeamCard from "../components/TeamCard/TeamCard";
import { teamList } from "../components/Constant/TeamList";

const team = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("team_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        title={t("team_page_title1")}
        desc1={t("team_page_desc1")}
        desc2={t("team_page_desc2")}
        blockStyle="bg-primary h-[479px] lg:h-[807px] mt-[-30px]"
      />
      <div className="bg-[#19191A]">
        <section className="container flex flex-col mt-[40px]">
          <h2 className="font-bold tracking-[-1.5px] text-[32px] lg:text-[48px] mb-[30px] md:mb-[47px] mt-[40px] md:mt-[120px]">
            {t("team_page_title4")}
          </h2>
          <p className="text-[14px] md:text-[21px] mb-[30px] md:mb-[120px]">
            {t("team_page_title2")}
          </p>
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
        title={t("team_page_title3")}
        desc1={t("team_page_desc3")}
        blockStyle="bg-gray h-[375px] lg:h-[807px]"
      />
      <div className="md:bg-[#19191A] md:py-[120px] py-[30px]">
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
          <div className="bg-gray md:w-[440px] md:h-[286px] min-w-[350px] min-h-[230px] rounded-[20px]">
            {/* <Image /> */}
          </div>
        </div>
        <div className="container">
          <p className="font-man md:text-[20px] leading-[24px] tracking-[-0.14px] mb-[30px]">
            {t("team_page_desc6")}
          </p>
          <p className="font-man text-[#838383]  text-[15px] leading-[24px] tracking-[-0.14px]">
            {t("team_page_desc7")}
          </p>
        </div>
      </div>
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

export default team;
