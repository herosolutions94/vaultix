import Link from "next/link";
import React from "react";
import Text from "./text";

export default function Cta_section({ cta_section }) {
  return (
    <>
      <section className="cta_section">
        <img
          src="/images/front-images/cta-bg.png"
          alt={cta_section?.cta_heading}
          className="cta_bg_img"
        />
        <img
          src="/images/front-images/cta-gradient.png"
          alt={cta_section?.cta_heading}
          className="cta_grad_img"
        />
        <div className="pg_contain">
          <div className="cta_ico">
            <img
              src="/images/front-images/cta-icon.png"
              alt={cta_section?.cta_heading}
            />
          </div>
          <h2>
            <Text string={cta_section?.cta_heading} />
          </h2>
          <p>
            <Text string={cta_section?.cta_text} />
          </p>
          <div className="cta_btns">
            <Link href={cta_section?.cta_lnk_url1} className="btn_gold">
              {cta_section?.cta_btn_text1}
            </Link>
            <Link href={cta_section?.cta_lnk_url2} className="btn_ghost">
              {cta_section?.cta_btn_text2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
