import { RTLProvider } from "../context/RTLContext";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import DefaultLayout from "../layouts/DefaultLayout";
import "react-tabs-scrollable/dist/rts.css";
import "nprogress/nprogress.css";

import "../styles/bootstrap.css";
import "../styles/main.css";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  const CustomLayout = Component.Layout || DefaultLayout;

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="uti4mWncYz-dPMY1zuIP-tSk5DqnL4-K3E4FX9fkGaE"
        />

        <meta
          name="keywords"
          content="React,Component,tabs, react-tabs-scrollable, scrollable, HTML, CSS, JavaScript"
        />
        <meta name="author" content="Muhammed Aliwi"></meta>
      </Head>
      <NextSeo
        title="React tabs scrollable"
        description="a simple react scrollable tabs with a lot of additional features and with fully supporting of RTL mode"
      />
      <RTLProvider>
        <Layout>
          <CustomLayout>
            <Component {...pageProps} />
          </CustomLayout>{" "}
        </Layout>
      </RTLProvider>
    </>
  );
}

export default MyApp;
