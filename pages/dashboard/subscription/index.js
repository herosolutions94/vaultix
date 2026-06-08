import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const PLANS = [
  {
    id: "preview",
    tag: "DISCOVERY",
    name: "Preview",
    price: "$0",
    period: "/mo",
    features: [
      { icon: "check", text: "3 Basic Vaults" },
      { icon: "check", text: "1 Beneficiary" },
      { icon: "check", text: "Standard Encryption" },
    ],
    btnLabel: "GET STARTED",
    btnClass: "site_btn blank white",
    current: false,
  },
  {
    id: "monthly",
    tag: "FLEXIBLE",
    name: "Monthly",
    price: "$125",
    period: "/mo",
    features: [
      { icon: "check", text: "Unlimited Assets" },
      { icon: "check", text: "5 Beneficiaries" },
      { icon: "check", text: "Biometric Triggers" },
    ],
    btnLabel: "SELECT MONTHLY",
    btnClass: "site_btn blank white",
    current: false,
  },
  {
    id: "annual",
    tag: "RECOMMENDED",
    name: "Annual",
    price: "$1,200",
    period: "/yr",
    features: [
      { icon: "check", text: "Everything in Monthly" },
      { icon: "check", text: "Multi-sig Governance" },
      { icon: "check", text: "Priority Concierge" },
      { icon: "check", text: "Save 20% vs Monthly" },
    ],
    btnLabel: "ACTIVE PLAN",
    btnClass: "site_btn color sub_active_btn",
    current: true,
    currentBadge: true,
  },
  {
    id: "lifetime",
    tag: "PERPETUAL",
    tagExtra: "FOUNDER ACCESS",
    name: "Lifetime",
    price: "$25,000",
    period: "/once",
    features: [
      { icon: "star", text: "Sovereignty Keys" },
      { icon: "star", text: "Quantum-Resistant" },
      { icon: "star", text: "24/7 Forensic Support" },
      { icon: "star", text: "Estate Audit Log" },
    ],
    btnLabel: "BECOME FOUNDER",
    btnClass: "site_btn sub_founder_btn",
    current: false,
  },
];

export default function Subscription() {
  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main">

          {/* Page Header */}
          <div className="dash_header">
            <div className="left_col">
              <h2>Vault Subscription</h2>
              <p>Manage your digital legacy across tiers of absolute sovereignty.<br />Institutional custody active.</p>
            </div>
            <div className="right_col">
              <div className="tag_enc">
                <img src="/images/dashboard/green-check.svg" alt="" />
                <span>END-TO-END ENCRYPTED SESSION</span>
              </div>
            </div>
          </div>

          {/* Current Plan Banner */}
          <div className="sub_current_banner">
            <div className="sub_banner_left">
              <div className="sub_banner_icon">
                <img src="/images/dashboard/vaultix_annual_badge.svg" alt="" />
              </div>
              <div className="sub_banner_info">
                <div className="sub_banner_name_row">
                  <span className="sub_banner_plan_name">Vaultix Annual</span>
                  <span className="sub_banner_badge">CURRENT PLAN</span>
                </div>
                <p className="sub_banner_expiry">Your institutional license expires on &nbsp;<strong>October 24, 2026</strong></p>
              </div>
            </div>
            <div className="sub_banner_right">
              <span className="sub_banner_next_label">NEXT PAYMENT</span>
              <span className="sub_banner_amount">$1,200.00</span>
            </div>
          </div>

          {/* Update Membership */}
          <h3 className="sub_section_title">Update Your Membership</h3>

          <div className="sub_plans_grid">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`sub_plan_card${plan.current ? " sub_plan_current" : ""}`}
              >
                {plan.currentBadge && (
                  <div className="sub_plan_current_badge">CURRENT PLAN</div>
                )}

                <div className="sub_plan_tags">
                  <span className={`sub_plan_tag${plan.current ? " sub_plan_tag_gold" : ""}`}>
                    {plan.tag}
                  </span>
                  {plan.tagExtra && (
                    <span className="sub_plan_tag sub_plan_tag_outlined">{plan.tagExtra}</span>
                  )}
                </div>

                <div className={`sub_plan_name${plan.current ? " sub_plan_name_gold" : ""}`}>
                  {plan.name}
                </div>

                <div className="sub_plan_price_row">
                  <span className="sub_plan_price">{plan.price}</span>
                  <span className="sub_plan_period">{plan.period}</span>
                </div>

                <ul className="sub_plan_features">
                  {plan.features.map((f, i) => (
                    <li key={i} className="sub_plan_feature_item">
                      {f.icon === "star" ? (
                        <span className="sub_feat_star">★</span>
                      ) : (
                        <svg className="sub_feat_check" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <button className={`sub_plan_btn ${plan.btnClass}`}>
                  {plan.btnLabel}
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

Subscription.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
