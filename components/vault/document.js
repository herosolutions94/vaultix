import { useState } from "react";
import DatePicker from "@/components/DatePicker";
import FileAttachment from "@/components/vault/FileAttachment";

export default function Document() {
    const [selected, setSelected] = useState("");
    const [executionDate, setExecutionDate] = useState("");
    const [notarized, setNotarized] = useState(false);

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
                <label>DOCUMENT TYPE</label>
                <select className="input">
                    <option>Will</option>
                    <option>Property</option>
                    <option>Legal Documents</option>
                </select>
            </div>
            <div className="field_text">
                <label>EXECUTION DATE</label>
                <DatePicker value={executionDate} onChange={setExecutionDate} />
            </div>
            <div className="field_text">
                <div className="toggle_field">
                    <div className="toggle_info">
                        <span className="toggle_label">Notarized</span>
                        <span className="toggle_sub">OFFICIAL CERTIFICATION INCLUDED</span>
                    </div>
                    <label className="toggle_switch">
                        <input
                            type="checkbox"
                            checked={notarized}
                            onChange={() => setNotarized((v) => !v)}
                        />
                        <span className="toggle_track" />
                    </label>
                </div>
            </div>
            <div className="field_text">
                <label>PHYSICAL LOCATION OF ORIGINAL</label>
                <input type="text" className="input" placeholder="e.g. Zurich Main Branch, Box #402"/>
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
