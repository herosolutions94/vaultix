import SiteMaster from "./sitemaster";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();


  return (
    <div className="content">
      <SiteMaster />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
