import Link from "next/link";
import React from "react";
import Text from "./text";

export default function Footer({ siteSettings }) {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="site_footer">
      <div className="pg_contain">
        <div className="footer_inner">
          <Link href="/" className="footer_brand">
            {siteSettings?.site_name}
          </Link>

          <div className="footer_copy">
            <p>
              © {year}, {siteSettings?.site_name} {siteSettings?.site_copyright}
            </p>
          </div>

          <div className="footer_links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
