import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";

const PLAN_FEATURES = [
  "Unlimited Encrypted Vaults",
  "Advanced Inheritance Triggers",
  "Crypto Seed Protection",
  "Hardware-level Enclaves",
];

const ZK_FEATURES = [
  "Biometric Auth",
  "Air-Gapped Cold Storage",
  "SOC2 Type II Certified",
  "Swiss Jurisdiction",
];

export default function Checkout() {
  const [activeTab, setActiveTab] = useState("card");

  return (
    <div className="checkout_page">

      {/* ── HERO ── */}
      <section className="co_hero">
        <div className="pg_contain">
          <div className="co_badge">
            <span className="co_badge_dot" />
            Secure Enrollment Active
          </div>
          <h1>
            Activate Your Secure<br />
            <span className="co_gold">Digital Legacy</span> Infrastructure.
          </h1>
          <p>Establish your cryptographic sanctuary. Your onboarding is protected by end-to-end TLS 1.3 encryption and zero-knowledge architecture.</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="co_main">
        <div className="pg_contain">
          <div className="co_main_wrap">

            {/* ── LEFT: forms ── */}
            <div className="co_left">

              {/* Entity Details */}
              <div className="co_card co_card_gold">
                <div className="co_card_head">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Institutional Entity Details</span>
                </div>
                <div className="co_form">
                  <div className="co_row">
                    <div className="co_field">
                      <label>First Name</label>
                      <input type="text" placeholder="Legal First Name" />
                    </div>
                    <div className="co_field">
                      <label>Last Name</label>
                      <input type="text" placeholder="Legal Last Name" />
                    </div>
                  </div>
                  <div className="co_field">
                    <label>Corporate Email Address</label>
                    <input type="email" placeholder="administrator@institution.com" />
                  </div>
                  <div className="co_field">
                    <label>Billing Address</label>
                    <input type="text" placeholder="Street Address, Suite/Floor" />
                  </div>
                  <div className="co_row">
                    <div className="co_field">
                      <label>City</label>
                      <input type="text" placeholder="City" />
                    </div>
                    <div className="co_field">
                      <label>Country</label>
                      <div className="co_select_wrap">
                        <select defaultValue="">
                          <option value="" disabled>Select Jurisdiction</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Switzerland</option>
                          <option>Singapore</option>
                          <option>Germany</option>
                        </select>
                        <svg className="co_chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Gateway */}
              <div className="co_card co_card_teal">
                <div className="co_card_head">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="1" y="4" width="22" height="16" rx="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                  <span>Encrypted Payment Gateway</span>
                  <div className="co_pay_badges">
                    <span className="co_pay_badge">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      PCI-DSS
                    </span>
                    <span className="co_pay_badge">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <rect x="5" y="11" width="14" height="10" rx="2"/>
                        <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                      </svg>
                      AES-256
                    </span>
                  </div>
                </div>

                <div className="co_form">
                  {/* Tabs */}
                  <div className="co_pay_tabs">
                    {[
                      {
                        id: "card", label: "Card",
                        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
                      },
                      {
                        id: "wire", label: "Wire",
                        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
                      },
                      {
                        id: "crypto", label: "Crypto",
                        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 8h5a2 2 0 0 1 0 4H9zm0 4h5.5a2 2 0 0 1 0 4H9z"/><line x1="9" y1="8" x2="9" y2="16"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/></svg>,
                      },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        className={`co_pay_tab${activeTab === tab.id ? " co_tab_active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                        type="button"
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Card fields */}
                  {activeTab === "card" && <>
                    <div className="co_field">
                      <label>Card Number</label>
                      <div className="co_input_icon_wrap">
                        <svg className="co_input_icon_left" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                          <rect x="1" y="4" width="22" height="16" rx="2"/>
                          <line x1="1" y1="10" x2="23" y2="10"/>
                        </svg>
                        <input type="text" placeholder="0000 0000 0000 0000" className="co_input_pl" maxLength={19} />
                      </div>
                    </div>
                    <div className="co_row">
                      <div className="co_field">
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM/YY" maxLength={5} />
                      </div>
                      <div className="co_field">
                        <label>CVC</label>
                        <div className="co_input_icon_wrap">
                          <input type="text" placeholder="•••" maxLength={4} className="co_input_pr" />
                          <button className="co_cvc_info" type="button" tabIndex={-1} title="3 or 4 digit security code">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                              <circle cx="12" cy="12" r="10"/>
                              <line x1="12" y1="16" x2="12" y2="12"/>
                              <line x1="12" y1="8" x2="12.01" y2="8"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="co_field">
                      <label>Name on Card</label>
                      <input type="text" placeholder="EXACT NAME ON CARD" className="co_upper_ph" />
                    </div>
                  </>}

                  {activeTab === "wire" && (
                    <div className="co_tab_msg">
                      <p>Wire transfer instructions will be provided after account creation. Processing time: 2–5 business days.</p>
                    </div>
                  )}

                  {activeTab === "crypto" && (
                    <div className="co_tab_msg">
                      <p>Crypto payment addresses will be generated after account creation. Accepts BTC, ETH, and USDC.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* ── RIGHT: summary ── */}
            <div className="co_right">

              {/* Order Summary */}
              <div className="co_summary_card">
                <div className="co_summary_head">
                  <div>
                    <p className="co_plan_name">Heritage Protocol</p>
                    <p className="co_plan_sub">Annual Institutional Billing</p>
                  </div>
                  <div className="co_plan_price">
                    <span className="co_price_val">$348</span>
                    <span className="co_price_per">/year</span>
                  </div>
                </div>

                <div className="co_features">
                  {PLAN_FEATURES.map((f) => (
                    <div className="co_feat_row" key={f}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="co_divider" />

                <div className="co_cost_rows">
                  <div className="co_cost_row">
                    <span>Subtotal</span>
                    <span>$348.00</span>
                  </div>
                  <div className="co_cost_row">
                    <span>Taxes (Calculated at next step)</span>
                    <span>--</span>
                  </div>
                </div>

                <div className="co_divider" />

                <div className="co_total_row">
                  <span>Total Due Today</span>
                  <span>$348.00</span>
                </div>

                <button className="co_activate_btn" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="5" y="11" width="14" height="10" rx="2"/>
                    <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                  </svg>
                  Activate Secure Vault
                </button>
                <p className="co_disclaimer">By activating, you agree to our Institutional Terms of Service and Privacy Policy.</p>
              </div>

              {/* Zero-Knowledge card */}
              <div className="co_zk_card">
                <div className="co_zk_icon_wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3>Zero-Knowledge Architecture</h3>
                <p>Your Vault Data Remains Protected Under Zero-Knowledge Encryption. We cannot read, access, or recover your master credentials.</p>
                <div className="co_zk_features">
                  {ZK_FEATURES.map((f) => (
                    <div className="co_zk_feat" key={f}>
                      <span className="co_zk_dot" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
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

Checkout.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
