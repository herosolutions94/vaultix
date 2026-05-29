import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ToggleAction = () => setToggle(!toggle);
  const [closing, setClosing] = useState(false);
  const closeMenu = () => {
    if (toggle) {
      setClosing(true);
      setTimeout(() => {
        setToggle(false);
        setClosing(false);
      }, 500);
    }
  };

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
  return (
    <header
      className={`header ${isHome ? "home-header" : "inner-header"} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className={`top_nav ${scrolled ? "hide" : ""}`}>
        <div className="contain">
          <p>
            Free shipping on orders over $50 • Easy returns within 7 days •
            Worldwide delivery
          </p>
        </div>
      </div>

      <div className="contain-fluid">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>

        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>

        <nav
          id="nav"
          className={`${toggle ? "active" : ""} ${closing ? "closing" : ""}`}
        >
          <ul>
            <li>
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/how_work" onClick={closeMenu}>
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/measurement_guide" onClick={closeMenu}>
                Measurement Guide
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
          </ul>

          <div className="bTn desk">
            <div className="col">
              <div className="search">
                <button>
                  <img src="/images/search.png" alt="" />
                </button>
                <input type="text" placeholder="search" />
              </div>
            </div>
            <div className="col">
              <Link href="" onClick={closeMenu}>
                <img src="/images/user.png" alt="" />
              </Link>
            </div>
            <div className="col">
              <Link href="" onClick={closeMenu}>
                <img src="/images/box.png" alt="" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="mobile_icon">
          <div className="bTn">
            <div className="col">
              <div className="search">
                <button>
                  <img src="/images/search.png" alt="" />
                </button>
                <input type="text" placeholder="search" />
              </div>
            </div>
            <div className="col">
              <Link href="" onClick={closeMenu}>
                <img src="/images/user.png" alt="" />
              </Link>
            </div>
            <div className="col">
              <Link href="" onClick={closeMenu}>
                <img src="/images/box.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>
    </header>
  );
}
