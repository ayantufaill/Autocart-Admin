import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "@/redux/store";
import Layout from "@/components/core/Header/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}
