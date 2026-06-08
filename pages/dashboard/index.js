import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";
import VaultDistribution from "@/components/dashboard/VaultDistribution";
import RecentAssets from "@/components/dashboard/RecentAssets";
import KeyBeneficiaries from "@/components/dashboard/KeyBeneficiaries";
import RiskTimeline from "@/components/dashboard/RiskTimeline";

export default function Dashboard() {
   
    return (
        <>
          <div className='dashboard-layout'>
            <Sidebar />
            <LoggedHeader />
            <div className='dashboard-main'>
                <div className="dash_header">
                  <div className="left_col">
                    <h2>Welcome back, Alexander.</h2>
                    <p>Manage your digital legacy and inheritance settings with institutional-grade security.</p>
                  </div>
                  <div className="right_col">
                    <div className="tag_enc">
                      <img src="/images/dashboard/green-check.svg" alt=""/>
                      <span>END-TO-END ENCRYPTED SESSION</span>
                    </div>
                    <div className="btn_blk">
                      <Link href="/dashboard/vault/assets/add-asset" className="site_btn color"><img src="/images/dashboard/add.svg" alt="add assets" /><span>Add Asset</span></Link>
                      <Link href="/dashboard/beneficiaries/add-beneficiary" className="site_btn blank green"><img src="/images/dashboard/add-ben.svg" alt="Add Beneficiary" /><span>Add Beneficiary</span></Link>
                      <Link href="/dashboard/triggers" className="site_btn blank white"><img src="/images/dashboard/rule.svg" alt="Add Beneficiary" /><span>Create Rule</span></Link>
                    </div>
                  </div>
                </div>

                <div className="main_intro_flex">
                  <div className="col">
                    <div className="inner">
                      <div className="badge green">Secure</div>
                      <div className="icon_img">
                        <img src="/images/dashboard/assets.svg" alt="Total Assets" />
                      </div>
                      <h4>Total Assets</h4>
                      <h3 className="gold">24</h3>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <div className="icon_img">
                        <img src="/images/dashboard/green_ben.svg" alt="Total Assets" />
                      </div>
                      <h4>Beneficiaries</h4>
                      <h3 className="green">3</h3>
                    </div>
                  </div>
                </div>
                <VaultDistribution />
                <RecentAssets />
                <KeyBeneficiaries />
                <RiskTimeline />
            </div>
            
          </div>
        </>
    );
}
Dashboard.getLayout = function (page) {
    return <LayoutDashboard>{page}</LayoutDashboard>;
};