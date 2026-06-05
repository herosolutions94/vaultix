import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const CHAIN = [
  {
    id: 1,
    role: "Original Owner",
    name: "Owner A (Genesis)",
    icon: "/images/dashboard/gold_user.svg",
    variant: "gold",
    connector: "solid",
  },
  {
    id: 2,
    role: "Beneficiary Transfer",
    name: "Beneficiary B",
    icon: "/images/dashboard/user_check.svg",
    variant: "default",
    connector: "solid",
  },
  {
    id: 3,
    role: "Current Custodian",
    name: "Beneficiary C",
    icon: "/images/dashboard/green_shield.svg",
    variant: "teal",
    connector: "dashed",
  },
  {
    id: 4,
    role: "Queued Transfer",
    name: "Future Transfer Target",
    sub: "Status: Locked until 2026",
    icon: "/images/dashboard/transfer_arrows.svg",
    variant: "queued",
    connector: null,
  },
];

export default function TransferHistory() {
  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main">

          <div className="dash_header">
            <div className="left_col">
              <h2>Transfer History</h2>
              <p>A forensic record of asset custody transitions. This immutable log represents the legal chain of continuity for the Institutional Vault series 0X-442.</p>
            </div>
            <div className="right_col">
              <div className="tag_enc">
                <img src="/images/dashboard/green-check.svg" alt="" />
                <span>End-to-End Encrypted Session</span>
              </div>
            </div>
          </div>

          <div className="th_chain_card">
            <div className="th_chain_header">
              <img src="/images/dashboard/chain.svg" alt="" />
              <span>Chain of Continuity</span>
            </div>

            <div className="th_chain_list">
              {CHAIN.map((node, idx) => (
                <div key={node.id} className="th_chain_item">
                  <div className="th_chain_track">
                    <div className={`th_chain_node th_chain_node_${node.variant}`}>
                      <img src={node.icon} alt={node.role} />
                    </div>
                    {node.connector && (
                      <div className={`th_chain_line th_chain_line_${node.connector}`} />
                    )}
                  </div>
                  <div className="th_chain_content">
                    <span className={`th_chain_role th_chain_role_${node.variant}`}>{node.role}</span>
                    <span className={`th_chain_name${node.variant === "queued" ? " th_chain_name_muted" : ""}`}>{node.name}</span>
                    {node.sub && <span className="th_chain_sub">{node.sub}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

TransferHistory.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
