import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";
import Account from "@/components/vault/account";
import Document from "@/components/vault/document";
import Password from "@/components/vault/password";
import Other from "@/components/vault/other";


export default function AddAsset() {
  const[tab , setTab] = useState(1);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);

  const pinRefs = useRef([]);
  const confirmRefs = useRef([]);

  // 🔹 handle change
  const handleChange = (value, index, type) => {
    if (!/^\d*$/.test(value)) return; // only numbers

    const updateState = type === "pin" ? [...pin] : [...confirmPin];
    const setState = type === "pin" ? setPin : setConfirmPin;
    const refs = type === "pin" ? pinRefs : confirmRefs;

    updateState[index] = value.slice(-1);
    setState(updateState);

    // auto next focus
    if (value && index < 3) {
      refs.current[index + 1]?.focus();
    }
  };

  // 🔹 backspace behavior
  const handleKeyDown = (e, index, type) => {
    const refs = type === "pin" ? pinRefs : confirmRefs;
    const state = type === "pin" ? pin : confirmPin;

    if (e.key === "Backspace" && !state[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };
    return (
        <>
          <div className='dashboard-layout'>
            <Sidebar />
            <LoggedHeader />
            <div className='dashboard-main'>
                <div className="dash_header">
                  <div className="left_col">
                    <h2>Add New Asset</h2>
                    <p>Securely store and manage your digital or physical assets within your private fiduciary vault.</p>
                  </div>
                  <div className="right_col">
                    <div className="tag_enc">
                      <img src="/images/dashboard/green-check.svg" alt=""/>
                      <span>END-TO-END ENCRYPTED SESSION</span>
                    </div>
                  </div>
                </div>
                <form className="add_asset_form">
                  <div className="cmn_frm_blk">
                    <div className="frm_heading">
                      ASSET IDENTITY
                    </div>
                    <div className="field_text">
                      <label>ASSET NAME</label>
                      <input type="text" className="input" placeholder="e.g., Bitcoin Cold Wallet, Ethereum Ledger, Coinbase Account"/>
                    </div>
                  </div>
                  <div className="cmn_frm_blk">
                    <div className="frm_heading">Asset Security</div>

                    <div className="dbl_field">
                      {/* PIN */}
                      <div className="field_text">
                        <label>4 Digit Asset PIN</label>

                        <div className="pin_flx">
                          {pin.map((digit, i) => (
                            <input
                              key={i}
                              ref={(el) => (pinRefs.current[i] = el)}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              className="input"
                              value={digit}
                              onChange={(e) => handleChange(e.target.value, i, "pin")}
                              onKeyDown={(e) => handleKeyDown(e, i, "pin")}
                            />
                          ))}
                        </div>

                        <small>USE NUMERIC CHARACTERS ONLY</small>
                      </div>

                      {/* CONFIRM PIN */}
                      <div className="field_text">
                        <label>Confirm PIN</label>

                        <div className="pin_flx">
                          {confirmPin.map((digit, i) => (
                            <input
                              key={i}
                              ref={(el) => (confirmRefs.current[i] = el)}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              className="input"
                              value={digit}
                              onChange={(e) =>
                                handleChange(e.target.value, i, "confirm")
                              }
                              onKeyDown={(e) => handleKeyDown(e, i, "confirm")}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cmn_frm_blk">
                    <div className="frm_heading">CATEGORIZATION</div>
                    <div className="dbl_field">
                      <div className="field_text">
                        <label>SELECT CATEGORY</label>
                        <select className="input">
                          <option>Finance</option>
                          <option>Fiduciary</option>
                          <option>Legal Documents</option>
                        </select>
                      </div>
                      <div className="field_text">
                        <label>ASSET TYPE</label>
                        <div className="tabs_flx">
                          <button type="button" className={tab==1 ? "active" : ""} onClick={() => setTab(1)}>DOCUMENT</button>
                          <button type="button" className={tab==2 ? "active" : ""} onClick={() => setTab(2)}>ACCOUNT</button>
                          <button type="button" className={tab==3 ? "active" : ""} onClick={() => setTab(3)}>PASSWORD</button>
                          <button type="button" className={tab==4 ? "active" : ""} onClick={() => setTab(4)}>OTHER</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {
                    tab == 1 && (
                    <Document />
                    )
                  }
                  {
                    tab == 2 && (
                    <Account />
                    )
                  }
                  {
                    tab == 3 && (
                    <Password />
                    )
                  }
                  {
                    tab == 4 && (
                    <Other />
                    )
                  }
                  

                  <div className="btn_blk text-right">
                    <button type="button" className="site_lbl">Cancel</button>
                    <button type="submit" className="site_btn lg">
                      <img src="/images/dashboard/shield.svg" alt="" />
                      <span>SECURE ASSET</span>
                    </button>
                  </div>
                </form>
            </div>
            
          </div>
        </>
    );
}
AddAsset.getLayout = function (page) {
    return <LayoutDashboard>{page}</LayoutDashboard>;
};