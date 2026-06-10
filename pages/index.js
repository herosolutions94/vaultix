import Link from "next/link";

import dynamic from "next/dynamic";
import http from "@/helpers/http";
import { parse } from "cookie";
import { doObjToFormData } from "@/helpers/helpers";
import MetaGenerator from "@/components/meta-generator";
import Text from "@/components/text";
import { cmsFileUrl } from "@/helpers/helpers";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ZK_POINTS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="9" r="4" />
        <path d="M12 9h8M17 9v3" />
      </svg>
    ),
    title: "Client-Side Encryption",
    desc: "AES-256-GCM encryption occurs on your device before any data reaches our servers.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3C7.582 3 4 6.582 4 11M12 3c4.418 0 8 3.582 8 8M7.5 11c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5m-7 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5M11 11c0-.552.448-1 1-1s1 .448 1 1M8 16c0 2 1.5 4 4 5 2.5-1 4-3 4-5" />
      </svg>
    ),
    title: "Multi-Signature Access",
    desc: "Beneficiary claims require consensus and hardware-backed biometric verification.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L4 5v7c0 5 3.5 9.74 8 11 4.5-1.26 8-6 8-11V5l-8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Immutable Audit Logs",
    desc: "Every interaction with your vault is cryptographically signed and permanently recorded.",
  },
];

const TESTIMONIALS = [
  {
    name: "Managing Partner",
    role: "Multi-Family Office, Geneva",
    quote:
      '"The only custody solution that satisfies our family office\'s requirement for absolute zero-knowledge architecture combined with reliable inheritance automation."',
  },
  {
    name: "Early Investor",
    role: "Private Client",
    quote:
      '"As someone heavily invested in digital assets, Vaultix provides the exact peace of mind I needed. The inactivity trigger system is flawless."',
  },
  {
    name: "Chief Security Officer",
    role: "Digital Asset Fund",
    quote:
      '"A sophisticated technical achievement that solves the critical vulnerability in self-custody: what happens when you\'re gone."',
  },
];

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
    .post("home-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Home({ result }) {
  const { page_title, meta_desc, content, home_features, testimonials } =
    result;

  ////// trust badges //////
  const TRUST_BADGES = [
    { icon: "/images/front-images/trust-icon1.svg", key: "banner_tag1" },
    { icon: "/images/front-images/trust-icon2.svg", key: "banner_tag2" },
    { icon: "/images/front-images/trust-icon3.svg", key: "banner_tag3" },
    { icon: "/images/front-images/trust-icon4.svg", key: "banner_tag4" },
  ];

  const trustData = TRUST_BADGES.map((b) => ({
    icon: b.icon,
    label: content?.[b.key],
  })).filter((x) => x.label);

  ///// custody steps ////

  const CUSTODY_STEPS = [2, 3, 4, 5]
    .map((i) => ({
      icon: content?.[`image${i}`],
      title: content?.[`sec3_card_heading${i}`],
      desc: content?.[`sec3_card_text${i}`],
      side: i % 2 === 0 ? "right" : "left",
    }))
    .filter((item) => item.title || item.desc || item.icon);

  //// compliance  badges ////

  const COMPLIANCE_BADGES = [8, 9, 10, 11]
    .map((i) => ({
      icon: content?.[`image${i}`],
      name: content?.[`sec5_card_heading${i}`],
      label: content?.[`sec5_card_text${i}`],
    }))
    .filter((item) => item.name || item.label || item.icon);

  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />

      <div className="home_page">
        {/* ── HERO ── */}
        <section className="hero_section">
          <img
            src="/images/front-images/gradient1.png"
            alt=""
            className="hero_grad hero_grad1"
          />
          <img
            src="/images/front-images/gradient2.png"
            alt=""
            className="hero_grad hero_grad2"
          />

          <div className="pg_contain">
            <div className="hero_main">
              <div className="hero_badge">
                <img
                  src="/images/front-images/hero-icon1.svg"
                  alt=""
                  width="15"
                  height="15"
                />
                {content?.banner_title}
              </div>

              <h1>
                <Text string={content?.banner_heading} />
              </h1>

              <p className="hero_sub">
                <Text string={content?.banner_text} />
              </p>

              <div className="hero_btns">
                <Link href={content?.banner_lnk_url1} className="btn_gold">
                  {content?.banner_lnk_txt1}
                </Link>
                <Link href={content?.banner_lnk_url2} className="btn_ghost">
                  {content?.banner_lnk_txt2}
                </Link>
              </div>
            </div>
          </div>

          <div className="hero_trust">
            <div className="pg_contain">
              {trustData.map((b, i) => (
                <div className="trust_item" key={i}>
                  <img src={b?.icon} alt={b?.label} />
                  <span>{b?.label}</span>

                  {i < trustData.length - 1 && <div className="trust_sep" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="features_section">
          <div className="pg_contain">
            <div className="sec_head">
              <h2> {content?.section1_heading}</h2>
              <p>
                <Text string={content?.section1_text} />
              </p>
            </div>
            <div className="features_grid">
              {home_features.map((f, i) => (
                <div
                  className={`feat_card${i === home_features.length - 1 ? " wide" : ""}`}
                  key={f.title}
                >
                  <div className="feat_icon_box">
                    <img src={cmsFileUrl(f?.image, "images")} alt={f?.title} />
                  </div>
                  <h3>{f?.title}</h3>
                  <p>
                    <Text string={f?.txt1} />
                  </p>
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
                <h2>{content?.section2_heading}</h2>
                <p className="zk_desc">
                  <Text string={content?.section2_text} />
                </p>
                {/* <ul className="zk_points">
                  {ZK_POINTS.map((p) => (
                    <li key={p.title}>
                      <div className="pt_icon">{p.icon}</div>
                      <div className="pt_body">
                        <h4>{p.title}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul> */}
                <Link href={content?.section2_lnk_url1} className="btn_ghost">
                  {content?.section2_lnk_txt1}
                </Link>
              </div>

              <div className="zk_right">
                <div className="zk_img_wrap">
                  <img
                    src={cmsFileUrl(content?.image1, "images")}
                    alt={content?.section2_heading}
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
              <h2> {content?.section3_heading}</h2>
              <p>
                <Text string={content?.section3_text} />
              </p>
            </div>

            <div className="custody_timeline">
              {CUSTODY_STEPS.map((step, i) => (
                <div key={i} className="cust_row">
                  <div className="cust_left_col">
                    {step?.side === "right" && (
                      <>
                        <h3>{step?.title}</h3>
                        <p>
                          <Text string={step?.desc} />
                        </p>
                      </>
                    )}
                  </div>

                  <div className="cust_mid">
                    <div className="c_icon_box">
                      <img
                        src={cmsFileUrl(step?.icon, "images")}
                        alt={step?.title}
                      />
                    </div>
                  </div>

                  <div className="cust_right_col">
                    {step?.side === "left" && (
                      <>
                        <h3>{step?.title}</h3>
                        <p>
                          <Text string={step?.desc} />
                        </p>
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
              <h2> {content?.section4_heading}</h2>
              <p>
                <Text string={content?.section4_text} />
              </p>
            </div>

            <div className="prec_card">
              <div className="prec_header">
                <h4>Active Inheritance Plan</h4>
                <span className="prec_badge">MONITORING</span>
              </div>

              <div className="prec_section">
                <div className="trig_top">
                  <span className="trig_label">
                    Inactivity Trigger Countdown
                  </span>
                  <span className="trig_count">180 Days Remaining</span>
                </div>
                <div className="prog_bar">
                  <div className="prog_fill" />
                </div>
                <div className="trig_note">
                  Last verified ping: Today, 09:41 UTC
                </div>
              </div>

              <div className="prec_section">
                <div className="bene_label">Registered Beneficiaries</div>
                <ul className="bene_list">
                  {[
                    { av: "A", name: "Alexander H.", alloc: "50%" },
                    { av: "E", name: "Elena M.", alloc: "50%" },
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
                  src={cmsFileUrl(content?.image7, "images")}
                  alt={content?.section5_heading}
                />
              </div>

              <div className="comp_content">
                <h2>{content?.section5_heading}</h2>
                <p className="comp_desc">
                  <Text string={content?.section5_text} />
                </p>
                <div className="comp_badges">
                  {COMPLIANCE_BADGES.map((b, i) => (
                    <div className="cb_item" key={i}>
                      <div className="cb_icon">
                        <img
                          src={cmsFileUrl(b?.icon, "images")}
                          alt={b?.name}
                        />
                      </div>

                      <div className="cb_text">
                        <div className="cb_name">{b?.name}</div>
                        <div className="cb_label">{b?.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hsm_block">
                  <div className="hsm_heading">
                    <img
                      src="/images/front-images/hsm-icon.png"
                      alt={content?.section5_sub_heading}
                      className="hsm_icon"
                    />
                    <h4>{content?.section5_sub_heading}</h4>
                  </div>
                  <p>
                    <Text string={content?.section5_sub_text} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="testimonials_section">
          <div className="pg_contain">
            <div className="sec_head">
              <h2>{content?.testi_heading}</h2>
              <p>
                <Text string={content?.testi_text} />
              </p>
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
                  <button
                    className="test_arrow test_prev"
                    aria-label="Previous"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                }
                nextArrow={
                  <button className="test_arrow test_next" aria-label="Next">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                }
                responsive={[
                  {
                    breakpoint: 1025,
                    settings: { slidesToShow: 2, slidesToScroll: 1 },
                  },
                  {
                    breakpoint: 769,
                    settings: { slidesToShow: 1, slidesToScroll: 1 },
                  },
                ]}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="test_slide">
                    <div className="test_card">
                      <span className="test_qdeco">&ldquo;</span>
                      <p className="t_quote">
                        <Text string={t?.message} />
                      </p>
                      <div className="t_author">
                        <strong className="t_name">{t?.name}</strong>
                        <span className="t_role">{t?.designation}</span>
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
    </>
  );
}

// Home.getLayout = function (page) {
//   return <Layout>{page}</Layout>;
// };
