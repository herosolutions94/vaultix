import { useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

const AVAILABLE_ASSETS = [
  { id: 1, name: "Primary Cold Storage (BTC)", type: "CRYPTOCURRENCY", icon: "/images/dashboard/bitcoin.svg" },
  { id: 2, name: "London Real Estate Deeds", type: "LEGAL DOCUMENT", icon: "/images/dashboard/legal-document.svg" },
  { id: 3, name: "Ethereum Node Rewards", type: "STAKING", icon: "/images/dashboard/finance.svg" },
  { id: 4, name: "Singapore Private Equity Certificates", type: "SECURITIES", icon: "/images/dashboard/digital-assets.svg" },
  { id: 5, name: "Vaultix Backup Seed (Encrypted)", type: "ACCESS KEY", icon: "/images/dashboard/key.svg" },
  { id: 6, name: "Offshore Bank Account", type: "FINANCE", icon: "/images/dashboard/bank.svg" },
  { id: 7, name: "Property Deed NYC", type: "LEGAL DOCUMENT", icon: "/images/dashboard/property.svg" },
  { id: 8, name: "Digital Identity Vault", type: "DIGITAL ACCOUNT", icon: "/images/dashboard/digital-assets.svg" },
];

export default function AddBeneficiary() {
  const [step, setStep] = useState(1);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const [identity, setIdentity] = useState({
    fullName: "",
    email: "",
    phone: "",
    relationship: "",
  });

  const [assetSearch, setAssetSearch] = useState("");
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [allocations, setAllocations] = useState({});

  const filteredAssets = AVAILABLE_ASSETS.filter((a) =>
    a.name.toLowerCase().includes(assetSearch.toLowerCase())
  );

  const toggleAsset = (asset) => {
    if (selectedAssets.find((a) => a.id === asset.id)) {
      setSelectedAssets(selectedAssets.filter((a) => a.id !== asset.id));
      const newAlloc = { ...allocations };
      delete newAlloc[asset.id];
      setAllocations(newAlloc);
    } else {
      setSelectedAssets([...selectedAssets, asset]);
      setAllocations({ ...allocations, [asset.id]: 50 });
    }
  };

  const selectAll = () => {
    if (selectedAssets.length === AVAILABLE_ASSETS.length) {
      setSelectedAssets([]);
      setAllocations({});
    } else {
      setSelectedAssets(AVAILABLE_ASSETS);
      const alloc = {};
      AVAILABLE_ASSETS.forEach((a) => { alloc[a.id] = 50; });
      setAllocations(alloc);
    }
  };

  const updateAllocation = (id, val) => {
    const num = Math.min(100, Math.max(0, Number(val)));
    setAllocations({ ...allocations, [id]: num });
  };

  const removeAsset = (id) => {
    setSelectedAssets(selectedAssets.filter((a) => a.id !== id));
    const newAlloc = { ...allocations };
    delete newAlloc[id];
    setAllocations(newAlloc);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUploadedPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const stepLabels = [
    { num: "01", label: "IDENTITY", step: 1 },
    { num: "02", label: "ASSETS", step: 2 },
    { num: "04", label: "SUMMARY", step: 3 },
  ];

  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main add_ben_main">

          <div className="add_ben_header">
            <div className="tag_enc justify-center">
              <img src="/images/dashboard/green-check.svg" alt="" />
              <span>END-TO-END ENCRYPTED SESSION</span>
            </div>
            <h2>Add Beneficiary</h2>
            <p>Configure security protocols and access rights.</p>
          </div>

          {/* Step indicator */}
          <div className="ben_stepper">
            {stepLabels.map((s, i) => (
              <div key={s.num} className="ben_step_wrap">
                <div className={`ben_step_col ${step === s.step ? "active" : step > s.step ? "done" : ""}`}>
                  <div className="ben_step_num">{s.num}</div>
                  <span className="ben_step_label">{s.label}</span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div className={`ben_step_line ${step > s.step ? "done" : ""}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Identity */}
          {step === 1 && (
            <div className="ben_form_card">
              <div className="ben_form_card_title">
                <img src="/images/dashboard/user.svg" alt="" />
                <span>Identity Information</span>
              </div>
              <div className="ben_identity_grid">
                <div className="ben_upload_col">
                  <label className="ben_upload_box" htmlFor="ben_photo_upload">
                    {uploadedPhoto ? (
                      <img src={uploadedPhoto} alt="ID" className="ben_uploaded_img" />
                    ) : (
                      <>
                        <img src="/images/dashboard/camera.svg" alt="" className="ben_upload_icon" />
                        <span className="ben_upload_label">UPLOAD ID</span>
                      </>
                    )}
                  </label>
                  <input
                    id="ben_photo_upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handlePhotoUpload}
                  />
                  {/* <p className="ben_bio_text">Biometric Verification Required</p> */}
                </div>

                <div className="ben_fields_grid">
                  <div className="field_text">
                    <label>Full Legal Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="As shown on passport"
                      value={identity.fullName}
                      onChange={(e) => setIdentity({ ...identity, fullName: e.target.value })}
                    />
                  </div>
                  <div className="field_text">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="secure-inbox@domain.com"
                      value={identity.email}
                      onChange={(e) => setIdentity({ ...identity, email: e.target.value })}
                    />
                  </div>
                  <div className="field_text">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      className="input"
                      placeholder="+1 (555) 000-0000"
                      value={identity.phone}
                      onChange={(e) => setIdentity({ ...identity, phone: e.target.value })}
                    />
                  </div>
                  <div className="field_text">
                    <label>Relationship</label>
                    <select
                      className="input"
                      value={identity.relationship}
                      onChange={(e) => setIdentity({ ...identity, relationship: e.target.value })}
                    >
                      <option value="">Select Relationship</option>
                      <option value="Spouse">Spouse</option>
                      <option value="Child">Child</option>
                      <option value="Son">Son</option>
                      <option value="Daughter">Daughter</option>
                      <option value="Parent">Parent</option>
                      <option value="Sibling">Sibling</option>
                      <option value="Legal Trustee">Legal Trustee</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Assets */}
          {step === 2 && (
            <div className="ben_form_card">
              <div className="ben_form_card_title">
                <img src="/images/dashboard/assets.svg" alt="" />
                <span>Asset Allocation</span>
              </div>
              <p className="ben_alloc_desc">
                Define which secure assets and digital legacies will be assigned to this beneficiary upon protocol trigger. You may assign full or partial ownership.
              </p>
              <div className="ben_alloc_grid">
                <div className="ben_alloc_left">
                  <div className="ben_asset_search">
                    <img src="/images/dashboard/search.svg" alt="" />
                    <input
                      type="text"
                      placeholder="Search available vault assets..."
                      value={assetSearch}
                      onChange={(e) => setAssetSearch(e.target.value)}
                    />
                  </div>
                  <div className="ben_asset_list_header">
                    <span>AVAILABLE ASSETS ({AVAILABLE_ASSETS.length})</span>
                    <button type="button" className="ben_select_all" onClick={selectAll}>
                      {selectedAssets.length === AVAILABLE_ASSETS.length ? "Deselect All" : "Select All"}
                    </button>
                  </div>
                  <div className="ben_asset_list">
                    {filteredAssets.map((asset) => {
                      const checked = !!selectedAssets.find((a) => a.id === asset.id);
                      return (
                        <div key={asset.id} className={`ben_asset_item ${checked ? "checked" : ""}`} onClick={() => toggleAsset(asset)}>
                          <div className={`ben_checkbox ${checked ? "active" : ""}`}>
                            {checked && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4l3 3 5-6" stroke="#E9C176" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <div className="ben_asset_item_info">
                            <span className="ben_asset_item_name">{asset.name}</span>
                            <span className="ben_asset_item_type">TYPE: {asset.type}</span>
                          </div>
                          <div className="ben_asset_item_icon">
                            <img src={asset.icon} alt="" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="ben_alloc_right">
                  <div className="ben_summary_title">ASSIGNMENT SUMMARY</div>
                  <div className="ben_summary_list">
                    {selectedAssets.map((asset) => (
                      <div key={asset.id} className="ben_summary_item">
                        <div className="ben_summary_item_top">
                          <span className="ben_summary_item_name">{asset.name}</span>
                          <button type="button" className="ben_remove_btn" onClick={() => removeAsset(asset.id)}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </button>
                        </div>
                        <div className="ben_summary_pct_label">PORTFOLIO PERCENTAGE</div>
                        {/* <div className="ben_pct_row">
                          <div className="ben_pct_track">
                            <div
                              className="ben_pct_fill"
                              style={{ width: `${allocations[asset.id] || 0}%` }}
                            />
                          </div>
                          <input
                            type="number"
                            className="ben_pct_input"
                            min="0"
                            max="100"
                            value={allocations[asset.id] || 0}
                            onChange={(e) => updateAllocation(asset.id, e.target.value)}
                          />
                          <span className="ben_pct_symbol">%</span>
                        </div> */}
                      </div>
                    ))}
                  </div>
                  <div className="ben_summary_total">
                    <span>TOTAL ASSETS SELECTED</span>
                    <span className="ben_total_count">{String(selectedAssets.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 (04): Summary */}
          {step === 3 && (
            <div className="ben_form_card">
              <div className="ben_summary_review_title">Succession Summary Review</div>

              <div className="ben_review_section">
                <div className="ben_review_section_head">
                  <div className="ben_review_section_label">
                    <img src="/images/dashboard/user.svg" alt="" />
                    <span>Identity Review</span>
                  </div>
                  <button type="button" className="ben_edit_btn" onClick={() => setStep(1)}>Edit</button>
                </div>
                <div className="ben_review_identity">
                  <div className="ben_review_photo">
                    {uploadedPhoto ? (
                      <img src={uploadedPhoto} alt="ID" />
                    ) : (
                      <div className="ben_review_photo_placeholder">
                        <img src="/images/dashboard/user.svg" alt="" />
                      </div>
                    )}
                  </div>
                  <div className="ben_review_id_grid">
                    <div className="ben_review_field">
                      <span className="ben_review_field_label">FULL LEGAL NAME</span>
                      <span className="ben_review_field_val">{identity.fullName || "John Doe"}</span>
                    </div>
                    <div className="ben_review_field">
                      <span className="ben_review_field_label">RELATIONSHIP</span>
                      <span className="ben_review_field_val">{identity.relationship || "Son"}</span>
                    </div>
                    <div className="ben_review_field">
                      <span className="ben_review_field_label">EMAIL</span>
                      <span className="ben_review_field_val">{identity.email || "john.doe@example.com"}</span>
                    </div>
                    <div className="ben_review_field">
                      <span className="ben_review_field_label">PHONE NUMBER</span>
                      <span className="ben_review_field_val">{identity.phone || "+1 (555) 000-0000"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ben_review_section">
                <div className="ben_review_section_head">
                  <div className="ben_review_section_label">
                    <img src="/images/dashboard/assets.svg" alt="" />
                    <span>Asset Allocation</span>
                  </div>
                  <button type="button" className="ben_edit_btn" onClick={() => setStep(2)}>Edit</button>
                </div>
                <div className="ben_review_assets">
                  {selectedAssets.length === 0 && (
                    <p className="ben_no_assets">No assets assigned yet.</p>
                  )}
                  {selectedAssets.map((asset) => (
                    <div key={asset.id} className="ben_review_asset_row">
                      <div className="ben_review_asset_info">
                        <span className="ben_review_asset_name">{asset.name}</span>
                        <span className="ben_review_asset_type">TYPE: {asset.type}</span>
                      </div>
                      {/* <div className="ben_review_asset_pct_wrap">
                        <div className="ben_pct_track">
                          <div className="ben_pct_fill" style={{ width: `${allocations[asset.id] || 0}%` }} />
                        </div>
                        <span className="ben_review_pct">{allocations[asset.id] || 0}%</span>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="ben_nav_bar">
            {step > 1 ? (
              <button type="button" className="ben_back_btn" onClick={() => setStep(step - 1)}>
                ← BACK
              </button>
            ) : (
              <div />
            )}
            <div className="ben_nav_right">
              <button type="button" className="ben_draft_btn">SAVE AS DRAFT</button>
              {step < 3 ? (
                <button type="button" className="site_btn color ben_next_btn" onClick={() => setStep(step + 1)}>
                  NEXT STEP
                </button>
              ) : (
                <button type="button" className="site_btn color ben_next_btn">
                  FINALIZE BENEFICIARY
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

AddBeneficiary.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
