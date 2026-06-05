import { useState } from "react";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

export default function Settings() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [twoFaEnabled, setTwoFaEnabled] = useState(true);

  const [profile, setProfile] = useState({
    fullName: "Alexander von Vault",
    email: "alexander@vaultix.ch",
    phone: "+41 44 211 01 11",
    address: "Bahnhofstrasse 45, Zurich, Switzerland",
  });

  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <LoggedHeader />
        <div className="dashboard-main">

          <div className="dash_header">
            <div className="left_col">
              <h2>Profile &amp; Security Settings</h2>
              <p>Manage your institutional identity and cryptographic access protocols.</p>
            </div>
            <div className="right_col">
              <div className="tag_enc">
                <img src="/images/dashboard/green-check.svg" alt="" />
                <span>END-TO-END ENCRYPTED SESSION</span>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="sett_card sett_profile_card">
            <div className="sett_profile_left">
              <div className="sett_avatar">
                <img src="/images/dashboard/BeneficiaryProfile.png" alt="profile" />
              </div>
              <button className="site_btn blank white sett_change_img_btn">CHANGE IMAGE</button>
              <button className="sett_remove_btn">REMOVE</button>
            </div>
            <div className="sett_profile_right">
              <div className="sett_form_grid">
                <div className="field_text">
                  <label>Full Name</label>
                  <input
                    className="input"
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  />
                </div>
                <div className="field_text">
                  <label>Email Address</label>
                  <input
                    className="input"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div className="field_text sett_full_col">
                  <label>Phone Number</label>
                  <input
                    className="input"
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                </div>
                <div className="field_text sett_full_col">
                  <label>Address</label>
                  <input
                    className="input"
                    type="text"
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  />
                </div>
              </div>
              <div className="sett_profile_actions">
                <button className="site_btn color">SAVE CHANGES</button>
                <button className="site_btn blank white">CANCEL</button>
              </div>
            </div>
          </div>

          {/* Password + 2FA row */}
          <div className="sett_two_col">

            {/* Change Password */}
            <div className="sett_card">
              <div className="sett_card_head">
                <div className="sett_card_title_row">
                  <div className="sett_card_title">
                    <img src="/images/dashboard/clr_lock.svg" alt="" />
                    <span>Change Password</span>
                  </div>
                  <div className="tag_enc">
                    <img src="/images/dashboard/green-check.svg" alt="" />
                    <span>END-TO-END ENCRYPTED SESSION</span>
                  </div>
                </div>
                <p className="sett_card_sub">Use a strong password to keep your vault secure.</p>
              </div>

              <div className="sett_pwd_fields">
                <div className="field_text">
                  <label>Current Password</label>
                  <div className="pwd_wrap">
                    <input
                      className="input"
                      type={showCurrent ? "text" : "password"}
                      defaultValue="••••••••••••"
                    />
                    <button className="pwd_eye" onClick={() => setShowCurrent((v) => !v)}>
                      <img src={showCurrent ? "/images/dashboard/eye_hide.svg" : "/images/dashboard/eye.svg"} alt="" />
                    </button>
                  </div>
                </div>
                <div className="field_text">
                  <label>New Password</label>
                  <div className="pwd_wrap">
                    <input
                      className="input"
                      type={showNew ? "text" : "password"}
                      placeholder="Enter new password"
                    />
                    <button className="pwd_eye" onClick={() => setShowNew((v) => !v)}>
                      <img src={showNew ? "/images/dashboard/eye_hide.svg" : "/images/dashboard/eye.svg"} alt="" />
                    </button>
                  </div>
                </div>
                <div className="field_text">
                  <label>Confirm New Password</label>
                  <input className="input" type="password" placeholder="Confirm new password" />
                </div>
              </div>

              <button className="site_btn sett_update_pwd_btn">UPDATE PASSWORD</button>
            </div>

            {/* Two-Factor Authentication */}
            <div className="sett_card">
              <div className="sett_card_head">
                <div className="sett_card_title">
                  <img src="/images/dashboard/auth.svg" alt="" />
                  <span>Two-Factor Authentication</span>
                </div>
                <p className="sett_card_sub">Two-factor authentication adds an extra security layer to protect your vault.</p>
              </div>

              <div className="sett_2fa_row">
                <div className="sett_2fa_row_left">
                  <div className="sett_2fa_icon">
                    <img src="/images/dashboard/email-green.svg" alt="" />
                  </div>
                  <div className="sett_2fa_info">
                    <span className="sett_2fa_method">Email Verification</span>
                    <span className="sett_2fa_email">ALEXANDER@VAULTIX.CH</span>
                  </div>
                </div>
                <button
                  className={`sett_toggle${twoFaEnabled ? " sett_toggle_on" : ""}`}
                  onClick={() => setTwoFaEnabled((v) => !v)}
                >
                  <span className="sett_toggle_knob" />
                </button>
              </div>

              <div className="sett_2fa_btns">
                <button className="site_btn blank white">BACKUP CODES</button>
                <button className="site_btn blank white">RESET 2FA</button>
              </div>

              <button className="site_btn color sett_configure_btn">CONFIGURE NEW METHOD</button>
            </div>

          </div>

          {/* Danger Zone */}
          <div className="sett_card sett_danger_card">
            <div className="sett_danger_left">
              <div className="sett_danger_title">
                <img src="/images/dashboard/warn.svg" alt="" />
                <span>Danger Zone</span>
              </div>
              <p className="sett_danger_sub">Permanently delete your vault and all associated records. This action is irreversible and will result in the immediate loss of access to all secured assets.</p>
            </div>
            <button className="site_btn sett_delete_btn">DELETE ACCOUNT</button>
          </div>

        </div>
      </div>
    </>
  );
}

Settings.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
