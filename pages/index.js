import Link from "next/link";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const FEATURES = [
  {
    icon: "/images/front-images/wealth-icon1.png",
    title: "Encrypted Digital Vault",
    desc: "Store cryptocurrency wallet phrases, API keys, and financial credentials in an impenetrable offline-first environment.",
  },
  {
    icon: "/images/front-images/wealth-icon2.png",
    title: "Inheritance Automation",
    desc: "Smart contract-powered transfer of assets to designated beneficiaries upon verification of predefined conditions.",
  },
  {
    icon: "/images/front-images/wealth-icon3.png",
    title: "Secure Document Storage",
    desc: "Zero-knowledge storage for wills, legal documents, and personal letters intended for future generations.",
  },
  {
    icon: "/images/front-images/wealth-icon4.png",
    title: "Beneficiary Management",
    desc: "Assign granular access rights and payout release schedules for multiple beneficiaries securely.",
  },
  {
    icon: "/images/front-images/wealth-icon5.png",
    title: "Activity-Based Trigger System",
    desc: "A robust \"Dead Man's Switch\" architecture that monitors your predefined digital footprint (email, app logins, on-chain activity) to detect inactivity and safely initiate the inheritance protocol without relying on third-party intervention.",
  },
];

const ZK_POINTS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="9" r="4" />
        <path d="M12 9h8M17 9v3" />
      </svg>
    ),
    title: "Client-Side Encryption",
    desc: "AES-256-GCM encryption occurs on your device before any data reaches our servers.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3C7.582 3 4 6.582 4 11M12 3c4.418 0 8 3.582 8 8M7.5 11c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5m-7 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5M11 11c0-.552.448-1 1-1s1 .448 1 1M8 16c0 2 1.5 4 4 5 2.5-1 4-3 4-5" />
      </svg>
    ),
    title: "Multi-Signature Access",
    desc: "Beneficiary claims require consensus and hardware-backed biometric verification.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 5v7c0 5 3.5 9.74 8 11 4.5-1.26 8-6 8-11V5l-8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Immutable Audit Logs",
    desc: "Every interaction with your vault is cryptographically signed and permanently recorded.",
  },
];

const CUSTODY_STEPS = [
  {
    icon: "/images/front-images/custody-icon1.png",
    title: "1. Store Assets",
    desc: "Upload sensitive data to your zero-knowledge vault. Data is encrypted client-side before transmission.",
    side: "left",
  },
  {
    icon: "/images/front-images/custody-icon2.png",
    title: "2. Assign Beneficiaries",
    desc: "Nominate trusted individuals. They receive secure, encrypted access credentials stored completely offline.",
    side: "right",
  },
  {
    icon: "/images/front-images/custody-icon3.png",
    title: "3. Define Triggers",
    desc: "Set the specific conditions (e.g., 6 months of absolute inactivity across all registered channels) that initiate the transfer.",
    side: "left",
  },
  {
    icon: "/images/front-images/custody-icon4.png",
    title: "4. Automated Execution",
    desc: "Upon trigger confirmation, decryption keys are safely distributed to verified beneficiaries according to your exact instructions.",
    side: "right",
  },
];

const COMPLIANCE_BADGES = [
  { icon: "/images/front-images/enterprise-icon1.png", name: "SOC 2 Type II", label: "Certified Secure" },
  { icon: "/images/front-images/enterprise-icon2.png", name: "GDPR", label: "Fully Compliant" },
  { icon: "/images/front-images/enterprise-icon3.png", name: "ISO 27001", label: "Information Security" },
  { icon: "/images/front-images/enterprise-icon4.png", name: "FIPS 140-2", label: "HSM Integration" },
];

const TESTIMONIALS = [
  {
    name: "Managing Partner",
    role: "Multi-Family Office, Geneva",
    quote: "\"The only custody solution that satisfies our family office's requirement for absolute zero-knowledge architecture combined with reliable inheritance automation.\"",
  },
  {
    name: "Early Investor",
    role: "Private Client",
    quote: "\"As someone heavily invested in digital assets, Vaultix provides the exact peace of mind I needed. The inactivity trigger system is flawless.\"",
  },
  {
    name: "Chief Security Officer",
    role: "Digital Asset Fund",
    quote: "\"A sophisticated technical achievement that solves the critical vulnerability in self-custody: what happens when you're gone.\"",
  },
];

const TRUST_BADGES = [
  { icon: "/images/front-images/trust-icon1.svg", label: "End-to-End Encryption" },
  { icon: "/images/front-images/trust-icon2.svg", label: "Private Key Ownership" },
  { icon: "/images/front-images/trust-icon3.svg", label: "Inactivity Triggers" },
  { icon: "/images/front-images/trust-icon4.svg", label: "Military-Grade Security" },
];

export default function Home() {
  return (
    <div className="home_page">

      {/* ── HERO ── */}
      <section className="hero_section">
        <img src="/images/front-images/gradient1.png" alt="" className="hero_grad hero_grad1" />
        <img src="/images/front-images/gradient2.png" alt="" className="hero_grad hero_grad2" />

        <div className="pg_contain">
          <div className="hero_main">
            <div className="hero_badge">
              <img src="/images/front-images/hero-icon1.svg" alt="" width="15" height="15" />
              Enterprise-Level Protection
            </div>

            <h1>Your Digital Legacy,<br />Secured for Generations</h1>

            <p className="hero_sub">
              Vaultix is an end-to-end encrypted digital vault for your assets,
              documents, and inheritance instructions — accessible only by you.
            </p>

            <div className="hero_btns">
              <Link href="/dashboard" className="btn_gold">Enter Secure Vault</Link>
              <Link href="/security" className="btn_ghost">Explore Security Model</Link>
            </div>
          </div>
        </div>

        <div className="hero_trust">
          <div className="pg_contain">
            {TRUST_BADGES.map((b, i) => (
              <div className="trust_item" key={b.label}>
                <img src={b.icon} alt={b.label} className="trust_icon_img" />
                <span>{b.label}</span>
                {i < TRUST_BADGES.length - 1 && <div className="trust_sep" />}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── FEATURES ── */}
      <section className="features_section">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>Premium Wealth Preservation</h2>
            <p>Comprehensive tools designed to protect, manage, and seamlessly transfer your most valuable digital assets.</p>
          </div>
          <div className="features_grid">
            {FEATURES.map((f, i) => (
              <div className={`feat_card${i === FEATURES.length - 1 ? " wide" : ""}`} key={f.title}>
                <div className="feat_icon_box">
                  <img src={f.icon} alt={f.title} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZERO KNOWLEDGE ── */}
      <section className="zk_section">
        <div className="pg_contain">
          <div className="zk_wrap">

            <div className="zk_left">
              <h2>Zero-Knowledge Architecture</h2>
              <p className="zk_desc">
                Vaultix is built on a fundamental principle: we cannot access your data.
                Our architecture ensures that your legacy remains exclusively in your control.
              </p>
              <ul className="zk_points">
                {ZK_POINTS.map((p) => (
                  <li key={p.title}>
                    <div className="pt_icon">{p.icon}</div>
                    <div className="pt_body">
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/how-it-works" className="btn_ghost">Explore How Vaultix Works</Link>
            </div>

            <div className="zk_right">
              <div className="zk_img_wrap">
                <img
                  src="/images/front-images/zero-knowledge-architecture.png"
                  alt="Zero Knowledge Architecture"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CUSTODY PROTOCOL ── */}
      <section className="custody_section">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>The Custody Protocol</h2>
            <p>A rigorous, fail-safe process ensuring your assets reach the right hands at the right time.</p>
          </div>

          <div className="custody_timeline">
            {CUSTODY_STEPS.map((step, i) => (
              <div key={step.title} className="cust_row">

                <div className="cust_left_col">
                  {step.side === "left" && (
                    <>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </>
                  )}
                </div>

                <div className="cust_mid">
                  <div className="c_icon_box">
                    <img src={step.icon} alt={step.title} />
                  </div>
                </div>

                <div className="cust_right_col">
                  {step.side === "right" && (
                    <>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECISION LEGACY ── */}
      <section className="precision_section">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>Precision Legacy Control</h2>
            <p>Configure exact terms for how and when your wealth is transitioned.</p>
          </div>

          <div className="prec_card">
            <div className="prec_header">
              <h4>Active Inheritance Plan</h4>
              <span className="prec_badge">MONITORING</span>
            </div>

            <div className="prec_section">
              <div className="trig_top">
                <span className="trig_label">Inactivity Trigger Countdown</span>
                <span className="trig_count">180 Days Remaining</span>
              </div>
              <div className="prog_bar"><div className="prog_fill" /></div>
              <div className="trig_note">Last verified ping: Today, 09:41 UTC</div>
            </div>

            <div className="prec_section">
              <div className="bene_label">Registered Beneficiaries</div>
              <ul className="bene_list">
                {[
                  { av: "A", name: "Alexander H.", alloc: "50%" },
                  { av: "E", name: "Elena M.",     alloc: "50%" },
                ].map((b) => (
                  <li key={b.name}>
                    <div className="bene_av">{b.av}</div>
                    <span className="bene_name">{b.name}</span>
                    <span className="bene_alloc">Allocation: {b.alloc}</span>
                    <span className="bene_status">Pending</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      <section className="compliance_section">
        <div className="pg_contain">
          <div className="comp_wrap">

            <div className="comp_img">
              <img
                src="/images/front-images/enterprise-grade-compliance.png"
                alt="Enterprise Grade Compliance"
              />
            </div>

            <div className="comp_content">
              <h2>Enterprise-Grade Compliance</h2>
              <p className="comp_desc">
                Rigorous adherence to global security standards ensures your data meets
                the highest regulatory requirements and technical benchmarks.
              </p>
              <div className="comp_badges">
                {COMPLIANCE_BADGES.map((b) => (
                  <div className="cb_item" key={b.name}>
                    <div className="cb_icon">
                      <img src={b.icon} alt={b.name} />
                    </div>
                    <div className="cb_text">
                      <div className="cb_name">{b.name}</div>
                      <div className="cb_label">{b.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hsm_block">
                <div className="hsm_heading">
                  <img src="/images/front-images/hsm-icon.png" alt="HSM" className="hsm_icon" />
                  <h4>Hardware Security Modules (HSM)</h4>
                </div>
                <p>Cryptographic keys are generated and stored within dedicated, tamper-resistant HSMs, providing an impenetrable physical barrier against extraction or compromise.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials_section">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>What Our Clients Say</h2>
            <p>Real feedback from teams who trust our work.</p>
          </div>
          <div className="test_slider_wrap">
            <Slider
              dots
              infinite
              speed={500}
              autoplay
              autoplaySpeed={3500}
              pauseOnHover
              slidesToShow={3}
              slidesToScroll={1}
              arrows
              dotsClass="test_dots"
              prevArrow={
                <button className="test_arrow test_prev" aria-label="Previous">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              }
              nextArrow={
                <button className="test_arrow test_next" aria-label="Next">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              }
              responsive={[
                { breakpoint: 1025, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 769,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
              ]}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="test_slide">
                  <div className="test_card">
                    <span className="test_qdeco">&ldquo;</span>
                    <p className="t_quote">{t.quote}</p>
                    <div className="t_author">
                      <strong className="t_name">{t.name}</strong>
                      <span className="t_role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
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

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
