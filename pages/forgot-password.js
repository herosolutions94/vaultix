import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="auth_page">

      <div className="auth_logo_wrap">
        <img src="/images/front-images/auth-logo.png" alt="Vaultix" className="auth_logo_img" />
        <span className="auth_logo_text">Vaultix</span>
      </div>

      <div className="auth_card">
        <div className="auth_card_body">

          <h1 className="auth_title">Recover Vault Access</h1>
          <p className="auth_subtitle">Begin the secure recovery process through verified account authentication.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="auth_fields">
              <div className="auth_field">
                <label>Email Address / Vault ID</label>
                <input type="text" placeholder="Enter Credentials" autoComplete="email" />
              </div>
            </div>

            <button type="submit" className="auth_btn" style={{ letterSpacing: "0.06em" }}>
              Send Recovery Instructions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>

          <div className="auth_divider" />

          <div className="auth_sec_info">
            <div className="auth_sec_badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Institutional Grade Security
            </div>
            <p>Recovery requests are encrypted,<br />monitored, and verification<br />protected.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

ForgotPassword.getLayout = (page) => page;
