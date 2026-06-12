import { useState } from "react";
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
    .post("terms-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};
const NAV_ITEMS = [
  { id: "terms-acceptance", label: "Acceptance of Terms" },
  { id: "vault-responsibilities", label: "Vault Responsibilities" },
  { id: "user-obligations", label: "User Obligations" },
  { id: "encryption-security", label: "Encryption & Security" },
  { id: "inheritance-workflow", label: "Inheritance Workflow" },
  { id: "beneficiary-access", label: "Beneficiary Access" },
  { id: "account-security", label: "Account Security" },
];

export default function Terms({ result }) {
  const { page_title, meta_desc, content, site_settings, cta_section } = result;

  //// workflow steps ////
  const WORKFLOW_STEPS = Array.from({ length: 3 }).map((_, i) => {
    const idx = i + 7;

    return {
      num: String(i + 1),
      title: `Step ${i + 1}`,
      desc: content?.[`sec5_card_text${idx}`],
    };
  });

  /////////////
  const [activeNav, setActiveNav] = useState("terms-acceptance");

  const scrollTo = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_desc={meta_desc}
      />
      <div className="terms_page">
        {/* ── HERO ── */}
        <section className="tc_hero">
          <div className="pg_contain">
            <div className="tc_hero_wrap">
              <div className="tc_hero_left">
                <span className="tc_badge">{content?.banner_title}</span>
                <Text string={content?.banner_text} />
              </div>

              <div className="tc_hero_right">
                <img
                  src="/images/front-images/Terms and conditions.png"
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
                    <h2>
                      <Text string={content?.section1_heading} />
                    </h2>
                  </div>
                  <p>
                    <Text string={content?.section1_text} />
                  </p>
                </div>

                {/* 02 */}
                <div className="tc_section" id="vault-responsibilities">
                  <div className="tc_sec_head">
                    <span className="tc_sec_num">02.</span>
                    <h2>
                      <Text string={content?.section2_heading} />
                    </h2>
                  </div>
                  <p>
                    <Text string={content?.section2_text} />
                  </p>

                  <div className="tc_alert_box">
                    <div className="tc_alert_head">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="none"
                      >
                        <path
                          fill="#E9C176"
                          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        />
                        <line
                          x1="12"
                          y1="9"
                          x2="12"
                          y2="13"
                          stroke="#0E1012"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="12"
                          y1="17"
                          x2="12.01"
                          y2="17"
                          stroke="#0E1012"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="tc_alert_em">
                      <Text string={content?.section2_sub_text} />
                    </p>
                  </div>
                </div>

                {/* 03 */}
                <div className="tc_section" id="user-obligations">
                  <div className="tc_sec_head">
                    <span className="tc_sec_num">03.</span>
                    <h2>
                      <Text string={content?.section3_heading} />
                    </h2>
                  </div>
                  <p>
                    <Text string={content?.section3_text} />
                  </p>
                </div>

                {/* 04 */}
                <div className="tc_section" id="encryption-security">
                  <div className="tc_sec_head">
                    <span className="tc_sec_num">04.</span>
                    <h2>
                      <Text string={content?.section4_heading} />
                    </h2>
                  </div>
                  <p>
                    <Text string={content?.section4_text} />
                  </p>
                  <div className="tc_img_block">
                    <img
                      src={cmsFileUrl(content?.image1, "images")}
                      alt={content?.section4_heading}
                    />
                    <p className="tc_img_caption">
                      FIG 4.1 — CLIENT-SIDE ENCRYPTION ARCHITECTURE
                    </p>
                  </div>
                </div>

                {/* 05 */}
                <div className="tc_section" id="inheritance-workflow">
                  <div className="tc_sec_head">
                    <span className="tc_sec_num">05.</span>
                    <h2>
                      <Text string={content?.section5_heading} />
                    </h2>
                  </div>
                  <p>
                    <Text string={content?.section5_text} />
                  </p>

                  <div className="tc_workflow">
                    {WORKFLOW_STEPS.map((step, i) => (
                      <div className="tc_wf_step" key={step.num}>
                        <div className="tc_wf_left">
                          <div className="tc_wf_circle">{step.num}</div>
                          {i < WORKFLOW_STEPS.length - 1 && (
                            <div className="tc_wf_line" />
                          )}
                        </div>

                        <div className="tc_wf_text">
                          <Text string={step?.desc} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 06 */}
                <div className="tc_section" id="beneficiary-access">
                  <div className="tc_sec_head">
                    <span className="tc_sec_num">06.</span>
                    <h2>
                      <Text string={content?.section6_heading} />
                    </h2>
                  </div>
                  <p>
                    <Text string={content?.section6_text} />
                  </p>
                </div>

                {/* 07 */}
                <div className="tc_section" id="account-security">
                  <div className="tc_sec_head">
                    <span className="tc_sec_num">07.</span>
                    <h2>
                      <Text string={content?.section7_heading} />
                    </h2>
                  </div>
                  <p>
                    <Text string={content?.section7_text} />
                  </p>
                </div>
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
