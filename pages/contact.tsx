import React, { useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";

import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import Header from "../components/Header/Header";
import contactbull from "/public/assets/images/contactbull.svg";
import SentForm from "../components/ContactForm/SentForm";

const ContactForm = dynamic(
  () => import("../components/ContactForm/ContactForm")
);
const Footer = dynamic(() => import("../components/Footer/Footer"));

const contact = () => {
  const { t } = useTranslation();
  const [messageSent, setMessageSent] = useState(false);

  const isSentMessage = (boolean: boolean): void => {
    setMessageSent(boolean);
  };

  return (
    <div className="pt-[70px] md:pt-[96px]">
      <Head>
        <title>{t("contact_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"/>
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
          {!messageSent ? (
            <div>
              <p className=" md:text-[20px] max-w-[532px] font-man mb-[40px]">
                {t("contact_page_desc3")}
              </p>
              <p className="text-[14px] leading-[25px] tracking-[0.3px] text-[#838383] font-man">
                {t("contact_page_desc4")}
              </p>
              <ContactForm isSentMessage={isSentMessage} />
            </div>
          ) : (
            <div>
              <SentForm isSentMessage={isSentMessage} />
            </div>
          )}
        </div>
      </section>
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

export default contact;
