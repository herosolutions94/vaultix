import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const PER_PAGE = 4;

const categoriesData = {
  1: {
    name: "Finance",
    icon: "/images/dashboard/finance.svg",
    description: "Bank accounts, investments, and financial assets",
    totalAssets: 12,
    totalBeneficiaries: 3,
    assets: [
      {
        id: 1,
        name: "Chase Primary Checking",
        subtitle: "•••• 8821",
        icon: "/images/dashboard/bank.svg",
        status: "verified",
        beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ],
      },
      {
        id: 2,
        name: "Fidelity 401k Investment",
        subtitle: "Institutional Trust",
        icon: "/images/dashboard/finance.svg",
        status: "protected",
        beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ],
      },
      {
        id: 3,
        name: "Vanguard Brokerage",
        subtitle: "Individual Liquidity",
        icon: "/images/dashboard/finance.svg",
        status: "verified",
        beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ],
      },
      {
        id: 4,
        name: "Goldman Sachs Private",
        subtitle: "Custodian Ledger",
        icon: "/images/dashboard/bank.svg",
        status: "protected",
        beneficiaries: [],
      },
    ],
  },
  2: {
    name: "Legal Documents",
    icon: "/images/dashboard/legal-document.svg",
    description: "Wills, trusts, deeds, and legal filings",
    totalAssets: 14,
    totalBeneficiaries: 2,
    assets: [
      { id: 1, name: "Family Trust Deed",  subtitle: "Notarized 2021",    icon: "/images/dashboard/legal-document.svg", status: "verified",  beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ] },
      { id: 2, name: "Last Will Document", subtitle: "Revised 2023",      icon: "/images/dashboard/legal-document.svg", status: "protected", beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ] },
      { id: 3, name: "Power of Attorney",  subtitle: "Active",            icon: "/images/dashboard/legal-document.svg", status: "verified",  beneficiaries: [] },
    ],
  },
  3: {
    name: "Digital Accounts",
    icon: "/images/dashboard/digital-assets.svg",
    description: "Social media, email, and online credentials",
    totalAssets: 21,
    totalBeneficiaries: 4,
    assets: [
      { id: 1, name: "Google Executive Account", subtitle: "Primary Email",   icon: "/images/dashboard/account.svg",        status: "verified",  beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ] },
      { id: 2, name: "LinkedIn Profile",          subtitle: "Professional",    icon: "/images/dashboard/digital-assets.svg", status: "protected", beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben2.svg' },
    ] },
      { id: 3, name: "GitHub Organization",       subtitle: "Dev Account",     icon: "/images/dashboard/key.svg",            status: "verified",  beneficiaries: [] },
    ],
  },
  4: {
    name: "Properties",
    icon: "/images/dashboard/property.svg",
    description: "Real estate, vehicles, and physical holdings",
    totalAssets: 2,
    totalBeneficiaries: 2,
    assets: [
      { id: 1, name: "Manhattan Apartment", subtitle: "Block 42, NYC",    icon: "/images/dashboard/property.svg", status: "verified",  beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ] },
      { id: 2, name: "Tesla Model S 2022",  subtitle: "VIN •••• 4421",   icon: "/images/dashboard/property.svg", status: "protected", beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben2.svg' },
    ] },
    ],
  },
  5: {
    name: "Memories",
    icon: "/images/dashboard/memory.svg",
    description: "Photos, videos, and personal mementos",
    totalAssets: 32,
    totalBeneficiaries: 3,
    assets: [
      { id: 1, name: "Family Photo Archive",    icon: "/images/dashboard/image.svg",  status: "verified",  beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
    ], },
      { id: 2, name: "Wedding Video 2018",      icon: "/images/dashboard/memory.svg", status: "protected",  beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
      { initials: 'JM', image: '/images/dashboard/ben2.svg'},
    ], },
      { id: 3, name: "Personal Letters",  icon: "/images/dashboard/file.svg",   status: "verified",  beneficiaries: [
      { initials: 'SM', image: '/images/dashboard/ben1.svg' },
      { initials: 'JM', image: '/images/dashboard/ben2.svg'},
    ], },
      { id: 4, name: "Voice Recordings",  icon: "/images/dashboard/memory.svg", status: "protected", beneficiaries: [] },
    ],
  },
};

export default function CategoryDetail() {
  const router = useRouter();
  const { id } = router.query;
  const cat = categoriesData[id] || categoriesData[1];
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const menuRef = useRef(null);

  const totalPages = Math.ceil(cat.totalAssets / PER_PAGE);
  const pageAssets = cat.assets.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpenMenuId(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <LoggedHeader />
      <div className="dashboard-main">

        {/* Page header */}
        <div className="dash_header">
          <div className="left_col">
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </div>
          <div className="right_col">
            <div className="tag_enc">
              <img src="/images/dashboard/green-check.svg" alt="" />
              <span>END-TO-END ENCRYPTED SESSION</span>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="cat_detail_stats">
          <div className="cat_dt_stat_card">
            <div className="cat_dt_stat_text">
              <span className="cat_dt_stat_label">TOTAL ASSETS</span>
              <span className="cat_dt_stat_num">{cat.totalAssets}</span>
            </div>
            <div className="cat_dt_stat_icon">
              <img src="/images/dashboard/assets.svg" alt="" />
            </div>
          </div>
          <div className="cat_dt_stat_card">
            <div className="cat_dt_stat_text">
              <span className="cat_dt_stat_label">BENEFICIARIES</span>
              <span className="cat_dt_stat_num">{cat.totalBeneficiaries}</span>
            </div>
            <div className="cat_dt_stat_icon">
              <img src="/images/dashboard/beneficiary.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Assets table */}
        <div className="tableWrapper">
          <div className="tableScroll">
            <table className="dataTable">
              <thead>
                <tr className="tableHeadRow">
                  <th className="thAssetName">Asset Name</th>
                  <th className="thType">Protection Status</th>
                  <th className="thBeneficiary">Assigned Beneficiary</th>
                  <th className="thActions">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pageAssets.map((asset) => (
                  <tr key={asset.id} className="tableRow">

                    {/* Asset Name + subtitle */}
                    <td className="tdAssetName">
                      <div className="assetNameCell">
                        <div className="assetRowIcon">
                          <img src={asset.icon} alt={asset.name} />
                        </div>
                        <div className="cat_asset_name_info">
                          <span className="assetRowLabel">{asset.name}</span>
                        </div>
                      </div>
                    </td>

                    {/* Protection Status */}
                    <td className="tdType">
                      {asset.status === "verified" ? (
                        <span className="cat_status_badge cat_status_verified">
                         <img src="/images/dashboard/verified.svg" alt="verified"/>
                          Verified
                        </span>
                      ) : (
                        <span className="cat_status_badge cat_status_protected">
                          <img src="/images/dashboard/protected.svg" alt="protected"/>
                          Protected
                        </span>
                      )}
                    </td>

                    {/* Beneficiary initials */}
                    <td className="tdBeneficiary">
                      {asset.beneficiaries.length > 0 ? (
                        <div className="avatarGroup">
                          {asset.beneficiaries.map((b, i) => (
                            <div key={i} className="avatarChip">
                              {b.image ? (
                                <img src={b.image} alt={b.initials} />
                              ) : (
                                b.initials
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="cat_unassigned">Unassigned</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="tdActions">
                      <div
                        className="menuWrapper"
                        ref={openMenuId === asset.id ? menuRef : null}
                      >
                        <button
                          className="menuBtn"
                          onClick={(e) => {
                            if (openMenuId === asset.id) {
                              setOpenMenuId(null);
                            } else {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setMenuPos({
                                top: rect.bottom + 4,
                                right: window.innerWidth - rect.right,
                              });
                              setOpenMenuId(asset.id);
                            }
                          }}
                        >
                          <img src="/images/dashboard/action_icon.svg" alt="actions" />
                        </button>
                        {openMenuId === asset.id && (
                          <div className="contextMenu" style={{ position: 'fixed', top: `${menuPos.top}px`, right: `${menuPos.right}px` }}>
                            <button className="contextItem" onClick={() => setOpenMenuId(null)}>View</button>
                            <button className="contextItem" onClick={() => setOpenMenuId(null)}>Edit</button>
                            <button className="contextItemDanger" onClick={() => setOpenMenuId(null)}>Delete</button>
                          </div>
                        )}
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="tableFooter">
            <span className="footerCount">
              Showing {pageAssets.length} of {cat.totalAssets} secured assets
            </span>
            <div className="paginationRow">
              <button
                className="pageArrowBtn"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span className="pageLabel">
                Page {pad(currentPage)} / {pad(totalPages)}
              </span>
              <button
                className="pageArrowBtn"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

CategoryDetail.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
