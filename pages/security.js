import Link from "next/link";
import Layout from "@/components/layout";

const AUDIT_LOGS = [
  { time: "14:02:11", before: "Login successful via ", highlight: "Admin_Terminal_04", after: "" },
  { time: "13:58:45", before: "Document ", highlight: "Estate_Deed_02.pdf", after: " accessed for viewing" },
  { time: "12:44:02", before: "Periodic system integrity scan completed", highlight: "", after: "" },
];

const PROTOCOL_STEPS = [
  { num: "1", title: "Inactivity Detection", desc: "User-defined timer expires without check-in." },
  { num: "2", title: "Verification", desc: "Multiple proof-of-life attempts via secured channels." },
  { num: "3", title: "Identity Confirmation", desc: "Beneficiary submits cryptographic identity proof." },
  { num: "4", title: "Beneficiary Approval", desc: "Institution confirms beneficiary legal standing." },
  { num: "5", title: "Asset Transfer", desc: "Encrypted vault shard is re-assembled for access.", active: true },
];

const PILLARS = [
  {
    icon: "/images/front-images/pillar-icon1.png",
    title: "End-to-End Encryption",
    desc: "Military-grade AES-256 encryption at rest and in transit, ensuring data remains unreadable without valid credentials.",
  },
  {
    icon: "/images/front-images/pillar-icon2.png",
    title: "Zero-Knowledge Architecture",
    desc: "Vaultix never has access to your private keys. Your data is encrypted locally before it ever reaches our servers.",
  },
  {
    icon: "/images/front-images/pillar-icon3.png",
    title: "User-Controlled Keys",
    desc: "Complete sovereign control over the master key that unlocks your digital vault.",
  },
  {
    icon: "/images/front-images/pillar-icon4.png",
    title: "Immutable Audit Logging",
    desc: "Every access attempt is recorded on a tamper-proof immutable ledger, providing a permanent, tamper-proof log for compliance.",
  },
  {
    icon: "/images/front-images/pillar-icon5.png",
    title: "Multi-Layer Verification",
    desc: "Cascading authentication, including biometrics and hardware tokens to ensure no high-value transaction goes unverified.",
  },
  {
    icon: "/images/front-images/pillar-icon6.png",
    title: "Secure Inheritance Activation",
    desc: "Systematically monitors inactivity triggers, encrypted asset transfers to verified beneficiaries upon approval.",
  },
];

const INFRA_LAYERS = [
  { label: "LAYER 01", title: "Client-Side Encryption Engine" },
  { label: "LAYER 02", title: "HSM-Backed Key Management" },
  { label: "LAYER 03", title: "Biometric Identity Shield" },
];

const INVISIBLE_STATS = [
  { badge: "ACTIVE",    val: "256-bit", label: "Global Encryption Standard" },
  { badge: "ENABLED",   val: "Zero",    label: "Knowledge Platform Architecture" },
  { badge: "COMPLIANT", val: "SEC",     label: "Registered & Regulated" },
  { badge: "STABLE",    val: "99.99%",  label: "Infrastructure Uptime" },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Inactivity Detection",
    desc: "User-defined heartbeat timer elapses.",
  },
  {
    num: "02",
    title: "Multi-Point Verification",
    desc: "System sends alerts across multiple channels.",
  },
  {
    num: "03",
    title: "Identity Confirmation",
    desc: "Beneficiaries provide biometric and legal proof.",
  },
  {
    num: "04",
    title: "Beneficiary Approval",
    desc: "Pre-designated witnesses approve the trigger.",
  },
  {
    num: "05",
    title: "Asset Transfer",
    desc: "Automatic decryption and transfer of vault assets.",
  },
];

export default function Security() {
  return (
    <div className="security_page">

      {/* ── HERO ── */}
      <section className="sec_hero">
        {/* Full-width background chip image */}
        <img src="/images/front-images/security-hero-bg.png" alt="" className="sec_hero_bg" />
        {/* Left gradient overlay so text stays readable */}
        <div className="sec_hero_overlay" />

        <div className="pg_contain">
          <div className="sec_hero_wrap">

            <div className="sec_hero_left">
              <div className="sec_badge">Security Architecture</div>
              <h1>End-to-End Encryption Built into Every Layer</h1>
              <p>Vaultix is engineered with zero-knowledge architecture, encrypted infrastructure, and multi-layer verification systems to ensure your digital legacy remains fully protected.</p>
              <div className="sec_hero_btns">
                <Link href="/dashboard" className="btn_gold">Institutional Access</Link>
                <Link href="#specs" className="btn_ghost">Technical Specs</Link>
              </div>
            </div>

            {/* Terminal card floating on the right */}
            <div className="sec_hero_right">
              <div className="sec_hero_card">

                <div className="shc_header">
                  <span className="shc_label">ACTIVE_SHIELD_V4.2</span>
                  <div className="shc_shield">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                </div>

                <div className="shc_progress_bar" />

                <div className="shc_blocks">
                  <div className="shc_block" />
                  <div className="shc_block shc_block_active" />
                  <div className="shc_block" />
                </div>

                <div className="shc_footer">
                  <p className="shc_line"><span className="shc_key">ENCRYPTION_LAYER:</span><span className="shc_val"> AES-256-GCM</span></p>
                  <p className="shc_line"><span className="shc_key">STATUS:</span><span className="shc_val"> COMPROMISE_PROTECTION_ENABLED</span></p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IMMUTABLE AUDIT TRAILS ── */}
      <section className="sec_audit">
        <div className="pg_contain">
          <div className="sec_audit_header">
            <div className="sec_audit_hd_left">
              <h2>Immutable Audit Trails</h2>
              <p>Real-time system event monitoring and verification.</p>
            </div>
            <button className="sec_export_btn">Export Ledger</button>
          </div>
          <div className="sec_audit_card">
            {AUDIT_LOGS.map((log, i) => (
              <div className="sec_audit_row" key={i}>
                <div className="sar_icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="rgba(16,185,129,0.12)" stroke="#10B981" strokeWidth="1.5"/>
                    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="sar_time">{log.time}</div>
                <div className="sar_event">
                  {log.before}
                  {log.highlight && <span className="sar_hl">{log.highlight}</span>}
                  {log.after}
                </div>
                <div className="sar_badge">VERIFIED</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTOMATED INHERITANCE PROTOCOL ── */}
      <section className="sec_auto_proto">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>The Automated Inheritance Protocol</h2>
            <p>A fail-safe mechanism for the secure transfer of digital assets.</p>
          </div>
          <div className="sap_timeline">
            {PROTOCOL_STEPS.map((step, i) => (
              <div className="sap_step" key={step.num}>
                <div className="sap_connector">
                  {i > 0 && <span className="sap_line" />}
                  <div className={`sap_box${step.active ? " sap_box_active" : ""}`}>
                    <span>{step.num}</span>
                  </div>
                  {i < PROTOCOL_STEPS.length - 1 && <span className="sap_line" />}
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADAPTIVE MFA ── */}
      <section className="sec_mfa">
        <div className="pg_contain">
          <div className="sec_mfa_wrap">

            {/* Left: MFA card mockup */}
            <div className="sec_mfa_left">
              <div className="mfa_card">

                {/* Card header: fingerprint icon + title + step */}
                <div className="mfa_card_header">
                  <div className="mfa_icon_box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M12 1C8.5 1 5.5 3.5 5.5 7c0 3 1 5.5 2.5 7.5"/>
                      <path d="M12 1c3.5 0 6.5 2.5 6.5 6 0 3-1 5.5-2.5 7.5"/>
                      <path d="M8 7c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.5-.5 5-1.5 7"/>
                      <path d="M12 7v4"/>
                      <path d="M10 17c.5 1.5 1.2 3 2 4"/>
                      <path d="M8 21c-.5-1.5-1-3.5-1-5.5"/>
                      <path d="M16 21c.5-2 .5-4 0-6"/>
                    </svg>
                  </div>
                  <div className="mfa_header_text">
                    <span className="mfa_title">Biometric Authentication</span>
                    <span className="mfa_sub">Step 2 of 3 &bull; Secure Session</span>
                  </div>
                </div>

                {/* Three authentication rows */}
                <div className="mfa_rows">

                  {/* Row 1: Completed */}
                  <div className="mfa_row mfa_row_done">
                    <span className="mfa_dot mfa_dot_gold" />
                    <span className="mfa_row_label">YubiKey Hardware Token</span>
                    <div className="mfa_row_status">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11" stroke="#10B981" strokeWidth="1.5"/>
                        <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Row 2: In progress — gold-tinted active row */}
                  <div className="mfa_row mfa_row_active">
                    <span className="mfa_dot mfa_dot_gold" />
                    <span className="mfa_row_label">Awaiting Biometric Prompt...</span>
                    <div className="mfa_row_status">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11" stroke="#E9C176" strokeWidth="1.5"/>
                        <circle cx="9" cy="12" r="1.2" fill="#E9C176"/>
                        <circle cx="12" cy="12" r="1.2" fill="#E9C176"/>
                        <circle cx="15" cy="12" r="1.2" fill="#E9C176"/>
                      </svg>
                    </div>
                  </div>

                  {/* Row 3: Pending */}
                  <div className="mfa_row mfa_row_idle">
                    <span className="mfa_dot mfa_dot_idle" />
                    <span className="mfa_row_label">IP Verification</span>
                    <div className="mfa_row_status">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,239,239,0.3)" strokeWidth="1.6" strokeLinecap="round">
                        <rect x="5" y="11" width="14" height="10" rx="2"/>
                        <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right: text + features */}
            <div className="sec_mfa_right">
              <h2>Adaptive Multi-Factor Authentication</h2>
              <p>Our MFA system adapts to your security profile. For high-value transactions or sensitive document access, Vaultix triggers hardware-based challenges and biometric verification.</p>
              <ul className="mfa_features">
                <li>
                  <div className="mfa_feat_icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <polyline points="9 12 11 14 15 10"/>
                    </svg>
                  </div>
                  <div className="mfa_feat_text">
                    <strong>FIDO2 / WebAuthn Support</strong>
                    <span>Support for YubiKey and Titan security keys.</span>
                  </div>
                </li>
                <li>
                  <div className="mfa_feat_icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <polyline points="9 12 11 14 15 10"/>
                    </svg>
                  </div>
                  <div className="mfa_feat_text">
                    <strong>Geofencing &amp; IP Whitelisting</strong>
                    <span>Restricted access from approved institutional locations only.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL SECURITY PILLARS ── */}
      <section className="sec_pillars" id="specs">
        <div className="pg_contain">
          <h2 className="sec_pillars_heading">Institutional Security Pillars</h2>
          <div className="sec_pillars_grid">
            {PILLARS.map((p) => (
              <div className="sp_card" key={p.title}>
                <div className="sp_icon">
                  <img src={p.icon} alt={p.title} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENCRYPTION INFRASTRUCTURE ── */}
      <section className="sec_infra">
        <div className="pg_contain">
          <div className="sec_infra_head">
            <h2>Vaultix Encryption Infrastructure</h2>
            <p>Our deep-layered defense strategy combines client-side encryption with secure hardware modules and biometric identity management.</p>
          </div>
        </div>
        <div className="sec_infra_visual">
          <img src="/images/front-images/vaultix-encryption-infrastructure.png" alt="Vaultix Infrastructure" className="infra_bg_img" />
          <div className="infra_overlay" />
          <div className="pg_contain infra_layers_wrap">
            <div className="infra_layers">
              {INFRA_LAYERS.map((l) => (
                <div className="infra_layer" key={l.label}>
                  <span className="infra_layer_num">{l.label}</span>
                  <span className="infra_layer_title">{l.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUR VAULT IS INVISIBLE ── */}
      <section className="sec_invisible">
        <div className="pg_contain">
          <div className="si_icon">
            <svg width="38" height="42" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 1L2 8v13c0 11.25 7.25 21.75 17 24.5C28.75 42.75 36 32.25 36 21V8L19 1z" fill="rgba(233,193,118,0.15)" stroke="#E9C176" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M19 1L36 8v13c0 11.25-7.25 21.75-17 24.5V1z" fill="#E9C176" opacity="0.35"/>
              <path d="M12 23l5 5 9-10" stroke="#E9C176" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Your Vault is Invisible to Vaultix</h2>
          <p>We have architected our platform so that we physically cannot access your information. Your passwords and keys never leave your device in unencrypted form. Even under subpoena, Vaultix can only provide an encrypted blob—unreadable to anyone but you.</p>
        </div>
      </section>

      {/* ── PROTECTED WORKFLOW ── */}
      <section className="sec_workflow">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>Protected Inheritance Activation Workflow</h2>
            <p>A fail-safe mechanism designed for generational transfer.</p>
          </div>
          {/* 5 step cards */}
          <div className="sw_steps">
            {WORKFLOW_STEPS.map((step) => (
              <div className="sw_step" key={step.num}>
                <div className="sw_step_num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* 4 stat cards */}
          <div className="sw_stats">
            {INVISIBLE_STATS.map((s) => (
              <div className="sw_stat" key={s.val}>
                <div className="sw_stat_badge">
                  <span className="sw_stat_dot" />
                  <span className="sw_badge_text">{s.badge}</span>
                </div>
                <span className="sw_stat_val">{s.val}</span>
                <span className="sw_stat_label">{s.label}</span>
              </div>
            ))}
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

Security.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
