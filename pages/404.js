import Link from "next/link";
import Layout from "@/components/layout";

export default function NotFound() {
  const timestamp = "2026-05-20  12:49:06  UTC";

  return (
    <div className="err_page">
      <div className="err_inner">

        {/* Warning triangle icon */}
        <div className="err_icon_wrap">
          <svg width="72" height="64" viewBox="0 0 72 64" fill="none">
            <path d="M36 2L70 62H2L36 2Z" fill="#E07B6A" fillOpacity="0.88"/>
            <text x="36" y="50" textAnchor="middle" fill="#0E1012" fontSize="28" fontWeight="bold" fontFamily="serif">!</text>
          </svg>
        </div>

        <h1 className="err_heading">Secure Route Not Found</h1>
        <p className="err_sub">The requested destination could not be verified or may no longer<br className="err_br" /> be accessible within the Vaultix infrastructure.</p>

        {/* Status info table */}
        <div className="err_info_card">
          <div className="err_info_row">
            <span className="err_info_label">Status</span>
            <span className="err_info_val err_info_val_err">ERR_CONNECTION_REFUSED</span>
          </div>
          <div className="err_info_row">
            <span className="err_info_label">Protocol</span>
            <span className="err_info_val">VTX-SEC-4</span>
          </div>
          <div className="err_info_row">
            <span className="err_info_label">Timestamp</span>
            <span className="err_info_val">{timestamp}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="err_btns">
          <Link href="/" className="err_btn_gold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Return to Homepage
          </Link>
          <Link href="/dashboard" className="err_btn_ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
            </svg>
            Access Secure Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}

NotFound.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
