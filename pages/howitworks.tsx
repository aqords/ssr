import Image from "next/image";
import Head from "next/head";
import React from "react";
import { useTranslation } from "next-i18next";

import Accordion from "../components/Accordion/Accordion";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { HowItWorksData } from "../components/Constant/HowItWorks";

const HowWorks = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("How It Works")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <section className="container relative">
        <article className="mb-[80px] lg:mt-[120px]">
          <h2 className="font-bold tracking-[-1.5px] text-[32px] lg:text-[48px] mb-[40px]">
            {t("How it works")}
          </h2>
          <p className="font-man lg:text-[20px] tracking-[0.3px] leading-8 mb-[40px] lg:mb-[80px]">
            {t(
              "At AQORDS, we are developing a user-friendly and efficient platform that simplifies the freight transportation process through the power of blockchain technology. Our goal is to provide a seamless and transparent experience for all parties involved, from shippers and carriers to freight exchange platforms."
            )}
          </p>
          <div className="h-[375px] w-full rounded-[20px] bg-gray ">
            {/* <Image /> */}
          </div>
        </article>
        {HowItWorksData.map((obj) => {
          return (
            <>
              <Accordion
                title={obj.title}
                desc1={obj.desc1}
                desc2={obj.desc2}
              />
            </>
          );
        })}
      </section>
      <BlockWithBackground
        title={
          "To get started, shippers and carriers can easily integrate their existing systems or applications with the AQORDS platform."
        }
        desc1={
          "Our seamless integration process ensures a smooth transition and minimal disruption to your current operations"
        }
        desc2={
          "We also collaborate with major freight exchange platforms to enhance connectivity and expand your network of potential business partners."
        }
      />
      <div className="pt-[123px] pb-[160px]">
        <Navigationblock />
      </div>

      <Footer />
    </>
  );
};

export default HowWorks;
