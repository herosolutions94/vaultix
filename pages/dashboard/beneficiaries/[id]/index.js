import { useRouter } from "next/router";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const BENEFICIARY_DATA = {
  1: {
    name: "Johnathan Doe",
    email: "john.doe@example.com",
    relationship: "Son",
    phone: "+1 (555) 000-0000",
    photo: "/images/dashboard/BeneficiaryProfile.png",
    assets: [
      { name: "Primary Cold Storage", type: "CRYPTOCURRENCY", pct: 50 },
      { name: "London Real Estate", type: "LEGAL DOCUMENT", pct: 100 },
      { name: "Ethereum Node Rewards", type: "STAKING", pct: 30 },
    ],
  },
  2: {
    name: "Arthur Wellesley",
    email: "arthur.w@example.com",
    relationship: "Child",
    phone: "+1 (555) 000-0000",
    photo: null,
    assets: [
      { name: "Vaultix Backup Seed", type: "ACCESS KEY", pct: 25 },
      { name: "Digital Identity Vault", type: "DIGITAL ACCOUNT", pct: 50 },
      { name: "Singapore Private Equity", type: "SECURITIES", pct: 75 },
      { name: "Offshore Bank Account", type: "FINANCE", pct: 100 },
    ],
  },
};

export default function BeneficiaryDetail() {
  const router = useRouter();
  const { id } = router.query;

  const ben = BENEFICIARY_DATA[id] || BENEFICIARY_DATA[1];

  const initials = ben.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main">
          <div className="ben_detail_flex">
            {/* Identity Card */}
            <div className="ben_detail_card">
              <div className="ben_detail_card_head">
                <div className="ben_detail_card_title">
                  <img src="/images/dashboard/user.svg" alt="" />
                  <span>Identity Information</span>
                </div>
                <button type="button" className="ben_detail_edit_btn">
                  <img src="/images/dashboard/edit.svg" alt="edit" />
                </button>
              </div>

              <div className="ben_detail_profile">
                <div className="ben_detail_photo">
                  {ben.photo ? (
                    <img src={ben.photo} alt={ben.name} />
                  ) : (
                    <div className="ben_detail_photo_placeholder">{initials}</div>
                  )}
                </div>
                <div className="ben_detail_name_block">
                  <h3 className="ben_detail_name">{ben.name}</h3>
                  <p className="ben_detail_email">{ben.email}</p>
                </div>
              </div>

              <div className="ben_detail_field_row">
                <span className="ben_detail_field_label">RELATIONSHIP</span>
                <span className="ben_detail_field_val">{ben.relationship}</span>
              </div>
              <div className="ben_detail_divider" />
              <div className="ben_detail_field_row">
                <span className="ben_detail_field_label">PHONE NUMBER</span>
                <span className="ben_detail_field_val">{ben.phone}</span>
              </div>
            </div>

            {/* Asset Allocation Card */}
            <div className="ben_detail_card ben_detail_card_right">
              <div className="ben_detail_card_head">
                <div className="ben_detail_card_title">
                  <img src="/images/dashboard/assets.svg" alt="" />
                  <span>Asset Allocation</span>
                </div>
              </div>
              <div className="ben_detail_assets">
                {ben.assets.map((asset, i) => (
                  <div key={i} className="ben_detail_asset_row">
                    <div className="ben_detail_asset_info">
                      <span className="ben_detail_asset_name">{asset.name}</span>
                      <span className="ben_detail_asset_type">TYPE: {asset.type}</span>
                    </div>
                    {/* <div className="ben_detail_asset_pct">
                      <div className="ben_pct_track">
                        <div className="ben_pct_fill" style={{ width: `${asset.pct}%` }} />
                      </div>
                      <span className="ben_detail_pct_num">{asset.pct}%</span>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

BeneficiaryDetail.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
