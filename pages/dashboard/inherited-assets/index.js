import { useState } from "react";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const TABS = ["ACTIVE (8)", "TRANSFERRED (3)", "PENDING (1)"];

const ASSETS = [
  // ── Active
  {
    tab: 0,
    name: "Bayerische Motoren Real Estate",
    type: "Commercial Property",
    from: "Alexander V.",
    status: "SECURED",
    statusVariant: "secured",
    progress: 100,
    action: "VIEW ASSET",
  },
  {
    tab: 0,
    name: "Lumina Venture Capital Fund III",
    type: "Private Equity",
    from: "Alexander V.",
    status: "TITLE LOCK",
    statusVariant: "titlelock",
    progress: 85,
    action: "AUTHORIZE",
  },
  {
    tab: 0,
    name: 'Digital Art - "The Ether Vault"',
    type: "Digital Asset",
    from: "Alexander V.",
    status: "SECURED",
    statusVariant: "secured",
    progress: 100,
    action: "VIEW ASSET",
  },
  // ── Transferred
  {
    tab: 1,
    name: "Geneva Bond Portfolio",
    type: "Fixed Income",
    from: "Estate of J. Müller",
    status: "SECURED",
    statusVariant: "secured",
    progress: 100,
    action: "VIEW ASSET",
  },
  {
    tab: 1,
    name: "Monaco Penthouse Suite",
    type: "Real Estate",
    from: "Alexander V.",
    status: "SECURED",
    statusVariant: "secured",
    progress: 100,
    action: "VIEW ASSET",
  },
  {
    tab: 1,
    name: "Alpine Equity Fund",
    type: "Private Equity",
    from: "Family Trust B",
    status: "TITLE LOCK",
    statusVariant: "titlelock",
    progress: 90,
    action: "AUTHORIZE",
  },
  // ── Pending
  {
    tab: 2,
    name: "Zurich Private Banking - Acct 09",
    type: "Liquid Capital",
    from: "Family Trust B",
    status: "PENDING",
    statusVariant: "pending",
    progress: 20,
    action: "CONTINUE",
  },
];

export default function InheritedAssets() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main">

          <div className="dash_header">
            <div className="left_col">
              <h2>Inherited Assets</h2>
              <p>Formalized transfer of fiduciary responsibilities and asset control from primary estates to designated successors.</p>
            </div>
            <div className="right_col">
              <div className="tag_enc">
                <img src="/images/dashboard/green-check.svg" alt="" />
                <span>END-TO-END ENCRYPTED</span>
              </div>
              <div className="btn_blk">
                <button className="site_btn blank white ia_export_btn">
                  <img src="/images/dashboard/download.svg" alt=""/>
                  <span>EXPORT AUDIT LOG</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="ia_stats_grid">
            <div className="ia_stat_card">
              <span className="ia_stat_label">INHERITED FROM</span>
              <span className="ia_stat_value">Estate of Alexander V.</span>
            </div>
            <div className="ia_stat_card">
              <span className="ia_stat_label">TRANSFER DATE</span>
              <span className="ia_stat_value">October 14, 2024</span>
            </div>
            <div className="ia_stat_card">
              <span className="ia_stat_label">ASSET COUNT</span>
              <span className="ia_stat_value">12 Active Holdings</span>
            </div>
            <div className="ia_stat_card">
              <span className="ia_stat_label">OWNERSHIP STATUS</span>
              <div className="ia_stat_value ia_stat_ownership">
                Full Legal Title
                <img src="/images/dashboard/yellow_badge.svg" alt="verified" />
              </div>
            </div>
          </div>

          {/* Tabs + Table */}
          <div className="ia_table_card">
            <div className="ia_tabs">
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  className={`ia_tab${activeTab === i ? " ia_tab_active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="ia_table_scroll">
              <table className="ia_table">
                <thead>
                  <tr className="ia_thead_row">
                    <th>Asset Name</th>
                    <th>Type</th>
                    <th>Inherited From</th>
                    <th>Current Status</th>
                    <th>Transfer State</th>
                    <th className="ia_th_right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ASSETS.filter((a) => a.tab === activeTab).map((asset, i) => (
                    <tr key={i} className="ia_row">
                      <td className="ia_td_name">{asset.name}</td>
                      <td className="ia_td_type">{asset.type}</td>
                      <td className="ia_td_from">{asset.from}</td>
                      <td>
                        <span className={`ia_status_badge ia_status_${asset.statusVariant}`}>
                          {asset.status}
                        </span>
                      </td>
                      <td>
                        <div className="ia_progress_wrap">
                          <div className="ia_progress_track">
                            <div
                              className={`ia_progress_fill ia_progress_fill_${asset.statusVariant}`}
                              style={{ width: `${asset.progress}%` }}
                            />
                          </div>
                          <span className="ia_progress_pct">{asset.progress}%</span>
                        </div>
                      </td>
                      <td className="ia_td_action">
                        <button className="ia_action_btn">{asset.action}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

InheritedAssets.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
