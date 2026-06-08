import { useRef, useState } from "react";

const STATUS_ROWS = [
  { label: "Device Verified",                  active: true  },
  { label: "Encrypted Authentication Channel", active: false },
  { label: "Session Protection Active",        active: false },
];

export default function MFA() {
  const [otp, setOtp] = useState(Array(7).fill(""));
  const refs = Array.from({ length: 7 }, () => useRef(null));

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val.slice(-1);
    setOtp(next);
    if (val && i < 6) {
      refs[i === 3 ? 4 : i + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      refs[i === 4 ? 3 : i - 1]?.current?.focus();
    }
  };

  return (
    <div className="auth_page">

      <div className="auth_logo_wrap">
        <img src="/images/front-images/auth-logo.png" alt="Vaultix" className="auth_logo_img" />
        <span className="auth_logo_text">Vaultix</span>
      </div>

      <div className="auth_card">
        <div className="auth_card_body">

          <h1 className="auth_title">Identity Verification<br />Required</h1>
          <p className="auth_subtitle">Enter the verification code sent to your authorized device</p>

          {/* OTP: 4 boxes — dash — 3 boxes */}
          <div className="auth_otp_wrap">
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                ref={refs[i]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otp[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`auth_otp_input${i === 0 ? " auth_otp_first" : ""}`}
              />
            ))}
            <span className="auth_otp_dash">-</span>
            {[4, 5, 6].map((i) => (
              <input
                key={i}
                ref={refs[i]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otp[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="auth_otp_input"
              />
            ))}
          </div>

          {/* Status box */}
          <div className="auth_status_box">
            <div className="auth_status_header">
              <span className="auth_status_dot" />
              <span>Secure Channel Active</span>
            </div>
            <div className="auth_status_rows">
              {STATUS_ROWS.map((row) => (
                <div key={row.label} className="auth_status_row">
                  <div className={`auth_status_circle${row.active ? " active" : ""}`}>
                    {row.active && (
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </div>
                  <span>{row.label}</span>
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="auth_btn auth_btn_upper">
            Verify Identity
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          <div className="auth_link_row" style={{ marginTop: "14px" }}>
            <button className="auth_link_btn" type="button">Resend Code</button>
          </div>

        </div>
      </div>

    </div>
  );
}

MFA.getLayout = (page) => page;
