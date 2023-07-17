import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import ContactForm from "../components/ContactForm/ContactForm";
import contactbull from "/public/assets/images/contactbull.svg";

const contact = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-[70px] md:pt-[96px]">
      <Head>
        <title>{t("contact_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        priority={true}
        blockStyle="relative overflow-hidden items-start  h-[210px] md:h-[380px] lg:h-[558px]"
        title={t("contact_page_title1")}
        desc1={t("contact_page_desc1")}
        desc2={t("contact_page_desc2")}
        img={contactbull}
        imgStyle="hidden md:block  absolute md:top-[0px]  md:right-[-250px] md:scale-[0.6] lg:scale-[1] lg:right-[-150px]  xl:right-[0px] "
      />
      <section className="bg-[#19191A]">
        <div className="container py-[40px] md:py-[120px]">
          <p className=" md:text-[20px] max-w-[532px] font-man mb-[40px]">
            {t("contact_page_desc3")}
          </p>
          <p className="text-[14px] leading-[25px] tracking-[0.3px] text-[#838383] font-man">
            {t("contact_page_desc4")}
          </p>
          <ContactForm />
          <p className="md:text-[20px] leading-[25px]   font-man mb-[45px]">
            {t("contact_page_desc5")}
          </p>
        </div>
      </section>
      <Navigationblock />
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

export default contact;
