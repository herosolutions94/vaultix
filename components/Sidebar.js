"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const VaultixLogo = () => (
  <img src="/images/logo.png" alt="" />
);

const IconDashboard = () => (
  <img src="/images/dashboard/dashboard.svg" alt="" />
);

const IconVault = () => (
   <img src="/images/dashboard/vault.svg" alt="" />
);

const IconBeneficiaries = () => (
   <img src="/images/dashboard/beneficiary.svg" alt="" />
);

const IconTrigger = () => (
   <img src="/images/dashboard/trigger.svg" alt="" />
);

const IconActivity = () => (
   <img src="/images/dashboard/activity.svg" alt="" />
);

const IconSubscription = () => (
   <img src="/images/dashboard/subscription.svg" alt="" />
);

const IconSettings = () => (
   <img src="/images/dashboard/settings.svg" alt="" />
);

const IconChevron = ({ open }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}>
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


// ─── Nav config ───────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: <IconDashboard /> },
  {
    label: "My Vault",
    href: "/dashboard/vault",
    icon: <IconVault />,
    children: [
      { label: "Documents", href: "/dashboard/vault/documents" },
      { label: "Passwords", href: "/dashboard/vault/passwords" },
      { label: "Accounts", href: "/dashboard/vault/accounts" },
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

// ─── Component ────────────────────────────────────────────
export default function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState({ "/dashboard/vault": false });

  const toggle = (href) =>
    setOpenMenus((prev) => ({ ...prev, [href]: !prev[href] }));

  const isActive = (href) =>
    pathname === href || (href !== "/dashboard" && pathname.startsWith(href));

  return (
    <aside className="sidebar">
  {/* Logo */}
      <div className="logo">
        <VaultixLogo />
        <span className="logo-text">VAULTIX</span>
      </div>

      {/* Main nav */}
      <nav className="nav">
        {NAV_ITEMS.map((item) => (
          <div key={item.href}>
            {item.children ? (
              <>
                <button
                  className={`nav-item ${isActive(item.href) ? "active" : ""}`}
                  onClick={() => toggle(item.href)}
                  aria-expanded={openMenus[item.href]}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <span className="chevron">
                    <IconChevron open={openMenus[item.href]} />
                  </span>
                </button>

                <div
                  className="sub-menu"
                  style={{ maxHeight: openMenus[item.href] ? "200px" : "0" }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`sub-item ${
                        pathname === child.href ? "sub-active" : ""
                      }`}
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
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom nav */}
      <div className="bottom-nav">
        {BOTTOM_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${isActive(item.href) ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}

        <button className="lock-btn">
          LOCK VAULT
        </button>
      </div>
    </aside>
  );
}
