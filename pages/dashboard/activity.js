import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";


export default function Activity() {
 
  return (
    <>
    <div className="dashboard-layout">
      <Sidebar />
      <LoggedHeader />
      <div className="dashboard-main">

        {/* Header */}
        <div className="dash_header">
          <div className="left_col">
            <h2>Activity Logs</h2>
            <p>Immutable ledger of all institutional vault interactions.</p>
          </div>
          <div className="right_col">
            <div className="tag_enc">
              <img src="/images/dashboard/green-check.svg" alt="" />
              <span>END-TO-END ENCRYPTED SESSION</span>
            </div>
          </div>
        </div>

        <div className="activity_list">
          <div className="inner_activity">
            <div className="head_list">
              <h3>Final warning email sent <span className="no_response">No Response</span></h3>
            </div>
            <div className="text">
              <p>Encrypted final notice dispatched to primary and secondary contact channels. 24-hour grace period remaining.</p>
              <div className="date">Oct 12, 2026 • 09:00 AM</div>
            </div>
          </div>

          <div className="inner_activity">
            <div className="head_list">
              <h3>Counter reset successfully <span className="response">Response</span></h3>
            </div>
            <div className="text">
              <p>Proof-of-life verified. Missed response counter reset to 0/12. Verification schedule resumed.</p>
              <div className="date">Aug 14, 2026 • 02:45 PM</div>
            </div>
          </div>

        </div>
        
        

      </div>
    </div>

    </>
  );
}

Activity.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
