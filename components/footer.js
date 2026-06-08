import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="site_footer">
      <div className="pg_contain">
        <div className="footer_inner">

          <Link href="/" className="footer_brand">
            Vaultix
          </Link>

          <div className="footer_copy">
            <p>
              © 2026 Vaultix Digital Custody. All data is end-to-end encrypted and inaccessible to Vaultix or any third party.
            </p>
          </div>

          <div className="footer_links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/compliance">Compliance</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
