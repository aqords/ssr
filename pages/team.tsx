import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import Footer from "../components/Footer/Footer";
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
        <title>{t("Team")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        title="Team"
        desc1="At AQORDS, we have assembled a team of exceptional individuals who are passionate about revolutionizing the freight transportation industry through blockchain innovation."
        desc2="
        With diverse backgrounds and expertise, our team brings together a wealth of knowledge and experience to drive our vision forward."
        blockStyle="bg-primary h-[479px] lg:h-[807px] mt-[-30px]"
      />
      <div className="bg-[#19191A]">
        <section className="container flex flex-col mt-[40px]">
          <h2 className="font-bold tracking-[-1.5px] text-[32px] lg:text-[48px] mb-[30px] md:mb-[47px] mt-[40px] md:mt-[120px]">
            {t("Meet the Faces Behind AQORDS")}
          </h2>
          <p className="text-[14px] md:text-[21px] mb-[30px] md:mb-[120px]">
            {t("Our Founders:")}
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
        title="We are united by a shared vision and a drive to create a lasting impact in the industry."
        desc1="Our team is comprised of seasoned professionals with extensive experience in supply chains, freight transportation, blockchain technology, decentralized finance (DeFi), and online marketplaces."
        blockStyle="bg-gray h-[375px] lg:h-[807px]"
      />
      <div className="md:bg-[#19191A] md:py-[120px] py-[30px]">
        <div className="container flex flex-wrap md:flex-nowrap  justify-center  md:jutify-between gap-[40px] md:gap-[112px] mb-[40px]">
          <div className="max-w-[532px]">
            <p className="font-man leading-[31px] tracking-[-0.14px] md:text-[20px]">
              {t(
                "With a deep understanding of the challenges and opportunities in the freight transportation space, our team is committed to developing innovative solutions that transform the way contracts are executed, payments are processed, and trust is established between parties."
              )}
            </p>
            <br />
            <p className="font-man text-[#838383] text-[15px] leading-[24px] tracking-[-0.14px] md:text-[18px]">
              {t(
                "We are dedicated to creating a culture of excellence, innovation,and continuous learning within AQORDS. Our team is fueled by a passion for disruptive technologies and a commitment to delivering exceptional value to our users."
              )}
            </p>
          </div>
          <div className="bg-gray md:w-[440px] md:h-[286px] min-w-[350px] min-h-[230px] rounded-[20px]">
            {/* <Image /> */}
          </div>
        </div>
        <div className="container">
          <p className="font-man md:text-[20px] leading-[24px] tracking-[-0.14px] mb-[30px]">
            {t(
              "Together, we are shaping the future of freight transportation and unlocking new possibilities for the industry."
            )}
          </p>
          <p className="font-man text-[#838383]  text-[15px] leading-[24px] tracking-[-0.14px]">
            {t(
              "Join us on this exciting journey as we revolutionize the way supply chains operate and pave the way for a more efficient, transparent,and secure future."
            )}
          </p>
        </div>
      </div>
      <Navigationblock />
      <Footer />
    </>
  );
};

export default team;
