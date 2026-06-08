import { useRouter } from "next/router";
import LayoutInherit from "@/components/layoutInherit";

const SECURED_ASSETS = [
  {
    icon: "/images/dashboard/digital-assets.svg",
    name: "Digital Estate Portfolio",
    sub: "Distributed Custody",
  },
  {
    icon: "/images/dashboard/key.svg",
    name: "Private Encryption Keys",
    sub: "Master Recovery Shards",
  },
  {
    icon: "/images/dashboard/legal-document.svg",
    name: "Legal Directives",
    sub: "Notarized Metadata",
  },
  {
    icon: "/images/dashboard/email-green.svg",
    name: "Communication Archives",
    sub: "Secure Heritage Logs",
  },
];

export default function OwnershipPage() {
  const router = useRouter();

  return (
    <div className="inherit-page ownership-page">
      {/* Encrypted badge */}
      <div className="enc-badge">
        <span className="enc-dot" />
        <span>END-TO-END ENCRYPTED SESSION</span>
      </div>

      {/* Heading */}
      <div className="inherit-heading">
        <h1>Ownership Successfully Transferred</h1>
      </div>
      <p className="inherit-subtitle">
        The chain of continuity is now secured. You are the sole custodian of these digital assets,
        backed by multi-jurisdictional legal compliance and zero-knowledge encryption.
      </p>

      {/* Assets Secured Summary */}
      <div className="assets-secured-card">
        <div className="secured-header">
          <div className="secured-header-icon">
            <img src="/images/dashboard/vault.svg" alt="vault" />
          </div>
          <h3>Assets Secured Summary</h3>
        </div>

        <div className="secured-list">
          {SECURED_ASSETS.map((asset) => (
            <div key={asset.name} className="secured-row">
              <div className="secured-row-icon">
                <img src={asset.icon} alt={asset.name} />
              </div>
              <div className="secured-row-info">
                <div className="secured-row-name">{asset.name}</div>
                <div className="secured-row-sub">{asset.sub}</div>
              </div>
              <div className="secured-check">
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 6.5L4.5 9L10 3"
                    stroke="#10B981"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p className="secured-footer-note">
          This summary reflects the final audit of the inheritance protocol execution. All original
          source assets have been permanently locked at origin.
        </p>
      </div>

      {/* CTA */}
      <button
        className="btn-go-vault"
        onClick={() => router.push("/dashboard")}
      >
        Go To My Vault
      </button>
    </div>
  );
}

OwnershipPage.getLayout = function getLayout(page) {
  return <LayoutInherit currentStep={4}>{page}</LayoutInherit>;
};
