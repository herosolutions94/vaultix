import { useState } from "react";
import FileAttachment from "@/components/vault/FileAttachment";

export default function Other() {
    const [selected, setSelected] = useState("");

    const handleSelect = (value) => setSelected(value);

  return (
  <>
    <div className="cmn_frm_blk">
        <div className="asset_head_flex">
            <div className="frm_heading">SECURE DETAILS</div>
            <div className="tag_enc">
                <img src="/images/dashboard/green-check.svg" alt=""/>
                <span>END-TO-END ENCRYPTED SESSION</span>
            </div>
        </div>
        <div className="dbl_field">
            <div className="field_text">
                <label>Value / Info (optional)</label>
                <input type="text" className="input" placeholder="Any value, identifier, or reference info"/>
            </div>
            <div className="field_text full_field_text">
                <label>Description</label>
                <textarea className="input" placeholder="Describe this asset in detail"></textarea>
            </div>
        </div>
    </div>

    <div className="cmn_frm_blk">
        <div className="frm_heading">ASSIGNMENT</div>
        <div className="ben_devide_asset_flex">
            <div
                className={`col_ben ${selected === "spouse" ? "active" : ""}`}
                onClick={() => handleSelect("spouse")}
            >
                <div className="inner_ben">
                    <div className="name">Spouse (Sarah Jenkins)</div>
                    <input type="radio" name="assign_asset" checked={selected === "spouse"} onChange={() => handleSelect("spouse")} />
                </div>
            </div>
            <div
                className={`col_ben ${selected === "son" ? "active" : ""}`}
                onClick={() => handleSelect("son")}
            >
                <div className="inner_ben">
                    <div className="name">Son (Michael Vance)</div>
                    <input type="radio" name="assign_asset" checked={selected === "son"} onChange={() => handleSelect("son")} />
                </div>
            </div>
            <div
                className={`col_ben ${selected === "trust" ? "active" : ""}`}
                onClick={() => handleSelect("trust")}
            >
                <div className="inner_ben">
                    <div className="name">Family Trust</div>
                    <input type="radio" name="assign_asset" checked={selected === "trust"} onChange={() => handleSelect("trust")} />
                </div>
            </div>
        </div>
    </div>

    <FileAttachment />
  </>
  );
}
