import { useState } from "react";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

export default function TriggerMonitoring() {
  const [loginDays, setLoginDays] = useState(90);
  const [interactionDays, setInteractionDays] = useState(180);
  const [verifyMonths, setVerifyMonths] = useState(1);
  const [unansweredMonths, setUnansweredMonths] = useState(12);

  const handleReset = () => {
    setLoginDays(90);
    setInteractionDays(180);
    setVerifyMonths(1);
    setUnansweredMonths(12);
  };

  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main">

          <div className="dash_header">
            <div className="left_col">
              <h2>Trigger Monitoring Settings</h2>
              <p>Configure the forensic heartbeat protocol to ensure asset continuity and verify account status.</p>
            </div>
            <div className="right_col">
              <div className="tag_enc">
                <img src="/images/dashboard/green-check.svg" alt="" />
                <span>END-TO-END ENCRYPTED SESSION</span>
              </div>
            </div>
          </div>

          {/* Inactivity Thresholds */}
          <div className="trig_card">
            <div className="trig_card_title">
              <img src="/images/dashboard/timer.svg" alt="" />
              <span>Inactivity Thresholds</span>
            </div>
            <div className="trig_row">
              <span className="trig_row_label">No login detected for</span>
              <div className="trig_row_right">
                <input
                  type="number"
                  className="trig_num_input"
                  value={loginDays}
                  min={1}
                  onChange={(e) => setLoginDays(Number(e.target.value))}
                />
                <span className="trig_unit">DAYS</span>
              </div>
            </div>
            <div className="trig_divider" />
            <div className="trig_row">
              <span className="trig_row_label">No vault interaction for</span>
              <div className="trig_row_right">
                <input
                  type="number"
                  className="trig_num_input"
                  value={interactionDays}
                  min={1}
                  onChange={(e) => setInteractionDays(Number(e.target.value))}
                />
                <span className="trig_unit">DAYS</span>
              </div>
            </div>
          </div>

          {/* Verification Interval */}
          <div className="trig_card trig_card_inline">
            <div className="trig_inline_left">
              <div className="trig_icon_box">
                <img src="/images/dashboard/envelope_check.svg" alt="" />
              </div>
              <div className="trig_inline_info">
                <span className="trig_inline_title">Verification Interval Settings</span>
                <span className="trig_inline_sub">Define how often the system checks for your heartbeat.</span>
              </div>
            </div>
            <div className="trig_row_right">
              <input
                type="number"
                className="trig_num_input"
                value={verifyMonths}
                min={1}
                onChange={(e) => setVerifyMonths(Number(e.target.value))}
              />
              <span className="trig_unit">MONTH(S)</span>
            </div>
          </div>

          {/* Maximum Unanswered Period */}
          <div className="trig_card">
            <div className="trig_card_title">
              <img src="/images/dashboard/legal.svg" alt="" />
              <span>Maximum Unanswered Period</span>
            </div>
            <div className="trig_row">
              <span className="trig_row_label">Trigger inheritance process after no response for:</span>
              <div className="trig_row_right">
                <button
                  className="trig_counter_btn"
                  onClick={() => setUnansweredMonths((v) => Math.max(1, v - 1))}
                >−</button>
                <input
                  type="number"
                  className="trig_num_input trig_counter_input"
                  value={unansweredMonths}
                  min={1}
                  onChange={(e) => setUnansweredMonths(Number(e.target.value))}
                />
                <button
                  className="trig_counter_btn"
                  onClick={() => setUnansweredMonths((v) => v + 1)}
                >+</button>
                <span className="trig_unit">MONTHS</span>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="trig_notice">
            <span className="trig_notice_label">Important Notice:</span>
            <p>If no response is received for the configured inactivity period your given months, the system will consider the account inactive and begin the inheritance process. Assigned assets may be transferred to designated beneficiaries according to your configured rules.</p>
          </div>

          {/* Actions */}
          <div className="trig_actions">
            <button className="site_btn blank white" onClick={handleReset}>RESET DEFAULTS</button>
            <button className="site_btn color">
              <img src="/images/dashboard/lock.svg" alt="" />
              <span>AUTHORIZE ACCESS &amp; SAVE</span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

TriggerMonitoring.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
