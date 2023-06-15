import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { useRecoilState } from "recoil";
import dynamic from "next/dynamic";
import { modalState } from "../store/states";

import getServerSideTranslations from "../utils/getServerSideTranslations";
import { useEffect, useState } from "react";
import Head from "next/head";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import { getFaqAbout } from "../utils/getFaqAbout";

const HeaderAbout = dynamic(() => import("../components/Header/HeaderAbout"));
const FooterVZbore = dynamic(
  () => import("../components/Search/components/FooterVZbore")
);
const FooterAbout = dynamic(() => import("../components/About/FooterAbout"));
const Scripts = dynamic(() => import("../components/Scripts"));
const SectionOne = dynamic(() => import("../components/About/SectionOne"));
const SectionTwo = dynamic(() => import("../components/About/SectionTwo"));
const SectionThree = dynamic(() => import("../components/About/SectionThree"));
const SectionFour = dynamic(() => import("../components/About/SectionFour"));
const SliderMenu = dynamic(() => import("../components/SliderMenu/SliderMenu"));
const SuggestionBlock = dynamic(
  () => import("../components/Blocks/SuggestionsBlock")
);
const Faq = dynamic(() => import("../components/Faq/Faq"));

export const About = () => {
  const [_isModalOpen, setModalState] = useRecoilState(modalState);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (isOpen) {
      return document?.body?.removeAttribute("style");
    }
    document.body.style.overflow = "hidden";
  }, [isOpen]);

  const faqs = getFaqAbout(t);

  return (
    <>
      <Head>
        <title>{t("about_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("about_description")} />
        <Scripts />
      </Head>
      <section className="bg-white-1 overflow-x-hidden">
        <HeaderAbout
          isHiddenText
          isMenuOpen={isOpen}
          setIsMenuOpen={setIsOpen}
          breadcrumbsItem={{path: "/about", key: "about_our_company", page: "about"}}
        />
        <div className="container pt-10">
          <SectionOne />
          <SectionTwo />
        </div>
        <div>
          <SectionThree />
        </div>
        <div className="container mb-10 md:mb-20">
          <SectionFour />
          <SuggestionBlock
            title={t("main_about_6")}
            link={{
              isLink: true,
              callback: (e: any) => {
                e.stopPropagation();
                setModalState(true);
              },
              link: "/register",
              text: t("join_today"),
            }}
          />
          <div className="flex my-5 md:my-10 gap-5 flex-col md:flex-row">
            <InfoBlock
              text_1={t("shippers")}
              text_2={t("about_shippers")}
              link={"/shippers"}
            />
            <InfoBlock
              text_1={t("carriers")}
              text_2={t("about_carriers")}
              link={"/carriers"}
            />
          </div>
          <Faq faq={faqs} companyName={"Qoobus"} />
        </div>
        <div className="hidden md:block">
          <FooterAbout />
        </div>
        <div className="block md:hidden container">
          <FooterVZbore classes="block  mb-5" />
        </div>
        <SliderMenu isShow={isOpen} setIsShow={setIsOpen} />
      </section>
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

export default About;
