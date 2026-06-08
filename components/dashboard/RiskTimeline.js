const timelineSteps = [
  {
    id: 1,
    month: 'MONTH 1',
    label: 'Email Sent',
    tag: 'NEUTRAL',
    tagType: 'neutral',
    icon: '/images/dashboard/email-green.svg',
    borderColor: '#2a4f3a',
  },
  {
    id: 2,
    month: 'MONTH 3',
    label: '1st Reminder',
    tag: 'WARNING',
    tagType: 'warning',
    icon: '/images/dashboard/time.svg',
    borderColor: '#e9c176',
  },
  {
    id: 3,
    month: 'MONTH 6',
    label: 'Critical Warning',
    tag: 'HIGH RISK',
    tagType: 'highRisk',
    icon: '/images/dashboard/bell.svg',
    borderColor: '#FF8C00',
  },
  {
    id: 4,
    month: 'MONTH 12',
    label: 'Inheritance Triggered',
    tag: 'CRITICAL',
    tagType: 'critical',
    icon: '/images/dashboard/alarm.svg',
    borderColor: '#FFB4AB',
  },
];

const tagClassMap = {
  neutral: 'riskTagNeutral',
  warning: 'riskTagWarning',
  highRisk: 'riskTagHighRisk',
  critical: 'riskTagCritical',
};

export default function RiskTimeline() {
  return (
   <div className="riskSection">
      <div className="dash_sec_header">
        <h3 className="recentTitle dash_title">Risk & Escalation Timeline</h3>
      </div>

      <div className="timelineWrapper">
        <div className="timelineTrack" />

        <div className="timelineStepsRow">
          {timelineSteps.map((step) => (
            <div key={step.id} className="timelineStep">
              <div
                className="timelineIconBox"
                style={{
                  borderColor: step.borderColor,
                }}
              >
                <img src={step.icon} alt={step.label} />
              </div>

              <p className="timelineMonth">{step.month}</p>
              <p className="timelineLabel">{step.label}</p>

              <span className={tagClassMap[step.tagType]}>
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
  </div>
  );
}
