import "../styles/globals.css";
import { IsSsrMobileContext } from "../utils/hooks/useMobile/useIsMobile";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps<{ isSsrMobile: boolean }>) {
  return (
    <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
      <Component {...pageProps} />
    </IsSsrMobileContext.Provider>
  );
}

export default appWithTranslation(App);
