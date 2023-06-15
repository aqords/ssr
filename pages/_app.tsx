import "../styles/globals.css";
import "../styles/freakflags.css";

import dayjs from "dayjs";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import TagManager from "react-gtm-module";

import "dayjs/locale/ru";
import "dayjs/locale/ro";
import "dayjs/locale/cs";
import "dayjs/locale/uk";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

const LoginModal = dynamic(() => import("../components/Modal"));
const CookieBanner = dynamic(() => import("../components/CookieBanner"));

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      TagManager.initialize({ gtmId: "GTM-P2NBRPL" });
    }, 3500);
  }, []);

  dayjs.extend(customParseFormat);
  dayjs.extend(localizedFormat);

  return (
    <RecoilRoot>
      <LoginModal />
      <Component {...pageProps} />
      <CookieBanner />
    </RecoilRoot>
  );
}

export default appWithTranslation(App);
