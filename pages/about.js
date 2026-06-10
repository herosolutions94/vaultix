import Link from "next/link";
import Layout from "@/components/layout";

import http from "@/helpers/http";
import { parse } from "cookie";
import { doObjToFormData } from "@/helpers/helpers";
import MetaGenerator from "@/components/meta-generator";
import Text from "@/components/text";
import { cmsFileUrl } from "@/helpers/helpers";

const WHY_CARDS = [
  {
    icon: "/images/front-images/vault-exist-icon1.png",
    title: "Privacy by Architecture",
    desc: "Systems designed from the ground up where privacy isn't a policy, but a mathematical certainty.",
  },
  {
    icon: "/images/front-images/vault-exist-icon2.png",
    title: "End-to-End Encryption",
    desc: "Encryption keys never leave your device. We store encrypted fragments that only you can assemble.",
  },
  {
    icon: "/images/front-images/vault-exist-icon3.png",
    title: "User-Controlled Access",
    desc: "Granular control over who accesses what, and under which specific verified conditions.",
  },
  {
    icon: "/images/front-images/vault-exist-icon4.png",
    title: "Long-Term Legacy",
    desc: "Automated protocols that ensure your digital wishes are honored even when you are unable to act.",
  },
];

const PROTOCOL_STEPS = [
  {
    icon: "/images/front-images/l1.png",
    title: "Inactivity Detection",
    desc: "Customizable 'Dead Man's Switch' monitoring your presence across configured heartbeat signals.",
    side: "left",
    color: "gold",
  },
  {
    icon: "/images/front-images/l2.png",
    title: "Verification Stages",
    desc: "Multi-channel attempts to verify status before protocol advancement, including trusted contacts notification.",
    side: "right",
    color: "teal",
  },
  {
    icon: "/images/front-images/l3.png",
    title: "Beneficiary Activation",
    desc: "Pre-designated beneficiaries are securely notified and guided through identity verification.",
    side: "left",
    color: "gold",
  },
  {
    icon: "/images/front-images/l4.png",
    title: "Secure Release",
    desc: "Encryption fragments are released to beneficiaries, allowing them to decrypt only the data you intended for them.",
    side: "right",
    color: "teal",
  },
];

const PRINCIPLES = [
  {
    num: "01",
    color: "gold",
    title: "Zero-Knowledge Architecture",
    desc: "We store nothing in plain text. Your password is never seen by our servers. Your data is invisible to us.",
  },
  {
    num: "02",
    color: "teal",
    title: "Immutable Audit Logs",
    desc: "Every access attempt is recorded on a tamper-proof ledger, providing a permanent record of vault security.",
  },
  {
    num: "03",
    color: "gold",
    title: "Global Custody Nodes",
    desc: "Data fragments are geographically distributed across sovereign jurisdictions to ensure physical resilience.",
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
    .post("about-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function About({ result }) {
  const { page_title, meta_desc, content, home_features, testimonials } =
    result;

  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <div className="about_page">
        {/* ── HERO ── */}
        <section className="ab_hero">
          <div className="pg_contain">
            <div className="ab_hero_wrap">
              <div className="ab_hero_left">
                <div className="ab_badge">About Vaultix</div>
                <h1>
                  Built to Protect Digital Legacy with Institutional-Grade
                  Security
                </h1>
                <p>
                  Vaultix combines end-to-end encryption, inheritance
                  automation, and zero-knowledge architecture to preserve
                  digital assets, confidential documents, and legacy
                  instructions securely for future generations.
                </p>
                <div className="ab_hero_btns">
                  <Link href="/security" className="btn_gold">
                    Explore Security Architecture
                  </Link>
                  <Link href="/dashboard" className="btn_ghost">
                    Open Secure Vault
                  </Link>
                </div>
              </div>

              <div className="ab_hero_right">
                <img
                  src="/images/front-images/about-hero-gradient.png"
                  alt=""
                  className="ab_hero_grad"
                />
                <div className="ab_hero_img_box">
                  <img
                    src="/images/front-images/about-hero.png"
                    alt="Vaultix Platform"
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
                <h2>Why Vaultix Exists</h2>
                <p className="ab_why_sub">
                  Digital legacy preservation vs traditional cloud storage.
                </p>
              </div>
              <div className="ab_why_right">
                <p>
                  Traditional cloud providers focus on availability and
                  accessibility, but they lack the sovereign safeguards required
                  for multi-generational wealth and legacy instructions. If you
                  lose access, or in the event of an unforeseen passing,
                  traditional systems often lock your data forever or subject
                  beneficiaries to months of legal friction.
                </p>
                <p>
                  Vaultix was founded on the principle that digital assets
                  deserve the same level of legal and technical protection as
                  physical safety deposit boxes, combined with the power of
                  cryptographic automation. We don't just store files; we secure
                  the continuity of your digital existence.
                </p>
              </div>
            </div>

            <div className="ab_why_cards">
              {WHY_CARDS.map((c) => (
                <div className="ab_why_card" key={c.title}>
                  <div className="ab_why_icon">
                    <img src={c.icon} alt={c.title} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
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
                <h2>
                  Eradicating the risk of lost digital assets through autonomous
                  inheritance.
                </h2>
                <p>
                  The modern financial landscape has created a critical
                  vulnerability: the permanent loss of digital wealth due to
                  lost keys, unforeseen circumstances, or inadequate succession
                  planning.
                </p>
                <p>
                  Vaultix was founded to solve this single, monumental
                  challenge. We provide a zero-trust, automated inheritance
                  protocol that guarantees your assets reach their intended
                  beneficiaries, exactly when intended, without relying on human
                  intermediaries.
                </p>
              </div>

              <div className="ab_mission_right">
                <div className="ab_mission_img_box">
                  <div className="ab_mission_img_inner">
                    <img
                      src="/images/front-images/about1.png"
                      alt="Vaultix Mission"
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
              <h2>The Legacy Activation Protocol</h2>
            </div>
            <div className="ab_proto_timeline">
              {PROTOCOL_STEPS.map((step) => (
                <div className="ab_proto_row" key={step.title}>
                  <div className="ab_proto_left">
                    {step.side === "left" && (
                      <>
                        <h3 className={`proto_title ${step.color}`}>
                          {step.title}
                        </h3>
                        <p>{step.desc}</p>
                      </>
                    )}
                  </div>

                  <div className="ab_proto_mid">
                    <div className={`ab_proto_icon ${step.color}`}>
                      <img src={step.icon} alt={step.title} />
                    </div>
                  </div>

                  <div className="ab_proto_right">
                    {step.side === "right" && (
                      <>
                        <h3 className={`proto_title ${step.color}`}>
                          {step.title}
                        </h3>
                        <p>{step.desc}</p>
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
              {PRINCIPLES.map((p) => (
                <div className={`ab_prin_card ${p.color}`} key={p.num}>
                  <span className="prin_num">PRINCIPLE {p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ZERO ACCESS STATEMENT ── */}
        <section className="ab_statement">
          <div className="pg_contain">
            <h2>&ldquo;Vaultix Cannot Access Your Data.&rdquo;</h2>
            <p>
              This isn&apos;t a promise of integrity—it is a mathematical
              impossibility. By utilizing client-side encryption, your
              decryption keys never touch our infrastructure. Even under legal
              compulsion, Vaultix holds nothing but encrypted cipher-text that
              we cannot read.
            </p>
            <div className="ab_stats">
              <div className="ab_stat_item">
                <span className="stat_val">256-bit</span>
                <span className="stat_label">Encryption Standard</span>
              </div>
              <div className="ab_stat_item">
                <span className="stat_val">100%</span>
                <span className="stat_label">Client-Side Logic</span>
              </div>
              <div className="ab_stat_item">
                <span className="stat_val">0</span>
                <span className="stat_label">Data Breaches</span>
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
    </>
  );
}

About.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
