import { useState } from "react";

export default function Password() {
    const [selected, setSelected] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSelect = (value) => {
        setSelected(value);
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
        <div className="dbl_field">
            
            <div className="field_text">
                <label>USER NAME / EMAILL</label>
                <input type="text" className="input" placeholder="Associated username or email"/>
            </div>
            <div className="field_text">
                <label>PASSWORD</label>
                <div className="pwd_wrap">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="input"
                        placeholder="Enter password"
                    />
                    <button
                        type="button"
                        className="pwd_eye"
                        onClick={() => setShowPassword((v) => !v)}
                    >
                        <img
                            src={showPassword ? "/images/dashboard/eye_hide.svg" : "/images/dashboard/eye.svg"}
                            alt={showPassword ? "Hide password" : "Show password"}
                        />
                    </button>
                </div>
            </div>
            <div className="field_text">
                <label>PLATEFORM</label>
                <input type="text" className="input" placeholder="e.g. Gmail, Facebook"/>
            </div>
            <div className="field_text full_field_text">
                <label>SECURE NOTES</label>
                <textarea className="input" placeholder="Any recovery instructions or hints"></textarea>
            </div>
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
    
  </>
  );
}
