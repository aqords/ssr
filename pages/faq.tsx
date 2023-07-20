import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";
import Link from "next/link";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { faqcontent } from "../components/Constants/Faq";
import { Routes } from "../components/Constants/Routes";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("faq_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
  
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap"
        />
      </Head>
      <Header />
      <section>
        <div className="container">
          <h2 className="font-bold pt-[120px] pb-[60px] md:pt-[212px] md:pb-[135px] text-[32px] md:text-[48px] tracking-[-0.45px]">
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
            <p className="font-man font-[200] text-[20px] mt-[-20px] mb-[60px] tracking-[-0.35px]">
              {t("faq_text7")}
              <Link
                className="text-[#5682FA] underline cursor-pointer"
                href={Routes[7].path}
              >
                {t("contact_us")}
              </Link>
              {t("faq_text_next7")}
            </p>
            <p className="font-man font-[200] text-[20px]  tracking-[-0.35px]">
              {t("faq_text8")}
            </p>
          </div>
        </div>
      </section>
      <span className="block h-[1px] w-full bg-[#98A2B3] opacity-25"></span>
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
