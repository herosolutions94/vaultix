import { useRouter } from "next/router";
import LayoutInherit from "@/components/layoutInherit";

export default function ClaimPage() {
  const router = useRouter();

  return (
    <div className="inherit-page">
      {/* Encrypted badge */}
      <div className="enc-badge">
        <span className="enc-dot" />
        <span>END-TO-END ENCRYPTED SESSION</span>
      </div>

      {/* Heading */}
      <div className="inherit-heading">
        <h1>Claim Inherited Assets</h1>
      </div>
      <p className="inherit-subtitle">
        You have received digital assets through Vaultix inheritance transfer. Authenticate your
        identity to proceed with the institutional handover.
      </p>

      {/* Main grid: owner card + asset panel */}
      <div className="claim-grid">
        {/* Owner Card */}
        <div className="owner-card">
          <div className="owner-card-header">
            <span className="owner-label">ORIGINAL OWNER</span>
            <div className="owner-shield">
              <img src="/images/dashboard/gold_user.svg" alt="shield" />
            </div>
          </div>

          <div className="owner-name">Alexander Van der Bellen</div>

          <div className="owner-meta-grid">
            <div className="meta-item">
              <div className="meta-label">Transfer Date</div>
              <div className="meta-value">Oct 24, 2024</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Status</div>
              <div className="meta-value verified">Verified</div>
            </div>
            <div className="meta-item-full">
              <div className="meta-label">Asset Count</div>
              <div className="meta-value">14 Discrete Assets</div>
            </div>
          </div>

          <div className="enc-notice">
            <div className="enc-notice-head">
              <span className="enc-dot" />
              <span>End-to-End Encrypted</span>
            </div>
            <p>
              The trigger conditions for this transfer have been independently verified by the
              Vaultix Oracle Network and are legally binding under Swiss Fiduciary Protocol 4.2.
            </p>
          </div>

          <div className="owner-actions">
            <button
              className="btn-accept"
              onClick={() => router.push("/inherit/activate")}
            >
              Accept Inheritance →
            </button>
            <button className="btn-decline">
              ⊘ Decline Transfer
            </button>
          </div>
        </div>

        {/* Asset Panel */}
        <div className="asset-panel">
          <div className="panel-header">
            <span className="panel-title">Asset Inventory</span>
            <span className="panel-status-tag">LOCKED UNTIL CLAIM AUTHORIZATION</span>
          </div>

          <div className="asset-list">
            <div className="asset-row">
              <div className="asset-icon-wrap">
                <img src="/images/dashboard/shield.svg" alt="" />
              </div>
              <div className="asset-info">
                <div className="asset-name">Sovereign Wealth Token (SWT)</div>
                <div className="asset-meta">
                  <span className="asset-type">TYPE: Digital Asset</span>
                  <span className="asset-level">LEVEL: Full Access</span>
                </div>
              </div>
              <div className="asset-status-col">
                <span className="status-lbl">Status</span>
                <span className="status-val">Pending Claim</span>
              </div>
            </div>

            <div className="asset-row">
              <div className="asset-icon-wrap">
                <img src="/images/dashboard/key.svg" alt="" />
              </div>
              <div className="asset-info">
                <div className="asset-name">Private Key Cluster 0x...82F</div>
                <div className="asset-meta">
                  <span className="asset-type">TYPE: Cold Storage</span>
                  <span className="asset-level">LEVEL: Custodian</span>
                </div>
              </div>
              <div className="asset-status-col">
                <span className="status-lbl">Status</span>
                <span className="status-val">Pending Claim</span>
              </div>
            </div>

            <div className="asset-row">
              <div className="asset-icon-wrap">
                <img src="/images/dashboard/legal-document.svg" alt="" />
              </div>
              <div className="asset-info">
                <div className="asset-name">Smart Testament (L-09)</div>
                <div className="asset-meta">
                  <span className="asset-type">TYPE: Legal Binding</span>
                  <span className="asset-level">LEVEL: View Only</span>
                </div>
              </div>
              <div className="asset-status-col">
                <span className="status-lbl">Status</span>
                <span className="status-val">Pending Claim</span>
              </div>
            </div>

            <div className="asset-row restricted">
              <div className="asset-icon-wrap">
                <img src="/images/dashboard/lock.svg" alt="" />
              </div>
              <div className="asset-info">
                <div className="asset-name">Confidential Sub-Vault 12A</div>
                <div className="asset-meta">
                  <span className="asset-type">TYPE: Unknown</span>
                  <span className="asset-level restricted">LEVEL: Restricted</span>
                </div>
              </div>
              <div className="asset-status-col">
                <span className="status-lbl">Status</span>
                <span className="status-val claim-required">Claim Required</span>
              </div>
            </div>

            <button className="hidden-assets-btn">
              + 10 ADDITIONAL ASSETS HIDDEN FOR PRIVACY
            </button>
          </div>
        </div>
      </div>

      {/* Security Protocol Notice */}
      <div className="security-notice-block">
        <div className="security-img">
          <img src="/images/dashboard/security_protocol.svg" alt="Security Protocol" />
        </div>
        <div className="security-text">
          <h3>Security Protocol Notice</h3>
          <p>
            Upon accepting this transfer, you will be required to perform a Multi-Factor Bio-Auth
            verification. This process is irreversible and triggers a permanent ownership update on
            the private ledger. Your identity must match the pre-authorized beneficiary profile
            provided by the original owner.
          </p>
        </div>
      </div>
    </div>
  );
}

ClaimPage.getLayout = function getLayout(page) {
  return <LayoutInherit currentStep={1}>{page}</LayoutInherit>;
};
