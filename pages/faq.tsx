import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import { faqcontent } from "../components/Constants/Faq";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("faq_title")}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <section>
        <div className="container">
          <h2 className="pt-[120px] pb-[60px] md:pt-[212px] md:pb-[135px] text-[32px] md:text-[48px] tracking-[-0.45px]">
            {t("faq_maintitle1")}
          </h2>
        </div>
        <div className="bg-[#19191A] py-[60px] md:py-[120px]">
          <div className="container">
            <ul>
              {faqcontent.map((obj, id) => {
                return (
                  <li key={id}>
                    <p className="font-man font-bold text-[24px] mb-[35px] tracking-[0.75px]">
                      <span className="mr-[8px]">{id + 1}.</span>
                      {t(`${obj.title}`)}
                    </p>

                    <p className="font-man font-[200] text-[20px] mb-[60px] tracking-[-0.35px]">
                      {obj.desc && t(`${obj.desc}`)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
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

export default Faq;
