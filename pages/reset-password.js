import { useState } from "react";
import Link from "next/link";

const REQUIREMENTS = [
  { label: "Minimum 12 characters",       met: true },
  { label: "At least one uppercase letter", met: false },
  { label: "At least one numeric digit",   met: false },
  { label: "At least one special character", met: false },
];

export default function ResetPassword() {
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="auth_page">

      <div className="auth_logo_wrap">
        <img src="/images/front-images/auth-logo.png" alt="Vaultix" className="auth_logo_img" />
        <span className="auth_logo_text">Vaultix</span>
      </div>

      <div className="auth_card">
        <div className="auth_card_body">

          <h1 className="auth_title">Reset Secure Credentials</h1>
          <p className="auth_subtitle">Create a new password to restore protected vault access.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="auth_fields">

              <div className="auth_field">
                <label>New Password</label>
                <div className="auth_pw_wrap auth_pw_has_left_icon">
                  <svg className="auth_icon_left" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                  </svg>
                  <input
                    type={showNew ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                  <button type="button" className="auth_eye_btn" onClick={() => setShowNew((v) => !v)}>
                    {showNew ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="auth_field">
                <label>Confirm Password</label>
                <div className="auth_pw_wrap auth_pw_has_left_icon">
                  <svg className="auth_icon_left" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="5" y="11" width="14" height="10" rx="2"/>
                    <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                  </svg>
                  <input
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                </div>
              </div>

            </div>

            {/* Password requirements */}
            <div className="auth_pw_reqs" style={{ marginBottom: "20px" }}>
              <p className="auth_pw_reqs_title">Password Requirements</p>
              <div className="auth_req_rows">
                {REQUIREMENTS.map((req) => (
                  <div key={req.label} className={`auth_req_row${req.met ? " met" : ""}`}>
                    <div className="auth_req_circle">
                      {req.met && (
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                    </div>
                    <span>{req.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="auth_btn">
              Update Secure Password
            </button>
          </form>

          <button className="auth_link_btn_center" onClick={() => {}}>
            Return to Sign In
          </button>

        </div>
      </div>

    </div>
  );
}

ResetPassword.getLayout = (page) => page;
