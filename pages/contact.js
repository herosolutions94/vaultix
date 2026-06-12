import Link from "next/link";
import Layout from "@/components/layout";
import Cta_section from "@/components/cta_section";

import http from "@/helpers/http";
import { parse } from "cookie";
import { doObjToFormData } from "@/helpers/helpers";
import MetaGenerator from "@/components/meta-generator";
import Text from "@/components/text";
import { cmsFileUrl } from "@/helpers/helpers";

export const getServerSideProps = async (context) => {
  const { req } = context;
  const cookieHeader = req.headers.cookie || "";
  const cookieValue = parse(cookieHeader);
  const authToken =
    cookieValue["authToken"] !== undefined &&
    cookieValue["authToken"] !== null &&
    cookieValue["authToken"] !== ""
      ? cookieValue["authToken"]
      : "";

  const result = await http
    .post("contact-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Contact({ result }) {
  const { page_title, meta_desc, content, site_settings, cta_section } = result;

  const CATEGORIES = Array.from({ length: 6 }).map((_, i) => ({
    icon: content?.[`image${i + 1}`],
    title: content?.[`sec3_card_heading${i + 1}`],
    desc: content?.[`sec3_card_text${i + 1}`],
  }));

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_desc={meta_desc}
      />
      <div className="contact_page">
        {/* ── HERO ── */}
        <section className="ct_hero">
          <div className="pg_contain">
            <div className="ct_badge">{content?.banner_title}</div>
            <h1>
              <Text string={content?.banner_heading} />
            </h1>
            <p>
              <Text string={content?.banner_text} />
            </p>
            <div className="ct_hero_btns">
              <Link href={content?.banner_lnk_url1} className="btn_gold">
                {content?.banner_lnk_txt1}
              </Link>
              <Link href={content?.banner_lnk_url2} className="btn_ghost">
                {content?.banner_lnk_txt2}
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
                    <h2>{content?.form_heading}</h2>
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
                      {content?.form_heading2}
                    </div>
                  </div>

                  <form
                    className="ct_form"
                    onSubmit={(e) => e.preventDefault()}
                  >
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
                          Vault ID{" "}
                          <span className="ct_optional">(Optional)</span>
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
                        <Text string={content?.form_text} />
                      </p>
                      <button type="submit" className="btn_gold ct_submit_btn">
                        {content?.form_btn_text}
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
                    {CATEGORIES.map((cat, i) => {
                      if (!cat?.title && !cat?.desc && !cat?.icon) return null;

                      return (
                        <div className="ct_cat_item" key={i}>
                          <img
                            src={cmsFileUrl(cat?.icon, "images")}
                            alt={cat?.title || "category"}
                            className="ct_cat_icon"
                          />
                          <p className="ct_cat_title">{cat?.title}</p>
                          <p className="ct_cat_desc">{cat?.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="ct_response">
                    <p className="ct_response_label">Response Standards</p>
                    <div className="ct_response_row">
                      <span className="ct_response_type">
                        General Inquiries
                      </span>
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
                  <span className="ct_ch_badge ct_badge_active">
                    {content?.last_card_flag7}
                  </span>
                </div>
                <h3>{content?.last_card_heading7}</h3>
                <p>
                  <Text string={content?.last_card_text7} />
                </p>
                <a
                  href={`mailto:${site_settings?.site_email}`}
                  className="ct_ch_link"
                >
                  {site_settings?.site_email}
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
                  <span className="ct_ch_badge ct_badge_vaults">
                    {content?.last_card_flag8}
                  </span>
                </div>
                <h3>{content?.last_card_heading8}</h3>
                <p>
                  <Text string={content?.last_card_text8} />
                </p>
                <span className="ct_ch_region">
                  {site_settings?.site_address}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <Cta_section cta_section={cta_section} />
      </div>
    </>
  );
}
