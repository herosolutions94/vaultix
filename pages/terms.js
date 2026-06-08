import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";

const NAV_ITEMS = [
  { id: "terms-acceptance",       label: "Acceptance of Terms" },
  { id: "vault-responsibilities", label: "Vault Responsibilities" },
  { id: "user-obligations",       label: "User Obligations" },
  { id: "encryption-security",    label: "Encryption & Security" },
  { id: "inheritance-workflow",   label: "Inheritance Workflow" },
  { id: "beneficiary-access",     label: "Beneficiary Access" },
  { id: "account-security",       label: "Account Security" },
];

const WORKFLOW_STEPS = [
  {
    num: "1",
    title: "Trigger Activation",
    desc: "User account registers complete cryptographic inactivity beyond the predefined temporal threshold (e.g., 90, 180, or 365 days).",
  },
  {
    num: "2",
    title: "Verification Phase",
    desc: "A mandatory grace period (typically 14–30 days) commences. High-priority, multi-channel alerts are broadcast to the primary User to halt the process if erroneously triggered.",
  },
  {
    num: "3",
    title: "Protocol Execution",
    desc: "Smart contracts execute irrevocably, releasing segmented decryption shards to pre-verified legacy beneficiaries, enabling controlled asset reconstruction.",
  },
];

export default function Terms() {
  const [activeNav, setActiveNav] = useState("terms-acceptance");

  const scrollTo = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="terms_page">

      {/* ── HERO ── */}
      <section className="tc_hero">
        <div className="pg_contain">
          <div className="tc_hero_wrap">

            <div className="tc_hero_left">
              <span className="tc_badge">Legal Framework 2024.1</span>
              <h1>
                Terms &amp; Conditions of{" "}
                <span className="tc_gold">Secure Vault Usage</span>
              </h1>
              <p>These terms define the secure usage, responsibilities, inheritance workflows, and encrypted infrastructure policies governing the Vaultix platform.</p>
            </div>

            <div className="tc_hero_right">
              <img
                src="/images/front-images/vaultix-infrastructure-bg.png"
                alt="Secure Vault Infrastructure"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── BODY: sidebar + sections ── */}
      <section className="tc_body">
        <div className="pg_contain">
          <div className="tc_body_wrap">

            {/* Sidebar */}
            <aside className="tc_sidebar">
              <p className="tc_sidebar_label">Document Index</p>
              <nav className="tc_nav">
                {NAV_ITEMS.map((item, i) => (
                  <button
                    key={item.id}
                    className={`tc_nav_link${activeNav === item.id ? " tc_nav_active" : ""}`}
                    onClick={() => scrollTo(item.id)}
                  >
                    {i + 1}. {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="tc_content">

              {/* 01 */}
              <div className="tc_section" id="terms-acceptance">
                <div className="tc_sec_head">
                  <span className="tc_sec_num">01.</span>
                  <h2>Acceptance of Terms</h2>
                </div>
                <p>By registering, accessing, or using the Vaultix platform ("Service"), you ("User") explicitly agree to be bound by these comprehensive Terms and Conditions. The Service is engineered exclusively for decentralized, encrypted digital custody. Your continuous usage implies consent to our zero-knowledge protocols, meaning it is physically impossible for us to retrieve, decrypt, or access your stored assets. If you do not accept these fundamental constraints, you must terminate your registration immediately.</p>
              </div>

              {/* 02 */}
              <div className="tc_section" id="vault-responsibilities">
                <div className="tc_sec_head">
                  <span className="tc_sec_num">02.</span>
                  <h2>Vault Responsibilities</h2>
                </div>
                <p>Vaultix commits to maintaining robust, highly available infrastructure designed to ensure continuous access to the Service. Our operational mandate includes securing the underlying decentralized network nodes, executing smart contract functions reliably, and deploying regular cryptographic security patches.</p>

                <div className="tc_alert_box">
                  <div className="tc_alert_head">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="none">
                      <path fill="#E9C176" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13" stroke="#0E1012" strokeWidth="2.2" strokeLinecap="round"/>
                      <line x1="12" y1="17" x2="12.01" y2="17" stroke="#0E1012" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    <span>Zero-Knowledge Architecture Constraint</span>
                  </div>
                  <p className="tc_alert_em">Vaultix cannot access encrypted vault content under any circumstance.</p>
                  <p>We do not store, log, or transmit your master password, recovery phrases, or private decryption keys. Loss of these critical credentials results in permanent, mathematically unrecoverable data loss. Vaultix fundamentally disclaims any liability for assets lost due to credential mismanagement by the User.</p>
                </div>
              </div>

              {/* 03 */}
              <div className="tc_section" id="user-obligations">
                <div className="tc_sec_head">
                  <span className="tc_sec_num">03.</span>
                  <h2>User Obligations</h2>
                </div>
                <p>Users are strictly obligated to maintain the absolute secrecy of their cryptographic credentials. You must provide legally verifiable identity documentation when designating beneficiaries to satisfy Know Your Customer (KYC) requirements inherited by our smart contracts. Furthermore, the User agrees not to store illicit, illegal, or heavily sanctioned materials within the Vault, despite our inability to view the contents, to ensure compliance with international network usage laws.</p>
              </div>

              {/* 04 */}
              <div className="tc_section" id="encryption-security">
                <div className="tc_sec_head">
                  <span className="tc_sec_num">04.</span>
                  <h2>Encryption &amp; Security Standards</h2>
                </div>
                <p>Vaultix employs industry-leading cryptographic standards. All data at rest is symmetrically encrypted utilizing the AES-256-GCM cipher. Data traversing between your localized device and our distributed storage nodes is secured via TLS 1.3 protocols. Crucially, all encryption, decryption, and key derivation (via PBKDF2 or Argon2) occur entirely client-side. The network only ever processes obfuscated ciphertext blocks.</p>
                <div className="tc_img_block">
                  <img src="/images/front-images/enterprise-grade-compliance.png" alt="Client-Side Encryption Architecture" />
                  <p className="tc_img_caption">FIG 4.1 — CLIENT-SIDE ENCRYPTION ARCHITECTURE</p>
                </div>
              </div>

              {/* 05 */}
              <div className="tc_section" id="inheritance-workflow">
                <div className="tc_sec_head">
                  <span className="tc_sec_num">05.</span>
                  <h2>Inheritance Workflow Policies</h2>
                </div>
                <p>The 'Dead Man's Switch' protocol is an automated, immutable smart contract execution designed for legacy transfer. It operates by monitoring account activity thresholds defined by the User. Upon crossing the definitive inactivity trigger, the system engages a rigid, multi-stage verification process before transferring encrypted access shards to designated beneficiaries.</p>

                <div className="tc_workflow">
                  {WORKFLOW_STEPS.map((step, i) => (
                    <div className="tc_wf_step" key={step.num}>
                      <div className="tc_wf_left">
                        <div className="tc_wf_circle">{step.num}</div>
                        {i < WORKFLOW_STEPS.length - 1 && <div className="tc_wf_line" />}
                      </div>
                      <div className="tc_wf_text">
                        <p className="tc_wf_title">{step.title}</p>
                        <p className="tc_wf_desc">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 */}
              <div className="tc_section" id="beneficiary-access">
                <div className="tc_sec_head">
                  <span className="tc_sec_num">06.</span>
                  <h2>Beneficiary Access</h2>
                </div>
                <p>Upon successful execution of the inheritance protocol, designated beneficiaries are granted precise, predetermined security keys, as originally engineered by the original Vault owner. Beneficiaries must complete stringent biometric and legal identity verification to reconstruct their access shards. The system strictly enforces the access limitations set by the User — whether granting full administrative custody or restricted, read-only extraction privileges to specific document nodes.</p>
              </div>

              {/* 07 */}
              <div className="tc_section" id="account-security">
                <div className="tc_sec_head">
                  <span className="tc_sec_num">07.</span>
                  <h2>Account Security</h2>
                </div>
                <p>Uncompromising security is required at the user level. Hardware-based Multi-Factor Authentication (MFA), such as FIDO2 security keys, is strictly mandated for all Vaultix access points. Sessions are automatically terminated following brief periods of localized inactivity. You bear the absolute, legally binding responsibility for securely managing your Master Password, physical security keys, and emergency recovery documents in geographically redundant, physically secure locations.</p>
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

Terms.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
