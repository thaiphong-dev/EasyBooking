import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/i18n/i18n";
import "swiper/css";
function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Header />
      <div className="pb-[70px] bg-background-MO xl:bg-white">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
