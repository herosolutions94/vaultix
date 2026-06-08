import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="auth_page">

      <div className="auth_logo_wrap">
        <img src="/images/front-images/auth-logo.png" alt="Vaultix" className="auth_logo_img" />
        <span className="auth_logo_text">Vaultix</span>
      </div>

      <div className="auth_card">
        <div className="auth_card_body">

          <h1 className="auth_title">Access Your Secure Vault</h1>
          <p className="auth_subtitle">Secure authentication required for private wealth management</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="auth_fields">

              <div className="auth_field">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" autoComplete="email" />
              </div>

              <div className="auth_field">
                <label>Security Key</label>
                <div className="auth_pw_wrap">
                  <input
                    type={showPw ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="auth_eye_btn"
                    onClick={() => setShowPw((v) => !v)}
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    {showPw ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

            </div>

            <div className="auth_forgot_row">
              <Link href="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="auth_btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="5" y="11" width="14" height="10" rx="2"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
              </svg>
              Secure Login
            </button>
          </form>

          <div className="auth_link_row">
            Don&apos;t have a vault?{" "}
            <Link href="/register">Initialize Vault</Link>
          </div>

        </div>
      </div>

    </div>
  );
}

Login.getLayout = (page) => page;
