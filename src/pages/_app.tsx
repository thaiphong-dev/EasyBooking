import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/i18n/i18n";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
