import Link from "next/link";
import Layout from "@/components/layout";

const OVERVIEW_STEPS = [
  { num: "01", title: "Store Encrypted Assets", desc: "Secure your critical data in a military-grade digital vault." },
  { num: "02", title: "Configure Monitoring", desc: "Set precise inactivity triggers and automated schedules." },
  { num: "03", title: "Automated Verification", desc: "Multi-layered confirmation protocols ensure accuracy." },
  { num: "04", title: "Beneficiary Activation", desc: "Protected release mechanisms only activate under verified conditions." },
  { num: "05", title: "Secure Legacy Transfer", desc: "End-to-end encrypted delivery of assets to designated heirs." },
];

const IconFeature = ({ icon, title, desc }) => (
  <div className="hiw_box_feat">
    <div className="hiw_box_icon">{icon}</div>
    <div>
      <p className="hiw_feat_title">{title}</p>
      <p className="hiw_feat_desc">{desc}</p>
    </div>
  </div>
);

const P5Feature = ({ icon, title, desc }) => (
  <div className="hiw_p5_feat">
    <div className="hiw_p5_head">
      {icon}
      <p className="hiw_feat_title">{title}</p>
    </div>
    <p className="hiw_feat_desc">{desc}</p>
  </div>
);

export default function HowItWorks() {
  return (
    <div className="hiw_page">

      {/* ── HERO ── */}
      <section className="hiw_hero">
        <div className="pg_contain">
          <div className="hiw_badge">How Vaultix Works</div>
          <h1>Secure Digital Legacy Protection</h1>
          <p>Vaultix securely stores encrypted digital assets and activates protected inheritance workflows only after verified inactivity and multi-stage confirmation processes.</p>
          <div className="hiw_hero_btns">
            <Link href="/dashboard" className="btn_gold">Create Secure Vault</Link>
            <Link href="/security" className="btn_ghost">Explore Security Architecture</Link>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="hiw_overview">
        <div className="pg_contain">
          <div className="sec_head hiw_sec_head">
            <h2>How the Vaultix Protection System Operates</h2>
            <p>A rigorous, multi-stage architecture designed for absolute security and guaranteed execution.</p>
          </div>
          <div className="hiw_steps">
            {OVERVIEW_STEPS.map((s) => (
              <div className="hiw_step" key={s.num}>
                <span className="hiw_step_num">{s.num}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE 01: Store Encrypted Assets ── */}
      <section className="hiw_phase">
        <div className="pg_contain">
          <div className="hiw_phase_wrap hiw_img_left">

            <div className="hiw_phase_img">
              <img src="/images/front-images/work-1.png" alt="Store Encrypted Assets" />
            </div>

            <div className="hiw_phase_text">
              <span className="hiw_phase_label">Phase &nbsp;01</span>
              <h3>Store Encrypted Assets</h3>
              <p className="hiw_phase_desc">Secure your critical data in a military-grade digital vault. Centralize and secure your most critical digital wealth and documentation within our impenetrable zero-knowledge architecture.</p>

              <div className="hiw_asset_grid">
                <div className="hiw_asset_item">
                  <div className="hiw_asset_icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      <circle cx="12" cy="14" r="2"/>
                    </svg>
                  </div>
                  <span>Crypto Wallets</span>
                </div>
                <div className="hiw_asset_item">
                  <div className="hiw_asset_icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <span>Legal Documents</span>
                </div>
                <div className="hiw_asset_item">
                  <div className="hiw_asset_icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
                      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                      <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
                      <circle cx="5" cy="12" r="1.5" fill="currentColor"/>
                      <circle cx="19" cy="12" r="1.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Credentials</span>
                </div>
                <div className="hiw_asset_item">
                  <div className="hiw_asset_icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                    </svg>
                  </div>
                  <span>Recovery Notes</span>
                </div>
              </div>

              <div className="hiw_quote_box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:2}}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <p>"All vault data is encrypted before storage and remains unreadable through zero-knowledge architecture. Not even Vaultix can access your asset."</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PHASE 02: Configure Monitoring ── */}
      <section className="hiw_phase hiw_phase_alt">
        <div className="pg_contain">
          <div className="hiw_phase_wrap hiw_img_right">

            <div className="hiw_phase_text">
              <span className="hiw_phase_label">Phase &nbsp;02</span>
              <h3>Configure Monitoring</h3>
              <p className="hiw_phase_desc">Set precise inactivity triggers and check-in schedules to establish a robust dead-man's switch tailored to your specific operational security needs.</p>
              <div className="hiw_feats">
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  }
                  title="Custom Inactivity Timers"
                  desc="Define precise periods of silence ranging from weeks to months before initiating secondary protocols."
                />
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 3 21 3 21 8"/>
                      <line x1="4" y1="20" x2="21" y2="3"/>
                      <polyline points="21 16 21 21 16 21"/>
                      <line x1="15" y1="15" x2="21" y2="21"/>
                    </svg>
                  }
                  title="Multi-Channel Check-ins"
                  desc="Establish passive monitoring via API integration or active monitoring via encrypted communication."
                />
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="2" x2="12" y2="6"/>
                      <line x1="12" y1="18" x2="12" y2="22"/>
                      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                      <line x1="2" y1="12" x2="6" y2="12"/>
                      <line x1="18" y1="12" x2="22" y2="12"/>
                      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
                    </svg>
                  }
                  title="Emergency Overrides"
                  desc="Configure trusted multi-signature contacts to accelerate or halt the process if necessary."
                />
              </div>
            </div>

            <div className="hiw_phase_img">
              <img src="/images/front-images/work-2.jpg" alt="Configure Monitoring" />
            </div>

          </div>
        </div>
      </section>

      {/* ── PHASE 03: Automated Verification ── */}
      <section className="hiw_phase">
        <div className="pg_contain">
          <div className="hiw_phase_wrap hiw_img_left">

            <div className="hiw_phase_img">
              <img src="/images/front-images/work-3.png" alt="Automated Verification" />
            </div>

            <div className="hiw_phase_text">
              <span className="hiw_phase_label">Phase &nbsp;03</span>
              <h3>Automated Verification</h3>
              <p className="hiw_phase_desc">Multi-layered confirmation protocols ensure accuracy. Our system employs continuous identity confirmation to prevent accidental triggers.</p>
              <div className="hiw_feats">
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 4 1 10 7 10"/>
                      <path d="M3.51 15a9 9 0 1 0 .49-3"/>
                    </svg>
                  }
                  title="Continuous Identity Confirmation"
                  desc="Periodic pings require simple biometric or cryptographic acknowledgment to confirm status."
                />
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                  }
                  title="Escalating Reminders"
                  desc="Multiple communication channels are systematically utilized before officially declaring inactivity."
                />
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  }
                  title="Fail-Safe Mechanisms"
                  desc="No immediate activation; extended grace periods and multi-party veto options exist to prevent erroneous triggers."
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PHASE 04: Beneficiary Activation ── */}
      <section className="hiw_phase hiw_phase_alt">
        <div className="pg_contain">
          <div className="hiw_phase_wrap hiw_img_right">

            <div className="hiw_phase_text">
              <span className="hiw_phase_label">Phase &nbsp;04</span>
              <h3>Beneficiary Activation</h3>
              <p className="hiw_phase_desc">Protected release sequences initiate upon verified conditions, shifting the protocol from holding to active execution while maintaining absolute cryptographic integrity.</p>
              <div className="hiw_feats">
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <circle cx="12" cy="11" r="2"/>
                      <path d="M12 13v3"/>
                    </svg>
                  }
                  title="Secure Identity Proofing"
                  desc="Beneficiaries undergo rigorous KYC and cryptographic verification before being granted system access."
                />
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                  }
                  title="Phased Rollout"
                  desc="Assets can be distributed in predefined tranches rather than a single massive release."
                />
                <IconFeature
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h14l-1.5 7H6.5L5 3z"/>
                      <path d="M6.5 10l-1.5 7h14l-1.5-7"/>
                      <line x1="12" y1="10" x2="12" y2="17"/>
                    </svg>
                  }
                  title="Time-Locked Sequences"
                  desc="Execution follows your exact temporal instructions, ensuring assets arrive exactly when intended."
                />
              </div>
            </div>

            <div className="hiw_phase_img">
              <img src="/images/front-images/work-4.png" alt="Beneficiary Activation" />
            </div>

          </div>
        </div>
      </section>

      {/* ── PHASE 05: Secure Legacy Transfer ── */}
      <section className="hiw_phase">
        <div className="pg_contain">
          <div className="hiw_phase_wrap hiw_img_left">

            <div className="hiw_phase_img">
              <img src="/images/front-images/work-5.png" alt="Secure Legacy Transfer" />
            </div>

            <div className="hiw_phase_text">
              <span className="hiw_phase_label">Phase &nbsp;05</span>
              <h3>Secure Legacy Transfer</h3>
              <p className="hiw_phase_desc">End-to-end encrypted delivery of assets to designated heirs. The final phase executes the precise release of information to authorized beneficiaries through secure, ephemeral channels.</p>
              <div className="hiw_p5_feats">
                <P5Feature
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  }
                  title="Secure Access Links"
                  desc="Beneficiaries receive time-sensitive, single-use access links requiring secondary authentication."
                />
                <P5Feature
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="11" width="14" height="10" rx="2"/>
                      <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                    </svg>
                  }
                  title="Encrypted Release"
                  desc="Assets are decrypted client-side only upon successful identity verification by the beneficiary."
                />
                <P5Feature
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/>
                      <path d="M17 14v7m-3.5-3.5h7"/>
                    </svg>
                  }
                  title="Data Erasure Option"
                  desc="Option for beneficiaries to permanently delete all retrieved data from Vaultix servers upon completion."
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta_section">
        <img src="/images/front-images/cta-bg.png" alt="" className="cta_bg_img" />
        <img src="/images/front-images/cta-gradient.png" alt="" className="cta_grad_img" />
        <div className="pg_contain">
          <div className="cta_ico">
            <img src="/images/front-images/cta-icon.png" alt="" />
          </div>
          <h2>Secure Your Digital Legacy<br />Today</h2>
          <p>Begin protecting your assets with institutional-grade security. Setup takes minutes, protection lasts generations.</p>
          <div className="cta_btns">
            <Link href="/dashboard" className="btn_gold">Create Vault</Link>
            <Link href="/security" className="btn_ghost">View Security Architecture</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

HowItWorks.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
