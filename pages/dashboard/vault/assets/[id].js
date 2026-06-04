import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";
import ProgressBar from "@/components/progress-bar";


export default function AssetDetail() {
    return (
        <>
          <div className='dashboard-layout'>
            <Sidebar />
            <LoggedHeader />
            <div className='dashboard-main'>
                <div className="dash_header">
                  <div className="left_col">
                    <h2>Bitcoin Cold Wallet</h2>
                  </div>
                  <div className="right_col">
                    <div className="tag_enc">
                      <img src="/images/dashboard/green-check.svg" alt=""/>
                      <span>END-TO-END ENCRYPTED SESSION</span>
                    </div>
                  </div>
                </div>

                <div className="flex asset_dt_fx">
                  <div className="colL">
                    <div className="inner">
                      <div className="dash_sec_header">
                          <h3 className="recentTitle dash_title">Asset Summary</h3>
                      </div>
                      <ul>
                        <li>
                          <span>Category</span>
                          <span>Finance</span>
                        </li>
                        <li>
                          <span>Type</span>
                          <span>Crypto Account</span>
                        </li>
                      </ul>
                      <div className="info_bx">
                        <img src="/images/dashboard/info-icon.svg" alt="" />
                        <span>
                          This asset is currently under Institutional Hold. No transfers can be initiated without multi-signature approval from the designated Fiduciary.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="colR">
                    <div className="inner">
                      <div className="dash_sec_header">
                          <h3 className="recentTitle dash_title">Beneficiary Allocation</h3>
                      </div>
                      <div className="tile_dt flex">
                        <div className="inner_fx flex">
                            <div className="img_icon">
                              <img src="/images/dashboard/ben1.svg" alt="" />
                            </div>
                            <div className="info_ben">
                              <div className="name">Sarah Jenkins</div>
                            </div>
                        </div>
                        <div className="right_fx">
                          <ProgressBar value={70} />
                        </div>
                      </div>

                      <div className="tile_dt flex">
                        <div className="inner_fx flex">
                            <div className="img_icon">
                              <img src="/images/dashboard/ben2.svg" alt="" />
                            </div>
                            <div className="info_ben">
                              <div className="name">John Doe</div>
                            </div>
                        </div>
                        <div className="right_fx">
                          <ProgressBar value={30} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
          </div>
          
        </>
    );
}
AssetDetail.getLayout = function (page) {
    return <LayoutDashboard>{page}</LayoutDashboard>;
};