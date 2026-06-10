import SiteMaster from "./sitemaster";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import http from "../helpers/http";

export default function Layout({ children, siteSettings }) {
  const router = useRouter();

  return (
    <div className="content">
      <SiteMaster siteSettings={siteSettings} />
      <Header siteSettings={siteSettings} />
      {children}
      <Footer siteSettings={siteSettings} />
    </div>
  );
}
