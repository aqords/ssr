import Head from "next/head";
import { useTranslation } from "next-i18next";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import { GetStaticPropsContext } from "next";

import Upperblock from "../components/Upperblock/Upperblock";
import Navigationblock from "../components/Navigationblock/Navigationblock";
import WhyAqords from "../components/WhyAqords/WhyAqords";
import { whyAqordsList } from "../components/Constants/WhyAqordsItems";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("home_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400&family=Rubik:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={t("home_description")} />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Header />
      <Upperblock />
      <WhyAqords itemsArray={whyAqordsList} />
      <Navigationblock />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
}
