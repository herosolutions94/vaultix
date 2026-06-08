import Link from "next/link";
import Layout from "@/components/layout";

const PLANS = [
  {
    name: "Vaultix Preview",
    price: "$0",
    period: "",
    desc: "Test Vaultix before committing your digital legacy.",
    btn: "Start Free Trial",
    btnClass: "btn_outline_white",
    features: [
      { text: "Store up to 3 digital assets", ok: true },
      { text: "Explore full dashboard experience", ok: true },
      { text: "Basic encrypted storage", ok: true },
      { text: "Test vault setup workflow", ok: true },
      { text: "No beneficiary assignment", ok: false },
      { text: "No release instructions", ok: false },
      { text: "No emergency transfer setup", ok: false },
      { text: "No inheritance execution rules", ok: false },
      { text: "No automated continuity triggers", ok: false },
    ],
  },
  {
    name: "Vaultix Monthly",
    price: "$14.99",
    period: "/month",
    desc: "Flexible ongoing protection.",
    btn: "Subscribe Monthly",
    btnClass: "btn_outline_white",
    features: [
      { text: "Unlimited digital assets", ok: true },
      { text: "Assign beneficiaries", ok: true },
      { text: "Set inheritance instructions", ok: true },
      { text: "Configure release conditions", ok: true },
      { text: "Secure encrypted storage", ok: true },
      { text: "Edit and update vault anytime", ok: true },
      { text: "Automated continuity verification reminders", ok: true },
    ],
  },
  {
    name: "Vaultix Annual",
    price: "$119",
    period: "/year",
    desc: "Best value for serious long-term planners. (Save ~34%)",
    btn: "Secure Annual",
    btnClass: "btn_gold",
    recommended: true,
    features: [
      { text: "Everything in Monthly", ok: true },
      { text: "Annual continuity review reminders", ok: true },
      { text: "Priority support", ok: true },
      { text: "Locked annual pricing protection", ok: true },
    ],
  },
  {
    name: "Vaultix Lifetime",
    price: "$399",
    period: " one-time",
    desc: "A one-time decision to secure your digital future permanently.",
    btn: "Secure Lifetime",
    btnClass: "btn_outline_white",
    features: [
      { text: "Everything in Annual forever", ok: true },
      { text: "Lifetime platform access", ok: true },
      { text: "Future premium feature upgrades included", ok: true },
      { text: "Founder badge / founding member recognition", ok: true },
      { text: "VIP support priority", ok: true },
      { text: 'Locked "legacy founder" pricing forever', ok: true },
    ],
  },
];

const COMPARE_ROWS = [
  {
    label: "End-to-End Encryption",
    cols: [true, true, true, true],
  },
  {
    label: "Zero-Knowledge Architecture",
    cols: [true, true, true, true],
  },
  {
    label: "Inheritance Automation",
    cols: [false, true, true, true],
  },
  {
    label: "Multi-Signature Approvals",
    cols: [false, false, true, true],
  },
  {
    label: "Dedicated HSM Storage",
    cols: [false, false, false, true],
  },
  {
    label: "Immutable Audit Logs",
    cols: ["7 Days", "1 Year", { val: "1 Year", gold: true }, "Forever"],
  },
];

const STANDARD = [
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M12 1C8.5 1 5.5 3.5 5.5 7c0 3 1 5.5 2.5 7.5"/>
        <path d="M12 1c3.5 0 6.5 2.5 6.5 6 0 3-1 5.5-2.5 7.5"/>
        <path d="M8 7c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.5-.5 5-1.5 7"/>
        <path d="M12 7v4"/><path d="M10 17c.5 1.5 1.2 3 2 4"/>
        <path d="M8 21c-.5-1.5-1-3.5-1-5.5"/>
        <path d="M16 21c.5-2 .5-4 0-6"/>
      </svg>
    ),
    title: "Zero-Knowledge",
    desc: "We never have access to your master password or unencrypted data. Your secrets remain yours alone.",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <rect x="5" y="11" width="14" height="10" rx="2"/>
        <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
      </svg>
    ),
    title: "AES-256-GCM",
    desc: "Military-grade encryption applied client-side before any data ever leaves your device.",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <polyline points="9 15 11 17 15 13"/>
      </svg>
    ),
    title: "Cryptographic Proof",
    desc: "Every action is cryptographically signed, ensuring an immutable record of access and modifications.",
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(239,239,239,0.22)" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ColCheck = ({ val }) => {
  if (val === true)  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
  if (val === false) return <span className="pr_dash">-</span>;
  if (val && typeof val === "object" && val.gold) return <span className="pr_text_gold">{val.val}</span>;
  return <span className="pr_text_val">{val}</span>;
};

export default function Pricing() {
  return (
    <div className="pricing_page">

      {/* ── HERO ── */}
      <section className="pr_hero">
        <div className="pg_contain">
          <div className="pr_hero_wrap">
            <div className="pr_hero_left">
              <div className="pr_badge">Vault Plans</div>
              <h1>Secure Digital Legacy with Institutional-Grade Protection.</h1>
              <p>Our pricing reflects the uncompromising architecture required to maintain absolute cryptographic certainty over your most critical assets. Zero-knowledge by design.</p>
            </div>
            <div className="pr_hero_right">
              <img src="/images/front-images/pricing-hero.png" alt="Vaultix Security" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className="pr_strip">
        <div className="pg_contain">
          <div className="pr_strip_items">
            <div className="pr_strip_item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>End-to-End Encryption Included</span>
            </div>
            <div className="pr_strip_item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              <span>Zero-Knowledge Architecture</span>
            </div>
            <div className="pr_strip_item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              <span>Secure Inheritance Workflows</span>
            </div>
            <div className="pr_strip_item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span>Immutable Audit Logging</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING PLANS ── */}
      <section className="pr_plans">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>Institutional Custody. Personal Control.</h2>
            <p>Select the security posture that aligns with your digital asset profile.</p>
          </div>
          <div className="pr_cards">
            {PLANS.map((plan) => (
              <div className={`pr_card${plan.recommended ? " pr_card_recommended" : ""}`} key={plan.name}>
                {plan.recommended && <div className="pr_recommended_tag">RECOMMENDED</div>}
                <div className="pr_card_top">
                  <h3 className="pr_plan_name">{plan.name}</h3>
                  <div className="pr_price_row">
                    <span className="pr_price">{plan.price}</span>
                    {plan.period && <span className="pr_period">{plan.period}</span>}
                  </div>
                  <p className="pr_plan_desc">{plan.desc}</p>
                </div>
                <ul className="pr_features">
                  {plan.features.map((f, i) => (
                    <li key={i} className={f.ok ? "pr_feat_ok" : "pr_feat_no"}>
                      <span className="pr_feat_icon">{f.ok ? <CheckIcon /> : <CrossIcon />}</span>
                      <span className="pr_feat_text">{f.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="pr_card_bottom">
                  <Link href="/dashboard" className={`pr_plan_btn ${plan.btnClass}`}>{plan.btn}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="pr_compare">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>Technical Feature Comparison</h2>
            <p>Detailed specifications of our cryptographic protocols and custody features across all tiers.</p>
          </div>
          <div className="pr_table_wrap">
            <table className="pr_table">
              <thead>
                <tr>
                  <th className="pr_th_label">Security Feature</th>
                  <th>Vaultix Preview</th>
                  <th>Vaultix Monthly</th>
                  <th className="pr_th_annual">Vaultix Annual</th>
                  <th>Vaultix Lifetime</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td className="pr_td_label">{row.label}</td>
                    {row.cols.map((val, j) => (
                      <td key={j}>
                        <ColCheck val={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── STANDARD ACROSS ALL VAULTS ── */}
      <section className="pr_standard">
        <div className="pg_contain">
          <div className="sec_head">
            <h2>Standard Across All Vaults</h2>
          </div>
          <div className="pr_std_grid">
            {STANDARD.map((item) => (
              <div className="pr_std_card" key={item.title}>
                <div className="pr_std_icon">{item.svg}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
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

Pricing.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
