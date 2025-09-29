import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import dynamic from "next/dynamic";

const CookieConsent = dynamic(() => import("@/../components/CookieConsent"), { ssr: false });
const Footer = dynamic(() => import("@/../components/Footer"), { ssr: false });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Footer />
      <CookieConsent />
    </>
  );
}

