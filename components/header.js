import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Text from "@/components/text";
import { cmsFileUrl } from "@/helpers/helpers";

export default function Header({ siteSettings }) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setToggle(false);

  useEffect(() => {
    if (toggle) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [toggle]);

  useEffect(() => {
    const handleScroll = () => {
      if (toggle) return;
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggle]);

  useEffect(() => {
    setToggle(false);
  }, [router.pathname]);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/security", label: "Security" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className={`site_header ${scrolled ? "scrolled" : ""}`}>
      <div className="header_wrap">
        {/* Logo */}
        <div className="hdr_logo">
          <Link href="/" onClick={closeMenu}>
            <img
              src={cmsFileUrl(siteSettings?.site_logo, "images")}
              alt={siteSettings?.site_name}
            />
          </Link>
        </div>

        {/* Center Nav */}
        <nav className={`hdr_nav ${toggle ? "open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={router.pathname === link.href ? "active" : ""}
              >
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTAs */}
        <div className="hdr_cta">
          <Link href="/contact" className="hdr_contact" onClick={closeMenu}>
            Contact Us
          </Link>
          <Link
            href="/dashboard"
            className="hdr_access_btn"
            onClick={closeMenu}
          >
            Access Vault
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hdr_hamburger ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="hdr_mobile_menu">
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={router.pathname === link.href ? "active" : ""}
              >
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hdr_mobile_cta">
            <Link href="/contact" className="hdr_contact" onClick={closeMenu}>
              Contact Us
            </Link>
            <Link
              href="/dashboard"
              className="hdr_access_btn"
              onClick={closeMenu}
            >
              Access Vault
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
