import Head from "next/head";
import Homepage from "./homepage/homepage";
import { useTranslation } from "next-i18next";

export default function Home({ image }: any) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Homepage")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
      <Homepage />
    </>
  );
}
