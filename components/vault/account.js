import { useRef, useState } from "react";
export default function Account() {
    const [selected, setSelected] = useState("");

    const handleSelect = (value) => {
        setSelected(value);
    };
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        console.log("Selected files:", files);
    };
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
            {/* Spouse */}
            <div
                className={`col_ben ${selected === "spouse" ? "active" : ""}`}
                onClick={() => handleSelect("spouse")}
            >
                <div className="inner_ben">
                <div className="name">Spouse (Sarah Jenkins)</div>

                <input
                    type="radio"
                    name="assign_asset"
                    checked={selected === "spouse"}
                    onChange={() => handleSelect("spouse")}
                />
                </div>
            </div>

            {/* Son */}
            <div
                className={`col_ben ${selected === "son" ? "active" : ""}`}
                onClick={() => handleSelect("son")}
            >
                <div className="inner_ben">
                <div className="name">Son (Michael Vance)</div>

                <input
                    type="radio"
                    name="assign_asset"
                    checked={selected === "son"}
                    onChange={() => handleSelect("son")}
                />
                </div>
            </div>

            {/* Family Trust */}
            <div
                className={`col_ben ${selected === "trust" ? "active" : ""}`}
                onClick={() => handleSelect("trust")}
            >
                <div className="inner_ben">
                <div className="name">Family Trust</div>

                <input
                    type="radio"
                    name="assign_asset"
                    checked={selected === "trust"}
                    onChange={() => handleSelect("trust")}
                />
                </div>
            </div>
        </div>
    </div>
    <div className="cmn_frm_blk attachment_blk_assets">
        <div className="frm_heading">FILE ATTACHMENT</div>
        <div className="inner_upload">
            <div className="icon_upload">
                <img src="/images/dashboard/upload.svg" alt="upload file" />
            </div>
            <h3>Drag and drop assets here</h3>
            <small>Upload proof of ownership or backup instructions (PDF, PNG)</small>
            <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple
            />

            {/* Button triggers file input */}
            <button
            type="button"
            className="upload_btn"
            onClick={handleButtonClick}
            >
            SELECT FILES
            </button>
        </div>
        <div className="uploaded_state">
            <div className="uploaded_frm">
                <button type="button"><img src="/images/dashboard/cross.svg" alt="file" /></button>
                <img src="/images/dashboard/file.svg" alt="file" />
                <div className="info_file">
                    <div className="name">Trust_Deed_Final.pdf</div>
                    <small>2.1 MB</small>
                </div>
            </div>
        </div>
    </div>
  </>
  );
}
