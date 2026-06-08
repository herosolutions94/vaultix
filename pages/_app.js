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

export default function App({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return renderWithLayout(<Component {...pageProps} />);
}
