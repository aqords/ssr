import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import ContactForm from "../components/ContactForm/ContactForm";

const contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Contact Us")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        title="Contact Us"
        desc1="We would love to hear from you!"
        desc2="If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. Our dedicated team is here to assist you."
        blockStyle="bg-[#0A090F] h-[479px] lg:h-[560px]"
      />
      <section className="bg-[#19191A]">
        <div className="container py-[40px] md:py-[120px]">
          <p className=" md:text-[20px] max-w-[532px] font-man mb-[40px]">
            {t(
              "Please fill out the contact form below and we will get back to you as soon as possible."
            )}
          </p>
          <p className="text-[14px] leading-[25px] tracking-[0.3px] text-[#838383] font-man">
            {t("We value your input and look forward to connecting with you.")}
          </p>
          <ContactForm />
          <p className="md:text-[20px] leading-[25px]   font-man mb-[45px]">
            {t(
              "We are excited to announce the launch of AQORDS pre-sale, an exclusive opportunity for early investors to participate in our groundbreaking logistics and supply chain platform."
            )}
          </p>
          <p className="text-[14px] leading-[25px] tracking-[0.3px] text-[#838383] font-man">
            {t(
              "As a pre-sale investor, you will have the chance to be part of the future of freight transportation."
            )}
          </p>
        </div>
      </section>
      <Navigationblock />
      <Footer />
    </>
  );
};

export default contact;
