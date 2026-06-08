import { useState } from "react";
import { useRouter } from "next/router";
import LayoutInherit from "@/components/layoutInherit";

const OPTIONS = [
  {
    id: "keep",
    icon: "/images/dashboard/vault.svg",
    title: "Keep inside inherited vault",
    description: "Maintain existing legal structure and tax-advantaged enclosure.",
  },
  {
    id: "transfer",
    icon: "/images/dashboard/transfer_icon.svg",
    title: "Transfer into personal vault",
    description: "Consolidate assets into your primary secure environment.",
  },
];

export default function TransferPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("transfer");

  return (
    <div className="inherit-page">
      {/* Encrypted badge */}
      <div className="enc-badge">
        <span className="enc-dot" />
        <span>END-TO-END ENCRYPTED SESSION</span>
      </div>

      {/* Heading */}
      <div className="inherit-heading">
        <h1>Transfer Inherited Assets</h1>
      </div>
      <p className="inherit-subtitle">
        Choose how inherited assets should be managed.
      </p>

      {/* Transfer layout */}
      <div className="transfer-layout">
        {/* Option cards */}
        <div className="options-col">
          {OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className={`option-card${selected === opt.id ? " selected" : ""}`}
              onClick={() => setSelected(opt.id)}
            >
              <div className="option-card-header">
                <div className="option-icon">
                  <img src={opt.icon} alt={opt.title} />
                </div>
                {selected === opt.id && (
                  <div className="option-check">
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="#15181C"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <h3>{opt.title}</h3>
              <p>{opt.description}</p>
            </div>
          ))}
        </div>

        {/* Transfer Summary */}
        <div className="transfer-summary-card">
          <div className="summary-title">Transfer Summary</div>

          <div className="owner-flow">
            <div className="owner-flow-label">Original Owner</div>
            <div className="owner-chip">
              <div className="owner-avatar">
                <img src="/images/dashboard/grey_user.svg" alt="owner" />
              </div>
              <span className="owner-chip-name">Estate of Alexander Voss</span>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="owner-flow-label">New Owner (Recipient)</div>
            <div className="owner-chip">
              <div className="owner-avatar teal-avatar">
                <img src="/images/dashboard/brown.svg" alt="recipient" />
              </div>
              <span className="owner-chip-name">Elena Voss</span>
            </div>
          </div>

          <div className="summary-divider" />

          <div className="summary-rows">
            <div className="summary-row">
              <span className="row-label">Transfer Date</span>
              <span className="row-value">Oct 24, 2024</span>
            </div>
            <div className="summary-row">
              <span className="row-label">Protocol</span>
              <span className="row-value">Swiss-V3 Succession</span>
            </div>
            <div className="summary-row">
              <span className="row-label">Legal Gas Fee</span>
              <span className="row-value">0.00 VX</span>
            </div>
          </div>

          <div className="summary-actions">
            <button
              className="site_btn color lg"
              onClick={() => router.push("/inherit/ownership")}
            >
              Confirm Transfer
            </button>
            <button className="site_btn blank white lg">
              Save For Later
            </button>
          </div>

          <div className="summary-disclaimer">
            <img src="/images/dashboard/legal.svg" alt="" />
            <span>
              By confirming, you authorize the permanent migration of these assets under the Vaultix
              Fiduciary Agreement. This action is irreversible once broadcast to the ledger.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

TransferPage.getLayout = function getLayout(page) {
  return <LayoutInherit currentStep={3}>{page}</LayoutInherit>;
};
