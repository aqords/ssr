import "../styles/globals.css";
import { IsSsrMobileContext } from "../utils/hooks/useMobile/useIsMobile";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
