"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// ─── Icons ─────────────────────────────
const VaultixLogo = () => <img src="/images/logo.png" alt="" />;

const IconDashboard = () => <img src="/images/dashboard/dashboard.svg" alt="" />;
const IconVault = () => <img src="/images/dashboard/vault.svg" alt="" />;
const IconBeneficiaries = () => <img src="/images/dashboard/beneficiary.svg" alt="" />;
const IconTrigger = () => <img src="/images/dashboard/trigger.svg" alt="" />;
const IconActivity = () => <img src="/images/dashboard/activity.svg" alt="" />;
const IconSubscription = () => <img src="/images/dashboard/subscription.svg" alt="" />;
const IconSettings = () => <img src="/images/dashboard/settings.svg" alt="" />;

const IconChevron = ({ open }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 14 14"
    fill="none"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.25s ease",
    }}
  >
    <path
      d="M3 5l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Nav Data ─────────────────────────
const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: <IconDashboard /> },

  {
    label: "My Vault",
    href: "/dashboard/vault",
    icon: <IconVault />,
    children: [
      { label: "All Assets", href: "/dashboard/vault/assets" },
      { label: "Categories", href: "/dashboard/vault/categories" },
    ],
  },

  { label: "Beneficiaries", href: "/dashboard/beneficiaries", icon: <IconBeneficiaries /> },
  { label: "Trigger Monitoring", href: "/dashboard/triggers", icon: <IconTrigger /> },
  { label: "Activity Logs", href: "/dashboard/activity", icon: <IconActivity /> },
];

const BOTTOM_NAV = [
  { label: "Subscription", href: "/dashboard/subscription", icon: <IconSubscription /> },
  { label: "Settings", href: "/dashboard/settings", icon: <IconSettings /> },
];

// ─── Component ─────────────────────────
export default function Sidebar() {
  const pathname = usePathname() || "";
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setMobileOpen((prev) => !prev);
    window.addEventListener("toggleSidebar", handleToggle);
    return () => window.removeEventListener("toggleSidebar", handleToggle);
  }, []);

  const closeSidebar = () => setMobileOpen(false);

  // ✅ Vault submenu auto open based on route
  const isVaultOpen = pathname.startsWith("/dashboard/vault");

  // ✅ Active helper
  const isActive = (href) => {
    if (!pathname) return false;
    return pathname === href;
  };

  const isParentActive = (href) => {
    return pathname.startsWith(href);
  };

  return (
    <>
    <aside className={`sidebar${mobileOpen ? " mobile-open" : ""}`}>
      <button className="sidebar-close-btn" onClick={closeSidebar} aria-label="Close menu">
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      {/* Logo */}
      <Link href="/dashboard" className="side_logo">
        <VaultixLogo />
      </Link>

      {/* Main nav */}
      <div className="side_nav">
        {NAV_ITEMS.map((item) => (
          <div key={item.href}>
            {item.children ? (
              <>
                {/* Parent */}
                <Link
                  href={item.href}
                  className={`nav-item ${isParentActive(item.href) ? "active" : ""}`}
                  onClick={closeSidebar}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <span className="chevron">
                    <IconChevron open={isVaultOpen} />
                  </span>
                </Link>

                {/* Submenu (auto open from route) */}
                <div
                  className="sub-menu"
                  style={{
                    maxHeight: isVaultOpen ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`sub-item ${
                        pathname === child.href ? "sub-active" : ""
                      }`}
                      onClick={closeSidebar}
                    >
                      <span className="sub-dot" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href}
                className={`nav-item ${isActive(item.href) ? "active" : ""}`}
                onClick={closeSidebar}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="bottom-nav">
        {BOTTOM_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${isActive(item.href) ? "active" : ""}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}

        <div className="lock-btn">
          <button>LOCK VAULT</button>
        </div>
      </div>
    </aside>
    <div
      className={`sidebar-overlay${mobileOpen ? " active" : ""}`}
      onClick={closeSidebar}
    />
    </>
  );
}