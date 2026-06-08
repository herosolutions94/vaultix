const triggerSteps = [
  { id: 1, label: 'MONITORING', active: true },
  { id: 2, label: 'INACTIVE', active: false },
  { id: 3, label: 'VERIFICATION', active: false },
  { id: 4, label: 'RELEASE', active: false },
];

export default function InheritanceTriggerStatus() {
  return (
    <div className="triggerCard">
      <h3 className="dash_title">Inheritance Trigger Status</h3>

      <div className="triggerStepsRow">
        {triggerSteps.map((step, index) => (
          <div key={step.id} className="triggerStepWrapper">
            <div className="triggerStepCol">
              <div
                className={
                  step.active
                    ? "triggerDotActive"
                    : "triggerDotInactive"
                }
              >
                {step.active && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>

              <span
                className={
                  step.active
                    ? "triggerStepLabelActive"
                    : "triggerStepLabel"
                }
              >
                {step.label}
              </span>
            </div>

            {index < triggerSteps.length - 1 && (
              <div
                className={
                  index === 0
                    ? "triggerConnectorActive"
                    : "triggerConnectorInactive"
                }
              />
            )}
          </div>
        ))}
      </div>

      <div className="triggerStatusBox">
        <p className="triggerStatusText">
          <span className="triggerStatusHighlight">
            Active Status:
          </span>{" "}
          System heartbeats are being received normally. No inactive period has been detected. All asset access is currently restricted to owner-only.
        </p>
      </div>
    </div>
  );
}
