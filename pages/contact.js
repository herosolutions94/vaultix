import Link from "next/link";
import Layout from "@/components/layout";

const CATEGORIES = [
  {
    icon: "/images/front-images/support-icon1.png",
    title: "Security & Access",
    desc: "2FA resets, access logs, and security audits.",
  },
  {
    icon: "/images/front-images/support-icon2.png",
    title: "Encryption & Privacy",
    desc: "Key management and zero-knowledge protocols.",
  },
  {
    icon: "/images/front-images/support-icon3.png",
    title: "Inheritance",
    desc: "Beneficiary setup and succession planning.",
  },
  {
    icon: "/images/front-images/support-icon4.png",
    title: "Vault Recovery",
    desc: "Emergency protocols and multi-sig recovery.",
  },
  {
    icon: "/images/front-images/support-icon5.png",
    title: "Technical Support",
    desc: "API access, integration, and platform usage.",
  },
  {
    icon: "/images/front-images/support-icon6.png",
    title: "Compliance",
    desc: "Regulatory reporting and audit trails.",
  },
];

export default function Contact() {
  return (
    <div className="contact_page">
      {/* ── HERO ── */}
      <section className="ct_hero">
        <div className="pg_contain">
          <div className="ct_badge">Encrypted Channel</div>
          <h1>Secure Communication with Verified Support</h1>
          <p>
            All communication is encrypted and processed through verified
            institutional support channels with strict security protocols.
          </p>
          <div className="ct_hero_btns">
            <a href="#form" className="btn_gold">
              Submit Secure Request
            </a>
            <Link href="/security" className="btn_ghost">
              View Security Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* ── FORM + SUPPORT CATEGORIES ── */}
      <section className="ct_main" id="form">
        <div className="pg_contain">
          <div className="ct_main_wrap">
            {/* Left: Secure Request Form */}
            <div className="ct_form_col">
              <div className="ct_form_card">
                <div className="ct_form_head">
                  <h2>Secure Request Form</h2>
                  <div className="ct_e2e_badge">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                    E2E Encrypted
                  </div>
                </div>

                <form className="ct_form" onSubmit={(e) => e.preventDefault()}>
                  <div className="ct_form_grid">
                    <div className="ct_field">
                      <label>Full Legal Name</label>
                      <input
                        type="text"
                        placeholder="As it appears on your verified ID"
                      />
                    </div>
                    <div className="ct_field">
                      <label>Verified Email Address</label>
                      <input
                        type="email"
                        placeholder="Institutional email preferred"
                      />
                    </div>
                    <div className="ct_field">
                      <label>
                        Vault ID <span className="ct_optional">(Optional)</span>
                      </label>
                      <input type="text" placeholder="e.g. VLTX-XXXX-XXXX" />
                    </div>
                    <div className="ct_field">
                      <label>Request Category</label>
                      <div className="ct_select_wrap">
                        <select defaultValue="">
                          <option value="" disabled>
                            Select a category...
                          </option>
                          <option>Security &amp; Access</option>
                          <option>Encryption &amp; Privacy</option>
                          <option>Inheritance</option>
                          <option>Vault Recovery</option>
                          <option>Technical Support</option>
                          <option>Compliance</option>
                        </select>
                        <svg
                          className="ct_chevron"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                    <div className="ct_field ct_field_full">
                      <label>Secure Message</label>
                      <textarea
                        rows={5}
                        placeholder="Detail your request securely. Do not include sensitive key phrases here."
                      />
                    </div>
                  </div>

                  <div className="ct_form_footer">
                    <p className="ct_disclaimer">
                      By submitting, you agree to our strict security protocols.
                      Identity verification may be required before processing.
                    </p>
                    <button type="submit" className="btn_gold ct_submit_btn">
                      Transmit Securely
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: Support Categories + Response Standards */}
            <div className="ct_info_col">
              <div className="ct_info_card">
                <h3 className="ct_info_title">Support Categories</h3>
                <div className="ct_categories">
                  {CATEGORIES.map((cat) => (
                    <div className="ct_cat_item" key={cat.title}>
                      <img
                        src={cat.icon}
                        alt={cat.title}
                        className="ct_cat_icon"
                      />
                      <p className="ct_cat_title">{cat.title}</p>
                      <p className="ct_cat_desc">{cat.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="ct_response">
                  <p className="ct_response_label">Response Standards</p>
                  <div className="ct_response_row">
                    <span className="ct_response_type">General Inquiries</span>
                    <span className="ct_response_val ct_val_gold">
                      &lt; 24 Hours
                    </span>
                  </div>
                  <div className="ct_response_row">
                    <span className="ct_response_type">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="#E9C176"
                        stroke="#E9C176"
                        strokeWidth="0"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line
                          x1="12"
                          y1="9"
                          x2="12"
                          y2="13"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="12"
                          y1="17"
                          x2="12.01"
                          y2="17"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Security Critical
                    </span>
                    <span className="ct_response_val ct_val_teal">
                      Immediate Priority
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CHANNELS ── */}
      <section className="ct_channels">
        <div className="pg_contain">
          <div className="ct_channels_wrap">
            {/* Secure Mail */}
            <div className="ct_channel_card ct_card_teal">
              <div className="ct_channel_head">
                <img
                  src="/images/front-images/mail.png"
                  alt="Mail"
                  className="ct_ch_icon"
                />
                <span className="ct_ch_badge ct_badge_active">Active</span>
              </div>
              <h3>Secure Mail</h3>
              <p>
                Encrypted asynchronous communication for non-critical
                institutional inquiries.
              </p>
              <a href="mailto:support@vaultix.io" className="ct_ch_link">
                support@vaultix.io
              </a>
            </div>

            {/* Global Presence */}
            <div className="ct_channel_card">
              <div className="ct_channel_head">
                <img
                  src="/images/front-images/location.png"
                  alt="Location"
                  className="ct_ch_icon"
                />
                <span className="ct_ch_badge ct_badge_vaults">Vaults</span>
              </div>
              <h3>Global Presence</h3>
              <p>
                Physical Vault Locations for deep-storage audit and custodial
                handovers.
              </p>
              <span className="ct_ch_region">USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta_section">
        <img
          src="/images/front-images/cta-bg.png"
          alt=""
          className="cta_bg_img"
        />
        <img
          src="/images/front-images/cta-gradient.png"
          alt=""
          className="cta_grad_img"
        />
        <div className="pg_contain">
          <div className="cta_ico">
            <img src="/images/front-images/cta-icon.png" alt="" />
          </div>
          <h2>
            Secure Your Digital Legacy
            <br />
            Today
          </h2>
          <p>
            Begin protecting your assets with institutional-grade security.
            Setup takes minutes, protection lasts generations.
          </p>
          <div className="cta_btns">
            <Link href="/dashboard" className="btn_gold">
              Create Vault
            </Link>
            <Link href="/security" className="btn_ghost">
              View Security Architecture
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

Contact.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
