import { useState } from "react";
import { useRouter } from "next/router";
import LayoutInherit from "@/components/layoutInherit";

export default function ActivatePage() {
  const router = useRouter();
  const [twoFA, setTwoFA] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="inherit-page">
      {/* Encrypted badge */}
      <div className="enc-badge">
        <span className="enc-dot" />
        <span>END-TO-END ENCRYPTED SESSION</span>
      </div>

      {/* Heading */}
      <div className="inherit-heading">
        <h1>Activate Your Vault</h1>
      </div>
      <p className="inherit-subtitle">
        Complete your beneficiary profile to secure the bridge between legacy and ownership. All
        data is processed via end-to-end encryption.
      </p>

      {/* Form */}
      <div className="activate-form-wrap">
        {/* Section 1: Personal Identity */}
        <div className="form-section-block">
          <div className="section-block-header">
            <span className="section-block-label">1. PERSONAL IDENTITY</span>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Legal Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Johnathan Q. Public"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="j.public@institutional.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Access Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••••••"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Section 2: Security & Verification */}
        <div className="form-section-block">
          <div className="section-block-header">
            <span className="section-block-label">2. SECURITY &amp; VERIFICATION</span>
            <div className="enc-badge-sm">
              <span className="enc-dot" />
              END-TO-END ENCRYPTED
            </div>
          </div>

          <div className="toggle-card-item">
            <div className="toggle-icon">
              <img src="/images/dashboard/lock.svg" alt="lock" />
            </div>
            <div className="toggle-info">
              <h4>Enable Hardware 2FA</h4>
              <p>Highly recommended for institutional accounts.</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={twoFA}
                onChange={() => setTwoFA((v) => !v)}
              />
              <span className="slider" />
            </label>
          </div>
        </div>

        {/* CTA */}
        <button
          className="site_btn color lg"
          onClick={() => router.push("/inherit/transfer")}
        >
          CREATE ACCOUNT &amp; CONTINUE
        </button>

        <p className="terms-text">
          By continuing, you agree to the Vaultix Fiduciary Terms of Service and Privacy Protocol.
        </p>
      </div>
    </div>
  );
}

ActivatePage.getLayout = function getLayout(page) {
  return <LayoutInherit currentStep={2}>{page}</LayoutInherit>;
};
