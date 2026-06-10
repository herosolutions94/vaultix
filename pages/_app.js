import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/custom.scss";
import "../styles/inherit.scss";
import "../styles/home.scss";
import "../styles/about.scss";
import "../styles/security.scss";
import "../styles/pricing.scss";
import "../styles/faq.scss";
import "../styles/contact.scss";
import "../styles/how-it-works.scss";
import "../styles/terms.scss";
import "../styles/checkout.scss";
import "../styles/auth.scss";
import "../styles/error.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import Layout from "../components/layout";
import { parse } from "cookie";
import http from "../helpers/http";
import { doObjToFormData } from "@/helpers/helpers";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps, siteSettings }) {
  const renderWithLayout =
    Component.getLayout ||
    // function (page) {
    //   return <Layout siteSettings={siteSettings}>{page}</Layout>;
    // };

    ((page) => (
      <>
        {/* <Provider store={store}> */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: "14px",
            },
          }}
        />
        <NextNProgress color="#ee2524ff" />
        <Layout siteSettings={siteSettings}>{page}</Layout>
        {/* </Provider> */}
      </>
    ));

  return renderWithLayout(<Component {...pageProps} />);
}

App.getInitialProps = async ({ ctx }) => {
  const cookies = parse(ctx?.req?.headers?.cookie || "");
  const authToken = cookies?.authToken || "";
  const siteSettings = await http
    .post("site-settings", doObjToFormData({ token: authToken }))
    .then((response) => response?.data?.site_settings)
    .catch((error) => error?.response?.data?.message);
  return { siteSettings };
};
