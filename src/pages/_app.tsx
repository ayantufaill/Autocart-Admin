import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Source_Sans_3 } from "next/font/google";

import store from "@/redux/store";
import Layout from "@/components/core/Header/Layout/Layout";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={sourceSans.className}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}
