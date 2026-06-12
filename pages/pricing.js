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
    .post("pricing-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

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

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10B981"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(239,239,239,0.22)"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Pricing({ result }) {
  const {
    page_title,
    meta_desc,
    content,
    site_settings,
    feature_comparison,
    cta_section,
  } = result;

  const COMPARE_ROWS =
    feature_comparison?.map((item) => ({
      label: item?.title,
      cols: [item?.txt1, item?.txt2, item?.txt3, item?.txt4],
    })) || [];

  const ColCheck = ({ val }) => {
    const value = val?.toString()?.toLowerCase()?.trim();

    if (value === "yes") {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    }

    if (value === "no") {
      return <span className="pr_dash">-</span>;
    }

    return <span className="pr_text_val">{val}</span>;
  };
  ////// standard /////
  const STANDARD = [2, 3, 4]
    .map((i) => ({
      icon: content?.[`image${i}`],
      title: content?.[`sec3_card_heading${i}`],
      desc: content?.[`sec3_card_text${i}`],
    }))
    .filter((item) => item?.title || item?.desc || item?.icon);

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_desc={meta_desc}
      />
      <div className="pricing_page">
        {/* ── HERO ── */}
        <section className="pr_hero">
          <div className="pg_contain">
            <div className="pr_hero_wrap">
              <div className="pr_hero_left">
                <div className="pr_badge">{content?.banner_title}</div>
                <h1>
                  <Text string={content?.banner_heading} />
                </h1>
                <p>
                  <Text string={content?.banner_text} />
                </p>
              </div>
              <div className="pr_hero_right">
                <img
                  src={cmsFileUrl(content?.image1, "images")}
                  alt={content?.banner_heading}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES STRIP ── */}
        <section className="pr_strip">
          <div className="pg_contain">
            <div className="pr_strip_items">
              <div className="pr_strip_item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>{content?.banner_tag1}</span>
              </div>
              <div className="pr_strip_item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                <span>{content?.banner_tag2}</span>
              </div>
              <div className="pr_strip_item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <polyline points="17 1 21 5 17 9" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <polyline points="7 23 3 19 7 15" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
                <span>{content?.banner_tag3}</span>
              </div>
              <div className="pr_strip_item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span>{content?.banner_tag4}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING PLANS ── */}
        <section className="pr_plans">
          <div className="pg_contain">
            <div className="sec_head">
              <h2>{content?.section1_heading}</h2>
              <Text string={content?.section1_text} />
            </div>
            <div className="pr_cards">
              {PLANS.map((plan) => (
                <div
                  className={`pr_card${plan.recommended ? " pr_card_recommended" : ""}`}
                  key={plan.name}
                >
                  {plan.recommended && (
                    <div className="pr_recommended_tag">RECOMMENDED</div>
                  )}
                  <div className="pr_card_top">
                    <h3 className="pr_plan_name">{plan.name}</h3>
                    <div className="pr_price_row">
                      <span className="pr_price">{plan.price}</span>
                      {plan.period && (
                        <span className="pr_period">{plan.period}</span>
                      )}
                    </div>
                    <p className="pr_plan_desc">{plan.desc}</p>
                  </div>
                  <ul className="pr_features">
                    {plan.features.map((f, i) => (
                      <li
                        key={i}
                        className={f.ok ? "pr_feat_ok" : "pr_feat_no"}
                      >
                        <span className="pr_feat_icon">
                          {f.ok ? <CheckIcon /> : <CrossIcon />}
                        </span>
                        <span className="pr_feat_text">{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pr_card_bottom">
                    <Link
                      href="/dashboard"
                      className={`pr_plan_btn ${plan.btnClass}`}
                    >
                      {plan.btn}
                    </Link>
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
              <h2>{content?.section2_heading}</h2>
              <Text string={content?.section2_text} />
            </div>
            <div className="pr_table_wrap">
              <table className="pr_table">
                <thead>
                  <tr>
                    <th className="pr_th_label">Security Feature</th>
                    <th>Foundation</th>
                    <th>Continuity</th>
                    <th className="pr_th_annual">Legacy</th>
                    <th>Dynasty. tnx</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS?.map((row, i) => (
                    <tr key={i}>
                      <td className="pr_td_label">{row?.label}</td>

                      {row?.cols?.map((val, j) => (
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
              <h2>{content?.section3_heading}</h2>
            </div>
            <div className="pr_std_grid">
              {STANDARD?.map((item, i) => (
                <div className="pr_std_card" key={i}>
                  <div className="pr_std_icon">
                    {item?.icon ? (
                      <img
                        src={cmsFileUrl(item?.icon, "images")}
                        alt={item?.title}
                      />
                    ) : null}
                  </div>

                  <h4>{item?.title}</h4>

                  <p>
                    <Text string={item?.desc} />
                  </p>
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
