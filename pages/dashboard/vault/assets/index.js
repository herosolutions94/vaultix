import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";
import AssetTable from "@/components/vault/AssetTable";
import { useRouter } from "next/router";


export default function Assets() {

   const [popupAccess , setPopupAccess] = useState(false);
   const popupRef = useRef(null);
   const [selectedAsset, setSelectedAsset] = useState(null);
    const toggleAccessPopup = () => {
        setPopupAccess(!popupAccess);
    }
    const [pin, setPin] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
      const value = e.target.value;

      if (!/^\d*$/.test(value)) return;

      const newPin = [...pin];
      newPin[index] = value.slice(-1);
      setPin(newPin);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && !pin[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };
    const router = useRouter();
    const handleSubmit = (e) => {
      e.preventDefault();

      const enteredPin = pin.join("");

      if (enteredPin.length === 4) {
        router.push(`/dashboard/vault/assets/${selectedAsset}`);
      }
    };

    useEffect(() => {
      function handleClickOutside(event) {
        if (popupAccess && popupRef.current && !popupRef.current.contains(event.target)) {
          setPopupAccess(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [popupAccess]);
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
                      <Link href="assets/add-asset" className="site_btn color"><img src="/images/dashboard/add.svg" alt="add assets" /><span>Add Asset</span></Link>
                    </div>
                  </div>
                </div>
                <AssetTable toggleAccessPopup = {toggleAccessPopup} setSelectedAsset={setSelectedAsset}/>
            </div>
            
          </div>
          <div className={popupAccess ? "asset_popup popup open" : "asset_popup popup"}>
            <div className="table_dv">
                <div className="table_cell">
                    <div className="inner" ref={popupRef}>
                        <div className="tag_enc">
                            <img src="/images/dashboard/green-check.svg" alt=""/>
                            <span>END-TO-END ENCRYPTED SESSION</span>
                        </div>
                        <div className="cntnt">
                            <h2>Asset Access Required</h2>
                            <p>Enter your 4-digit security PIN to decrypt and view this asset.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className="input_fields">
                            {pin.map((digit, index) => (
                              <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                className="input"
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                              />
                            ))}
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