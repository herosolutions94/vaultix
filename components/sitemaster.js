import React from "react";
import Head from "next/head";
import { cmsFileUrl } from "@/helpers/helpers";

export default function SiteMaster({ siteSettings }) {
  return (
    <Head>
      <title>Vaultix</title>
      <meta name="title" content="Vaultix" />
      <meta name="description" content="Vaultix" />
      <link rel="icon" href={cmsFileUrl(siteSettings?.site_icon)} />
    </Head>
  );
}
