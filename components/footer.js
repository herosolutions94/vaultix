import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="contain">
          <div className="flexRow">
            <div className="col">
              <div className="footerLogo">
                <p>
                  Custom fashion, designed by you and crafted to fit perfectly.
                  <br />
                  One-of-a-kind garments made from your sketches, photos, or
                  AI-generated ideas.
                </p>
                <div className="infoL flex">
                  <h4>Follow Us</h4>
                  <ul className="social flex">
                    <li>
                      <Link href="?" style={{ display: "block" }}>
                        <img src="images/facebook.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="?" style={{ display: "block" }}>
                        <img src="images/instagram.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="?" style={{ display: "block" }}>
                        <img src="images/linkedin.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="?" style={{ display: "block" }}>
                        <img src="images/twitter.png" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <h4>Explore</h4>
              <ul className="fst">
                <li>
                  <Link href="/"> Home</Link>
                </li>
                <li>
                  <Link href="how_work">How It Works</Link>
                </li>
                <li>
                  <Link href="">Upload Sketch</Link>
                </li>
                <li>
                  <Link href="/upload_image">Upload Photo</Link>
                </li>
                <li>
                  <Link href="/create_ai_step">Generate with AI</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Company</h4>
              <ul className="fst">
                <li>
                  <Link href="/about"> About Us</Link>
                </li>
                <li>
                  <Link href="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link href="/measurement_guide">Measurement Guide</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Legal</h4>
              <ul className="fst">
                <li>
                  <Link href="/imprint">Imprint</Link>
                </li>
                <li>
                  <Link href="">Shipping & Returns</Link>
                </li>
                <li>
                  <Link href="/privacy_policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li><span>Imprint must be completed before checkout.</span></li>
              </ul>
            </div>
            <div className="col">
              <h4>Need help?</h4>
              <ul className="fst">
                <li>
                  <Link href="/">0664-457-42483</Link>
                </li>
                <li>
                  <Link href="">uniqli@info.com</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_logo">
            <Link href="">
              <img src="images/logo.png" alt="" />
            </Link>
          </div>
          <div className="copyright relative">
            <div className="contain">
              <div className="inner">
                <p>Copyright © 2025, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
