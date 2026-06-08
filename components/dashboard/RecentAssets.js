import Link from "next/link";

const assets = [
  {
    id: 1,
    name: 'Bitcoin Cold Wallet',
    type: 'Crypto',
    badge: 'VERIFIED',
    badgeType: 'verified',
    lockDays: 180,
    icon:'/images/dashboard/bitcoin.svg',
  },
  {
    id: 2,
    name: 'Primary Chase Account',
    type: 'Finance',
    badge: 'VERIFIED',
    badgeType: 'verified',
    lockDays: 200,
    icon:'/images/dashboard/bank.svg',
  },
  {
    id: 3,
    name: 'Google Executive Account',
    type: 'Account',
    badge: 'PROTECTED',
    badgeType: 'protected',
    lockDays: 180,
    icon:'/images/dashboard/account.svg',
  },
];

export default function RecentAssets() {
  return (
    <div className="recentSection">
      <div className="dash_sec_header">
        <h3 className="recentTitle dash_title">Recent Assets</h3>
        <Link href="/dashboard/vault/assets" className="viewAllBtn">VIEW ALL ASSETS</Link>
      </div>

      <div className="assetsRow">
        {assets.map((asset) => (
          <div key={asset.id} className="assetCard">
            <div className="assetCardTop">
              <div className="assetIconBox">
                <img src={asset.icon} alt={asset.name} />
              </div>

              <span
                className={
                  asset.badgeType === "verified"
                    ? "badgeVerified"
                    : "badgeProtected"
                }
              >
                ● {asset.badge}
              </span>
            </div>

            <p className="assetName">{asset.name}</p>
            <p className="assetType">Type: {asset.type}</p>

            <div className="assetFooter">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>

              <span className="assetLockText">
                INACTIVE LOCK: {asset.lockDays} DAYS
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
