import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";
import AssetTable from "@/components/vault/AssetTable";


export default function Assets() {
   const [popupAccess , setPopupAccess] = useState(false);

    const toggleAccessPopup = () => {
        setPopupAccess(!popupAccess);
    }
    return (
        <>
          <div className='dashboard-layout'>
            <Sidebar />
            <LoggedHeader />
            <div className='dashboard-main'>
                <div className="dash_header">
                  <div className="left_col">
                    <h2>All Assets</h2>
                    <p>Manage and track your entire digital and physical estate with institutional-grade security and zero-knowledge encryption.</p>
                  </div>
                  <div className="right_col">
                    <div className="tag_enc">
                      <img src="/images/dashboard/green-check.svg" alt=""/>
                      <span>END-TO-END ENCRYPTED SESSION</span>
                    </div>
                    <div className="btn_blk">
                      <Link href="" className="site_btn color"><img src="/images/dashboard/add.svg" alt="add assets" /><span>Add Asset</span></Link>
                    </div>
                  </div>
                </div>
                <AssetTable toggleAccessPopup = {toggleAccessPopup}/>
            </div>
            
          </div>
          <div className={popupAccess ? "asset_popup popup open" : "asset_popup popup"}>
            <div className="table_dv">
                <div className="table_cell">
                    <div className="inner">
                        <div className="tag_enc">
                            <img src="/images/dashboard/green-check.svg" alt=""/>
                            <span>END-TO-END ENCRYPTED SESSION</span>
                        </div>
                        <div className="cntnt">
                            <h2>Asset Access Required</h2>
                            <p>Enter your 4-digit security PIN to decrypt and view this asset.</p>
                        </div>
                        <form action="">
                        <div className="input_fields">
                            <input type="text" className="input" />
                            <input type="text" className="input" />
                            <input type="text" className="input" />
                            <input type="text" className="input" />
                        </div>
                        <div className="btn_blk">
                            <button className="site_btn block color">UNLOCK ASSET</button>
                            <button type="button" className="simple_lbl">FORGOT PIN?</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}
Assets.getLayout = function (page) {
    return <LayoutDashboard>{page}</LayoutDashboard>;
};