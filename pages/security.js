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
    .post("security-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Security({ result }) {
  const {
    page_title,
    meta_desc,
    content,
    security_pillars,
    site_settings,
    cta_section,
  } = result;

  ///// audit logs ///////

  const AUDIT_LOGS = Array.from({ length: 3 }).map((_, i) => {
    const idx = i + 1;

    return {
      time: content?.[`audit_ip${idx}`], // rename if not time
      highlight: content?.[`audit_badge${idx}`],
      before: content?.[`audit_heading${idx}`],
      after: "",
    };
  });

  ////////  protocol steps ///////

  const PROTOCOL_STEPS = [1, 2, 3, 4, 5]
    .map((i) => ({
      num: String(i),
      title: content?.[`sec2_card_heading${i}`],
      desc: content?.[`sec2_card_text${i}`],
      active: i === 5,
    }))
    .filter((item) => item?.title || item?.desc);

  ///// infra layers /////
  const INFRA_LAYERS = [1, 2, 3]
    .map((i) => ({
      label: `LAYER 0${i}`,
      title: content?.[`sec5_card_heading${i}`],
    }))
    .filter((item) => item?.title);

  ////////// workflow steps /////
  const WORKFLOW_STEPS = [1, 2, 3, 4, 5]
    .map((i) => ({
      num: String(i).padStart(2, "0"),
      desc: content?.[`sec7_steps${i}`],
    }))
    .filter((item) => item?.desc);

  ///// invisible step ///
  const INVISIBLE_STATS = [1, 2, 3, 4]
    .map((i) => ({
      badge: content?.[`sec7_card_flag${i}`],
      label: content?.[`sec7_flag_text${i}`],
    }))
    .filter((item) => item?.badge || item?.label);

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_desc={meta_desc}
      />

      <div className="security_page">
        {/* ── HERO ── */}
        <section className="sec_hero">
          {/* Full-width background chip image */}
          <img
            src={cmsFileUrl(content?.image1, "images")}
            alt={content?.banner_heading}
            className="sec_hero_bg"
          />
          {/* Left gradient overlay so text stays readable */}
          <div className="sec_hero_overlay" />

          <div className="pg_contain">
            <div className="sec_hero_wrap">
              <div className="sec_hero_left">
                <div className="sec_badge">{content?.banner_title}</div>
                <h1>
                  <Text string={content?.banner_heading} />
                </h1>
                <p>
                  <Text string={content?.banner_text} />
                </p>
                <div className="sec_hero_btns">
                  <Link href={content?.banner_lnk_url1} className="btn_gold">
                    {content?.banner_lnk_txt1}
                  </Link>
                  <Link href={content?.banner_lnk_url2} className="btn_ghost">
                    {content?.banner_lnk_txt2}
                  </Link>
                </div>
              </div>

              {/* Terminal card floating on the right */}
              <div className="sec_hero_right">
                <div className="sec_hero_card">
                  <div className="shc_header">
                    <span className="shc_label">ACTIVE_SHIELD_V4.2</span>
                    <div className="shc_shield">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
                    <p className="shc_line">
                      <span className="shc_key">ENCRYPTION_LAYER:</span>
                      <span className="shc_val"> AES-256-GCM</span>
                    </p>
                    <p className="shc_line">
                      <span className="shc_key">STATUS:</span>
                      <span className="shc_val">
                        {" "}
                        COMPROMISE_PROTECTION_ENABLED
                      </span>
                    </p>
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
                <Text string={content?.section1_text} />
              </div>
              <button className="sec_export_btn">
                {content?.section1_lnk_txt}
              </button>
            </div>
            <div className="sec_audit_card">
              {AUDIT_LOGS.map((log, i) => (
                <div className="sec_audit_row" key={i}>
                  <div className="sar_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="rgba(16,185,129,0.12)"
                        stroke="#10B981"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 12.5l3.5 3.5 6.5-7"
                        stroke="#10B981"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="sar_time">{log?.time}</div>

                  <div className="sar_event">
                    <Text string={log?.before} />
                    {log?.highlight && <span className="sar_hl"></span>}
                  </div>

                  <div className="sar_badge">{log?.highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTOMATED INHERITANCE PROTOCOL ── */}
        <section className="sec_auto_proto">
          <div className="pg_contain">
            <div className="sec_head">
              <h2>
                <Text string={content?.section2_heading} />
              </h2>
              <p>
                <Text string={content?.section2_text} />
              </p>
            </div>
            <div className="sap_timeline">
              {PROTOCOL_STEPS?.map((step, i) => (
                <div className="sap_step" key={step?.num}>
                  <div className="sap_connector">
                    {i > 0 && <span className="sap_line" />}

                    <div
                      className={`sap_box${
                        step?.active ? " sap_box_active" : ""
                      }`}
                    >
                      <span>{step?.num}</span>
                    </div>

                    {i < PROTOCOL_STEPS?.length - 1 && (
                      <span className="sap_line" />
                    )}
                  </div>

                  <h4>{step?.title}</h4>

                  <p>{step?.desc}</p>
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      >
                        <path d="M12 1C8.5 1 5.5 3.5 5.5 7c0 3 1 5.5 2.5 7.5" />
                        <path d="M12 1c3.5 0 6.5 2.5 6.5 6 0 3-1 5.5-2.5 7.5" />
                        <path d="M8 7c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.5-.5 5-1.5 7" />
                        <path d="M12 7v4" />
                        <path d="M10 17c.5 1.5 1.2 3 2 4" />
                        <path d="M8 21c-.5-1.5-1-3.5-1-5.5" />
                        <path d="M16 21c.5-2 .5-4 0-6" />
                      </svg>
                    </div>
                    <div className="mfa_header_text">
                      <span className="mfa_title">
                        Biometric Authentication
                      </span>
                      <span className="mfa_sub">
                        Step 2 of 3 &bull; Secure Session
                      </span>
                    </div>
                  </div>

                  {/* Three authentication rows */}
                  <div className="mfa_rows">
                    {/* Row 1: Completed */}
                    <div className="mfa_row mfa_row_done">
                      <span className="mfa_dot mfa_dot_gold" />
                      <span className="mfa_row_label">
                        YubiKey Hardware Token
                      </span>
                      <div className="mfa_row_status">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="11"
                            stroke="#10B981"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M7 12.5l3.5 3.5 6.5-7"
                            stroke="#10B981"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Row 2: In progress — gold-tinted active row */}
                    <div className="mfa_row mfa_row_active">
                      <span className="mfa_dot mfa_dot_gold" />
                      <span className="mfa_row_label">
                        Awaiting Biometric Prompt...
                      </span>
                      <div className="mfa_row_status">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="11"
                            stroke="#E9C176"
                            strokeWidth="1.5"
                          />
                          <circle cx="9" cy="12" r="1.2" fill="#E9C176" />
                          <circle cx="12" cy="12" r="1.2" fill="#E9C176" />
                          <circle cx="15" cy="12" r="1.2" fill="#E9C176" />
                        </svg>
                      </div>
                    </div>

                    {/* Row 3: Pending */}
                    <div className="mfa_row mfa_row_idle">
                      <span className="mfa_dot mfa_dot_idle" />
                      <span className="mfa_row_label">IP Verification</span>
                      <div className="mfa_row_status">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(239,239,239,0.3)"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        >
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: text + features */}
              <div className="sec_mfa_right">
                <h2>
                  <Text string={content?.section3_heading} />
                </h2>
                <Text string={content?.section3_text} />
              </div>
            </div>
          </div>
        </section>

        {/* ── INSTITUTIONAL SECURITY PILLARS ── */}
        <section className="sec_pillars" id="specs">
          <div className="pg_contain">
            <h2 className="sec_pillars_heading">{content?.section4_heading}</h2>
            <div className="sec_pillars_grid">
              {security_pillars.map((p) => (
                <div className="sp_card" key={p?.title}>
                  <div className="sp_icon">
                    <img src={cmsFileUrl(p?.image, "images")} alt={p?.title} />
                  </div>
                  <h3>{p?.title}</h3>
                  <p>
                    <Text string={p?.txt1} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENCRYPTION INFRASTRUCTURE ── */}
        <section className="sec_infra">
          <div className="pg_contain">
            <div className="sec_infra_head">
              <h2>{content?.section5_heading}</h2>
              <p>
                <Text string={content?.section5_text} />
              </p>
            </div>
          </div>
          <div className="sec_infra_visual">
            <img
              src={cmsFileUrl(content?.image4, "images")}
              alt={content?.section5_heading}
              className="infra_bg_img"
            />
            <div className="infra_overlay" />
            <div className="pg_contain infra_layers_wrap">
              <div className="infra_layers">
                {INFRA_LAYERS?.map((l, i) => (
                  <div className="infra_layer" key={i}>
                    <span className="infra_layer_num">{l?.label}</span>

                    <span className="infra_layer_title">{l?.title}</span>
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
              <svg
                width="38"
                height="42"
                viewBox="0 0 38 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 1L2 8v13c0 11.25 7.25 21.75 17 24.5C28.75 42.75 36 32.25 36 21V8L19 1z"
                  fill="rgba(233,193,118,0.15)"
                  stroke="#E9C176"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 1L36 8v13c0 11.25-7.25 21.75-17 24.5V1z"
                  fill="#E9C176"
                  opacity="0.35"
                />
                <path
                  d="M12 23l5 5 9-10"
                  stroke="#E9C176"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2>{content?.section6_heading}</h2>
            <p>
              <Text string={content?.section6_text} />
            </p>
          </div>
        </section>

        {/* ── PROTECTED WORKFLOW ── */}
        <section className="sec_workflow">
          <div className="pg_contain">
            <div className="sec_head">
              <h2>{content?.section7_heading}</h2>
              <p>
                <Text string={content?.section7_text} />
              </p>
            </div>
            {/* 5 step cards */}
            <div className="sw_steps">
              {WORKFLOW_STEPS?.map((step) => (
                <div className="sw_step" key={step?.num}>
                  <div className="sw_step_num">{step?.num}</div>

                  <p>
                    <Text string={step?.desc} />
                  </p>
                </div>
              ))}
            </div>

            {/* 4 stat cards */}
            <div className="sw_stats">
              {INVISIBLE_STATS?.map((s, i) => (
                <div className="sw_stat" key={i}>
                  <div className="sw_stat_badge">
                    <span className="sw_stat_dot" />

                    <span className="sw_badge_text">{s?.badge}</span>
                  </div>

                  <span className="sw_stat_val">{s?.val}</span>

                  <span className="sw_stat_label">
                    <Text string={s?.label} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <Cta_section cta_section={cta_section} />
      </div>
    </>
  );
}
