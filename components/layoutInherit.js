import React from "react";
import Link from "next/link";
import Head from "next/head";

const STEPS = ["Claim", "Activate", "Transfer", "Ownership"];

export default function LayoutInherit({ children, currentStep = 1 }) {
  return (
    <>
      <Head>
        <title>Vaultix — Inheritance</title>
        <meta name="description" content="Vaultix Inheritance Transfer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="inherit-flow">
        <div className="inherit-topbar">
          <Link href="/" className="inherit-logo">
            <img src="/images/logo.png" alt="Vaultix" />
          </Link>
        </div>

        <div className="inherit-stepper-wrap">
          <div className="inherit-stepper">
            {STEPS.map((label, i) => {
              const num = i + 1;
              const isActive = num === currentStep;
              const isDone = num < currentStep;
              return (
                <React.Fragment key={num}>
                  <div className={`step-item${isActive ? " active" : ""}${isDone ? " done" : ""}`}>
                    <div className="step-bubble">{num}</div>
                    <span className="step-label">{label}</span>
                  </div>
                  {i < STEPS.length - 1 && <span className="step-line" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="inherit-body">
          {children}
        </div>
      </div>
    </>
  );
}
