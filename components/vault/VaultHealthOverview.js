export default function VaultHealthOverview() {
  const percentage = 96;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="healthCard">
      <div className="healthGaugeWrapper">
        <svg
          width="200"
          height="200"
          viewBox="0 0 140 140"
          className="healthSvg"
        >
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#2a2f2e"
            strokeWidth="10"
          />

          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#c9a84c"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 70 70)"
            className="healthCircleAnim"
          />
        </svg>

        <div className="healthGaugeCenter">
          <span className="healthPercent">96%</span>
          <span className="healthSecureLabel">SECURE</span>
        </div>
      </div>

      <div className="healthDetails">
        <div className="healthTitleRow">
          <span className="healthTitle">Vault Health Overview</span>
          <span className="healthActiveDot" />
        </div>

        <div className="healthStatsGrid">
          <div className="healthStatItem">
            <p className="healthStatLabel">Protected Assets</p>
            <p className="healthStatValue">18 Entities</p>
          </div>

          <div className="healthStatItem">
            <p className="healthStatLabel">Encryption Standard</p>
            <p className="healthStatValue">AES-256</p>
          </div>

          <div className="healthStatItem">
            <p className="healthStatLabel">Beneficiaries</p>
            <p className="healthStatValue">5 Verified</p>
          </div>

          <div className="healthStatItem">
            <p className="healthStatLabel">Trigger Rules</p>
            <p className="healthStatValue">4 Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
