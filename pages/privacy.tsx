import React from "react";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";
import Header from "../components/Header/Header";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import BlockWithBackground from "../components/BlockWithBackground/BlockWithBackground";
import Privacy from "../components/Privacy/Privacy";

const privacy = () => {
  return (
    <div className="pt-[20px] sm:pt-[96px]">
      <Head>
        <title>Privacy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="terms and conditions" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <BlockWithBackground
        priority={true}
        imgStyle="relative rounded-[20px] p-[12px] sm:rounded-[0px] sm:p-[0px] sm:absolute  sm:min-h-[807px] sm:min-w-[1280px] top-0 object-cover  z-[-10] left-1/2 transform -translate-x-1/2"
        title={"Privacy Policy"}
        blockStyle="relative  md:h-[220px] overflow-hidden sm:p-[40px] md:p-[0px] bg-[#19191A]"
        blockStyle2="container flex h-full items-center sm:mb-[100px] "
        blockStyle3="max-w-[712px] mt-[50px] md:mt-[40px]"
      />
      <div className="container mt-[50px] ">
        <Privacy />
      </div>
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

export default privacy;
