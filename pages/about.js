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
    .post("about-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function About({ result }) {
  const { page_title, meta_desc, content, why_us, site_settings, cta_section } =
    result;

  ///// protocol steps //////

  const PROTOCOL_STEPS = [3, 4, 5, 6]
    .map((i) => ({
      icon: content?.[`image${i}`],
      title: content?.[`sec3_card_heading${i}`],
      desc: content?.[`sec3_card_text${i}`],
      side: i % 2 !== 0 ? "left" : "right",
      color: i % 2 !== 0 ? "gold" : "teal",
    }))
    .filter((item) => item.title || item.desc || item.icon);

  ////// principle /////

  const PRINCIPLES = [1, 2, 3]
    .map((i) => ({
      num: String(i).padStart(2, "0"),
      color: i % 2 !== 0 ? "gold" : "teal",
      title: content?.[`sec4_card_heading${i}`],
      desc: content?.[`sec4_card_text${i}`],
    }))
    .filter((item) => item?.title || item?.desc);

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_desc={meta_desc}
      />
      <div className="about_page">
        {/* ── HERO ── */}
        <section className="ab_hero">
          <div className="pg_contain">
            <div className="ab_hero_wrap">
              <div className="ab_hero_left">
                <div className="ab_badge">{content?.banner_title}</div>
                <h1>
                  <Text string={content?.banner_heading} />
                </h1>
                <p>
                  <Text string={content?.banner_text} />
                </p>
                <div className="ab_hero_btns">
                  <Link href={content?.banner_lnk_url1} className="btn_gold">
                    {content?.banner_lnk_txt1}
                  </Link>
                  <Link href={content?.banner_lnk_url2} className="btn_ghost">
                    {content?.banner_lnk_txt2}
                  </Link>
                </div>
              </div>

              <div className="ab_hero_right">
                <img
                  src="/images/front-images/about-hero-gradient.png"
                  alt={content?.banner_heading}
                  className="ab_hero_grad"
                />
                <div className="ab_hero_img_box">
                  <img
                    src={cmsFileUrl(content?.image1, "images")}
                    alt={content?.banner_heading}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY VAULTIX EXISTS ── */}
        <section className="ab_why">
          <div className="pg_contain">
            <div className="ab_why_top">
              <div className="ab_why_left">
                <h2> {content?.section1_heading}</h2>
                <p className="ab_why_sub">
                  <Text string={content?.section1_left_text} />
                </p>
              </div>
              <div className="ab_why_right">
                <Text string={content?.section1_right_text} />
              </div>
            </div>

            <div className="ab_why_cards">
              {why_us.map((c) => (
                <div className="ab_why_card" key={c?.title}>
                  <div className="ab_why_icon">
                    <img src={cmsFileUrl(c?.image, "images")} alt={c?.title} />
                  </div>
                  <h3>{c?.title}</h3>
                  <p>
                    <Text string={c?.txt1} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section className="ab_mission">
          <div className="pg_contain">
            <div className="ab_mission_wrap">
              <div className="ab_mission_left">
                <h2>{content?.section2_heading}</h2>
                <Text string={content?.section2_text} />
              </div>

              <div className="ab_mission_right">
                <div className="ab_mission_img_box">
                  <div className="ab_mission_img_inner">
                    <img
                      src={cmsFileUrl(content?.image2, "images")}
                      alt={content?.section2_heading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEGACY ACTIVATION PROTOCOL ── */}
        <section className="ab_protocol">
          <div className="pg_contain">
            <div className="sec_head">
              <h2>{content?.section3_heading}</h2>
            </div>
            <div className="ab_proto_timeline">
              {PROTOCOL_STEPS.map((step, index) => (
                <div className="ab_proto_row" key={index}>
                  <div className="ab_proto_left">
                    {step.side === "left" && (
                      <>
                        <h3 className={`proto_title ${step?.color}`}>
                          {step?.title}
                        </h3>
                        <p>{step?.desc}</p>
                      </>
                    )}
                  </div>

                  <div className="ab_proto_mid">
                    <div className={`ab_proto_icon ${step?.color}`}>
                      <img
                        src={cmsFileUrl(step?.icon, "images")}
                        alt={step?.title}
                      />
                    </div>
                  </div>

                  <div className="ab_proto_right">
                    {step.side === "right" && (
                      <>
                        <h3 className={`proto_title ${step?.color}`}>
                          {step?.title}
                        </h3>
                        <p>{step?.desc}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRINCIPLES ── */}
        <section className="ab_principles">
          <div className="pg_contain">
            <div className="ab_prin_grid">
              {PRINCIPLES?.map((p) => (
                <div className={`ab_prin_card ${p?.color}`} key={p?.num}>
                  <span className="prin_num">PRINCIPLE {p?.num}</span>

                  <h3>{p?.title}</h3>

                  <p>
                    <Text string={p?.desc} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ZERO ACCESS STATEMENT ── */}
        <section className="ab_statement">
          <div className="pg_contain">
            <Text string={content?.section5_text} />
            <div className="ab_stats">
              <div className="ab_stat_item">
                <span className="stat_val">{content?.sec5_card_value1} </span>
                <span className="stat_label">
                  {content?.sec5_card_heading1}
                </span>
              </div>
              <div className="ab_stat_item">
                <span className="stat_val">{content?.sec5_card_value2} </span>
                <span className="stat_label">
                  {content?.sec5_card_heading2}
                </span>
              </div>
              <div className="ab_stat_item">
                <span className="stat_val">{content?.sec5_card_value3} </span>
                <span className="stat_label">
                  {content?.sec5_card_heading3}
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
