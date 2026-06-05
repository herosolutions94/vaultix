import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const ASSET_TYPES = [
  { label: "Crypto Vault",    icon: "/images/dashboard/bitcoin.svg" },
  { label: "Legal Deeds",     icon: "/images/dashboard/legal-document.svg" },
  { label: "Secret Keys",     icon: "/images/dashboard/key.svg" },
];

const TIMELINE = [
  { status: "COMPLETED",   label: "Inheritance Received", variant: "completed" },
  { status: "IN PROGRESS", label: "Asset Re-vaulting",    variant: "progress" },
  { status: "PENDING",     label: "Rule Validation",      variant: "pending" },
  { status: "QUEUED",      label: "Continuity Active",    variant: "queued" },
];

export default function Legacy() {
  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main">

          <div className="dash_header">
            <div className="left_col">
              <h2>Continue Your Legacy</h2>
              <p>Protect inherited assets by creating your own inheritance plan. Your digital lineage deserves the same permanence as physical capital.</p>
            </div>
            <div className="right_col">
              <div className="tag_enc">
                <img src="/images/dashboard/green-check.svg" alt="" />
                <span>End-to-End Encrypted Session</span>
              </div>
            </div>
          </div>

          {/* Step 01 */}
          <div className="leg_step_card">
            <div className="leg_step_head">
              <div className="leg_step_left">
                <span className="leg_step_num">01</span>
                <span className="leg_step_title">Add Assets</span>
              </div>
              <span className="leg_step_required">Step Required</span>
            </div>
            <p className="leg_step_desc">Identify and link the digital assets, keys, and legal documents you wish to secure for the next generation.</p>
            <div className="leg_asset_types">
              {ASSET_TYPES.map((a) => (
                <button key={a.label} className="leg_asset_btn">
                  <img src={a.icon} alt={a.label} />
                  <span>{a.label}</span>
                </button>
              ))}
            </div>
            <Link href="/dashboard/vault/assets/add-asset" className="leg_start_link">
              Start Planning
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Steps 02 + 03 */}
          <div className="leg_two_col">
            <div className="leg_step_card">
              <div className="leg_step_head">
                <div className="leg_step_left">
                  <span className="leg_step_num">02</span>
                  <span className="leg_step_title">Assign Beneficiaries</span>
                </div>
              </div>
              <p className="leg_step_desc">Define who receives access and specify the tiered hierarchy for your asset distribution.</p>
              <Link href="/dashboard/beneficiaries/add-beneficiary" className="site_btn blank white leg_step_btn">Add Beneficiary</Link>
            </div>

            <div className="leg_step_card">
              <div className="leg_step_head">
                <div className="leg_step_left">
                  <span className="leg_step_num">03</span>
                  <span className="leg_step_title">Configure Triggers</span>
                </div>
              </div>
              <p className="leg_step_desc">Set the deterministic logic — such as inactivity periods or verified legal events — to execute your will.</p>
              <Link href="/dashboard/triggers" className="site_btn blank white leg_step_btn">Create Trigger</Link>
            </div>
          </div>

          {/* Workflow Timeline */}
          <div className="leg_timeline_section">
            <h3 className="leg_timeline_title">Workflow Timeline</h3>
            <p className="leg_timeline_sub">The chronological execution path of your inheritance plan.</p>

            <div className="leg_timeline">
              {TIMELINE.map((step, idx) => (
                <div key={idx} className="leg_timeline_step">
                  {idx < TIMELINE.length - 1 && (
                    <div className={`leg_tl_line leg_tl_line_${step.variant}`} />
                  )}
                  <div className={`leg_tl_dot leg_tl_dot_${step.variant}`} />
                  <span className={`leg_tl_status leg_tl_status_${step.variant}`}>{step.status}</span>
                  <span className={`leg_tl_label${step.variant === "pending" || step.variant === "queued" ? " leg_tl_label_muted" : ""}`}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="leg_warning_card">
            <img src="/images/dashboard/lock.svg" alt="" className="leg_warning_icon" />
            <div>
              <p className="leg_warning_title">Unprotected Assets Detected</p>
              <p className="leg_warning_text">We have identified 3 inherited vaults that currently lack a successor protocol. Your legacy is at risk until a new plan is finalized.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

Legacy.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
