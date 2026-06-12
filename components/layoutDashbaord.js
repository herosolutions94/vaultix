import LoggedHeader from "./header-logged";
import SiteMaster from "./sitemaster";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserData } from "@/helpers/userData";
import { Provider } from "react-redux";
import store from "@/redux/store";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";

export default function LayoutDashboard({ children }) {
  const [memberRow, setMemberRow] = useState(null);
  const [siteSettings, setSiteSettings] = useState(null);
  const router = useRouter();
  const currentPage = router.pathname;
  const segments = currentPage?.split("/");
  const lastSegment = segments[segments.length - 1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const member = await getUserData();
        setMemberRow(member?.member);
        setSiteSettings(member?.site_settings);
        if (
          member?.member === null ||
          member?.member === undefined ||
          member?.member === ""
        ) {
          removeCookies("authToken");
          window.location.href = "/";
        } else if (
          member?.member?.mem_verified !== undefined &&
          member?.member?.mem_verified !== null &&
          parseInt(member?.member?.mem_verified) !== 1 &&
          lastSegment !== "mfa"
        ) {
          router.push("/mfa");
        } else if (
          member?.member?.is_deactivated !== undefined &&
          member?.member?.is_deactivated !== null &&
          parseInt(member?.member?.is_deactivated) === 1 &&
          lastSegment !== "account-deactivated"
        ) {
          router.push("/dashboard/account-deactivated");
        }
      } catch (error) {}
    };

    fetchData();

    return () => {};
  }, []);

  useEffect(() => {
    if (
      memberRow?.is_deactivated !== undefined &&
      memberRow?.is_deactivated !== null &&
      parseInt(memberRow?.is_deactivated) === 1 &&
      lastSegment !== "account-deactivated"
    ) {
      router.push("/dashboard/account-deactivated");
    }
    if (
      memberRow?.mem_verified !== undefined &&
      memberRow?.mem_verified !== null &&
      parseInt(memberRow?.mem_verified) !== 1 &&
      lastSegment !== "mfa"
    ) {
      router.push("/dashboard/mfa");
    }
  }, [memberRow]);


  console.log('memberRow',memberRow);
  

  return (
    <>
      <Provider store={store}>
        <NextNProgress color="#e9c176" />
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "toast-wrap",
          }}
        />
        <div className="content">
          <SiteMaster siteSettings={siteSettings} />
          <LoggedHeader memberRow={memberRow} />
          {children}
        </div>
      </Provider>
    </>
  );
}
