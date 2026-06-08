import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const beneficiaries = [
  { id: 1, initials: "ER", name: "Eleanor Roosevelt", email: "eleanor.r@example.com", relationship: "Spouse", assets: 12, image: "/images/dashboard/ben1.svg" },
  { id: 2, initials: "AW", name: "Arthur Wellesley", email: "arthur.w@example.com", relationship: "Child", assets: 4, image: "/images/dashboard/ben2.svg" },
  { id: 3, initials: "AW", name: "Arthur Wellesley", email: "arthur.w@example.com", relationship: "Child", assets: 4, image: null },
  { id: 4, initials: "VC", name: "Vanguard Trust Co.", email: "legal@vanguardtrust.com", relationship: "Legal Trustee", assets: 8, image: "/images/dashboard/ben1.svg" },
  { id: 5, initials: "VC", name: "Vanguard Trust Co.", email: "legal@vanguardtrust.com", relationship: "Legal Trustee", assets: 8, image: null },
];

export default function Beneficiaries() {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRefs = useRef({});

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  useEffect(() => {
    const handler = (e) => {
      if (openMenu !== null) {
        const ref = menuRefs.current[openMenu];
        if (ref && !ref.contains(e.target)) setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openMenu]);

  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main">
          <div className="dash_header">
            <div className="left_col">
              <h2>Beneficiary Management</h2>
              <p>Manage trusted beneficiaries, asset assignments and inheritance conditions.</p>
            </div>
            <div className="right_col">
              <div className="tag_enc">
                <img src="/images/dashboard/green-check.svg" alt="" />
                <span>END-TO-END ENCRYPTED SESSION</span>
              </div>
              <div className="btn_blk">
                <Link href="/dashboard/beneficiaries/add-beneficiary" className="site_btn color">
                  <img src="/images/dashboard/add_ben.svg" alt="" />
                  <span>Add Beneficiary</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="ben_table_wrap tableWrapper">
            <div className="ben_table_head">
              <div className="ben_th">Beneficiary Name</div>
              <div className="ben_th">Relationship</div>
              <div className="ben_th">Assigned Assets</div>
              <div className="ben_th text-right">Actions</div>
            </div>

            <div className="ben_table_body">
              {beneficiaries.map((ben) => (
                <div key={ben.id} className="ben_row">
                  <div className="ben_td ben_name_cell">
                    <div className="ben_avatar">
                      {ben.image ? (
                        <img src={ben.image} alt={ben.name} />
                      ) : (
                        ben.initials
                      )}
                    </div>
                    <div className="ben_info">
                      <Link href={`/dashboard/beneficiaries/${ben.id}`} className="ben_name">{ben.name}</Link>
                      <span className="ben_email">{ben.email}</span>
                    </div>
                  </div>
                  <div className="ben_td ben_rel">{ben.relationship}</div>
                  <div className="ben_td">
                    <span className="ben_asset_badge">{ben.assets} Assets</span>
                  </div>
                  <div className="ben_td ben_actions_td">
                    <div className="menuWrapper" ref={(el) => (menuRefs.current[ben.id] = el)}>
                      <button className="menuBtn" onClick={() => toggleMenu(ben.id)}>
                        <img src="/images/dashboard/action_icon.svg" alt="actions" />
                      </button>
                      {openMenu === ben.id && (
                        <div className="contextMenu">
                          <Link href={`/dashboard/beneficiaries/${ben.id}`} className="contextItem">View</Link>
                          <button className="contextItem">Edit</button>
                          <button className="contextItemDanger">Remove</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ben_table_footer">
              <span className="footerCount">SHOWING {beneficiaries.length} OF {beneficiaries.length} BENEFICIARIES</span>
              <div className="paginationRow">
                <button className="pageArrowBtn" disabled>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="pageLabel">PAGE 01</span>
                <button className="pageArrowBtn">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Beneficiaries.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
