import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { GetStaticPropsContext } from "next";

import { getRandomImage } from "../utils/getRandomImage";
import getServerSideTranslations from "../utils/getServerSideTranslations";
import Scripts from "../components/Scripts";
import { SetStateAction, useEffect, useState } from "react";
import { getRangomStringHomepage } from "../utils/getRandomStringHomepage";
import { useBreadcrumbs } from "../utils/hooks/useBreadcrumbs";

const LandingMenu = dynamic(
  () => import("../components/LandingMenu/LandingMenu")
);

const RandomHeading = dynamic(
  () => import("../components/RandomHeading/RandomHeading")
);

const QoobusHomepage = dynamic(
  () => import("../components/Icons/QoobusHomepage")
);

const SliderMenu = dynamic(() => import("../components/SliderMenu/SliderMenu"));

export default function Home({ image }: any) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      <Head>
        <title>{t("home_title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("home_description")} />
        <Scripts />
      </Head>
      <main className="h-[calc(100vh-100px)] w-full flex flex-col lg:block test-shadow lg:min-h-[640px] 2xl:min-h-[864px]">
        <div className="grad absolute h-full bottom-0 left-0 top-0 right-0 lg:min-h-[600px] 2xl:min-h-[864px]">
        {isLoading && <RandomHeading />}
        </div>
        {image ? (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              // layout="responsive"
              priority
              width={"100"}
              height={"100"}
              sizes={"50vw"}
              placeholder="blur"
              blurDataURL={image.imageBlur}
              className={` max-lg:!static lg:absolute lg:h-full object-cover -z-10 w-full  max-lg:h-[19vh] lg:min-h-[640px] 2xl:min-h-[864px] grad`}
            />
          </>
        ) : null}
          <LandingMenu />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const image = getRandomImage();
  return {
    props: {
      image,
      ...(await getServerSideTranslations(locale)),
    },
    revalidate: 1,
  };
}
