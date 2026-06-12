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

  const authToken = cookieValue["authToken"] || "";

  const result = await http
    .post("faqs-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response?.data?.message);

  return { props: { result } };
};

export default function FAQ({ result }) {
  const {
    page_title,
    meta_desc,
    content,
    site_settings,
    faq_categories,
    cta_section,
  } = result;

  const [active, setActive] = useState(faq_categories?.[0]?.slug || "");
  const [search, setSearch] = useState("");

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredCategories = faq_categories?.filter((category) =>
    category?.category_faqs?.some((faq) => {
      const term = search.toLowerCase();

      return (
        faq?.question?.toLowerCase().includes(term) ||
        faq?.answer?.toLowerCase().includes(term)
      );
    }),
  );

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_desc={meta_desc}
      />

      <div className="faq_page">
        {/* ── HERO ── */}
        <section className="fq_hero">
          <div className="pg_contain">
            <div className="fq_hero_wrap">
              <div className="fq_hero_left">
                <div className="fq_badge">{content?.banner_title}</div>

                <h1>
                  <Text string={content?.banner_heading} />
                </h1>

                <p>
                  <Text string={content?.banner_text} />
                </p>

                {/* SEARCH */}
                <div className="fq_search_wrap">
                  <svg
                    className="fq_search_icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>

                  <input
                    type="text"
                    className="fq_search_input"
                    placeholder="Search security, encryption, or inheritance topics..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="fq_hero_right">
                <img
                  src={cmsFileUrl(content?.image1, "images")}
                  alt={content?.banner_heading}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ BODY ── */}
        <section className="fq_body">
          <div className="pg_contain">
            <div className="fq_body_wrap">
              {/* SIDEBAR */}
              <aside className="fq_sidebar">
                <p className="fq_sidebar_label">System Pillars</p>

                <nav className="fq_nav">
                  {filteredCategories?.map((category) => (
                    <button
                      key={category?.id}
                      className={`fq_nav_link${
                        active === category?.slug ? " fq_nav_active" : ""
                      }`}
                      onClick={() => scrollTo(category?.slug)}
                    >
                      {category?.name}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* CONTENT */}
              <div className="fq_content">
                {filteredCategories?.map((category) => (
                  <div
                    key={category?.id}
                    id={category?.slug}
                    className="fq_section"
                  >
                    <div className="fq_sec_header">
                      <h2>{category?.name}</h2>
                    </div>

                    <div className="fq_items">
                      {category?.category_faqs
                        ?.filter((faq) => {
                          const term = search.toLowerCase();

                          return (
                            faq?.question?.toLowerCase().includes(term) ||
                            faq?.answer?.toLowerCase().includes(term)
                          );
                        })
                        ?.map((faq) => (
                          <div className="fq_item" key={faq?.id}>
                            <h3>{faq?.question}</h3>

                            <Text string={faq?.answer} />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
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
