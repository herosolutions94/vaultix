import { useState } from "react";
import FileAttachment from "@/components/vault/FileAttachment";

export default function Account() {
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
        <div className="field_text m_b_2">
            <label htmlFor="#name">PUBLIC WALLET ADDRESS / ACCOUNT ID</label>
            <input type="text" className="input" placeholder="e.g., 0x71C... or bc1q..."/>
        </div>
        <div className="field_text m_b_2">
            <label htmlFor="#name">WALLET LOGIN PASSWORD</label>
            <input type="text" className="input" placeholder="e.g., MySecurePassword123"/>
        </div>
        <div className="field_text m_b_2">
            <label htmlFor="#name">SECURE NOTES / ACCESS INSTRUCTIONS</label>
            <input type="text" className="input" placeholder="e.g., Bitcoin Cold Wallet, Ethereum Ledger, Coinbase Account"/>
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
