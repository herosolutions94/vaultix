import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";

const FAQ_SECTIONS = [
  {
    id: "cryptographic",
    icon: "/images/front-images/faq-icon1.png",
    title: "Cryptographic Standards",
    items: [
      {
        q: "How is Zero-Knowledge Proof (ZKP) utilized?",
        a: "Vaultix employs advanced zero-knowledge proofs to authenticate transactions and verify identity without ever exposing the underlying sensitive data to our servers.",
        code: "Protocol: ZK-SNARKs | Curve: BLS12-381",
      },
      {
        q: "What encryption standards protect at-rest data?",
        a: "All institutional data and key shards are encrypted using AES-256-GCM. Master keys are secured within FIPS 140-2 Level 4 certified Hardware Security Modules (HSMs) distributed across geopolitically secure jurisdictions.",
      },
    ],
  },
  {
    id: "custody",
    icon: "/images/front-images/faq-icon2.png",
    title: "Custody Protocol",
    items: [
      {
        q: "What is the Multi-Party Computation (MPC) quorum?",
        a: "Our custody model utilizes a strict 3-of-5 MPC threshold. Transactions require independent authorization from geographically isolated nodes, ensuring no single point of failure or centralized compromise is possible.",
      },
    ],
  },
  {
    id: "succession",
    icon: "/images/front-images/faq-icon3.png",
    title: "Succession & Inheritance",
    items: [
      {
        q: "How does multi-step inheritance function?",
        a: "The Vaultix succession protocol is a multi-step cryptographic release mechanism. It requires time-locked dead-man switches, verified biometric confirmation from designated legal fiduciaries, and a multi-sig approval from the estate's predefined institutional quorum before asset migration is initiated.",
      },
    ],
  },
];

const NAV_LINKS = [
  { id: "cryptographic", label: "Cryptographic Standards" },
  { id: "custody",       label: "Custody Protocol" },
  { id: "succession",    label: "Succession & Inheritance" },
];

export default function FAQ() {
  const [active, setActive] = useState("cryptographic");

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="faq_page">

      {/* ── HERO ── */}
      <section className="fq_hero">
        <div className="pg_contain">
          <div className="fq_hero_wrap">

            <div className="fq_hero_left">
              <div className="fq_badge">Help Center</div>
              <h1>Security, Encryption &amp; Inheritance &mdash; Explained</h1>
              <p>Detailed insights into Vaultix's zero-knowledge architecture, military-grade encryption protocols, and our proprietary digital inheritance system designed for absolute asset preservation.</p>
              <div className="fq_search_wrap">
                <svg className="fq_search_icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  type="text"
                  className="fq_search_input"
                  placeholder="Search security, encryption, or inheritance topics..."
                />
              </div>
            </div>

            <div className="fq_hero_right">
              <img src="/images/front-images/faq-hero.png" alt="Vaultix FAQ" />
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ BODY ── */}
      <section className="fq_body">
        <div className="pg_contain">
          <div className="fq_body_wrap">

            {/* Sidebar */}
            <aside className="fq_sidebar">
              <p className="fq_sidebar_label">System Pillars</p>
              <nav className="fq_nav">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    className={`fq_nav_link${active === link.id ? " fq_nav_active" : ""}`}
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="fq_content">
              {FAQ_SECTIONS.map((sec) => (
                <div className="fq_section" id={sec.id} key={sec.id}>
                  <div className="fq_sec_header">
                    <img src={sec.icon} alt={sec.title} className="fq_sec_icon" />
                    <h2>{sec.title}</h2>
                  </div>
                  <div className="fq_items">
                    {sec.items.map((item, i) => (
                      <div className="fq_item" key={i}>
                        <h3>{item.q}</h3>
                        <p>{item.a}</p>
                        {item.code && (
                          <div className="fq_code">{item.code}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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

FAQ.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
