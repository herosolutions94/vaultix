
const quickLinks = [
  {
    label: 'Will & Trust Docs',
    icon: '/images/dashboard/file.svg',
  },
  {
    label: 'Master Passwords',
    icon: '/images/dashboard/key.svg',
  },
  {
    label: 'Digital Legacy Media',
    icon: '/images/dashboard/image.svg',
  },
];

const distributionItems = [
  { label: 'Documents', count: 71, color: '#40C4D3' },
  { label: 'Accounts', count: 40, color: '#006C49' },
  { label: 'Passwords', count: 32, color: '#e9c176' },
  { label: 'Other', count: 15, color: '#6b7280' },
];

export default function VaultDistribution() {
  return (
    <div className="vaultSection">
      <div className="vaultInner">
        <div className="vaultLeft">
          <h3 className="dash_title">Vault Distribution</h3>

          <p className="vaultSubLabel">Total Encrypted Assets</p>
          <p className="vaultTotalNumber">158</p>

          <div className="progressBarWrapper">
            <span className="progressLabel">Documents</span>
            <span className="progressPercent">45%</span>

            <div className="progressTrack">
              <div
                className="progressSegmentBlue"
                style={{ width: "45%" }}
              />
              <div
                className="progressSegmentGreen"
                style={{ width: "45%" }}
              />
              <div
                className="progressSegmentYellow"
                style={{ width: "21%" }}
              />
              <div
                className="progressSegmentGray"
                style={{ width: "10%" }}
              />
            </div>
          </div>

          <div className="legendRow">
            {distributionItems.map((item) => (
              <div key={item.label} className="legendItem">
                <span
                  className="legendDot"
                  style={{ background: item.color }}
                />
                <span className="legendText">
                  {item.label} ({item.count})
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="vaultRight">
          <p className="quickAccessTitle">Quick Access</p>

          {quickLinks.map((link) => (
            <button key={link.label} className="quickAccessBtn">
              <span className="quickBtnIcon">
                <img src={link.icon} alt={link.label} />
              </span>
              <span className="quickBtnLabel">{link.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
