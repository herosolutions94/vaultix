import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";
import VaultHealthOverview from "@/components/vault/VaultHealthOverview";
import InheritanceTriggerStatus from "@/components/vault/InheritanceTriggerStatus";

const assets = [
  {
    id: 1,
    name: 'Bitcoin Cold Wallet',
    type: 'Crypto',
    badge: 'VERIFIED',
    badgeType: 'verified',
    lockDays: 180,
    icon:'/images/dashboard/bitcoin.svg',
  },
  {
    id: 2,
    name: 'Primary Chase Account',
    type: 'Finance',
    badge: 'VERIFIED',
    badgeType: 'verified',
    lockDays: 200,
    icon:'/images/dashboard/bank.svg',
  },
  {
    id: 3,
    name: 'Google Executive Account',
    type: 'Account',
    badge: 'PROTECTED',
    badgeType: 'protected',
    lockDays: 180,
    icon:'/images/dashboard/account.svg',
  },
];

export default function Vault() {
   
    return (
        <>
          <div className='dashboard-layout'>
            <Sidebar />
            <LoggedHeader />
            <div className='dashboard-main'>
                <div className="dash_header">
                  <div className="left_col">
                    <h2>My Vault</h2>
                    <p>Secure storage for digital assets, inheritance instructions, and protected legacy records.</p>
                  </div>
                  <div className="right_col">
                    <div className="tag_enc">
                      <img src="/images/dashboard/green-check.svg" alt=""/>
                      <span>END-TO-END ENCRYPTED SESSION</span>
                    </div>
                    <div className="btn_blk">
                      <Link href="vault/assets/add-asset" className="site_btn color"><img src="/images/dashboard/add.svg" alt="add assets" /><span>Add Asset</span></Link>
                    </div>
                  </div>
                </div>
                <div className="flex vault_pg_flex">
                    <div className="colL">
                        <VaultHealthOverview />
                    </div>
                    <div className="colR">
                        <InheritanceTriggerStatus />
                    </div>
                </div>
                <div className="recentSection">
                    <div className="dash_sec_header">
                        <h3 className="recentTitle dash_title">High-Value Assets</h3>
                        <Link href="vault/assets" className="viewAllBtn">VIEW ALL ASSETS</Link>
                    </div>

                    <div className="assetsRow">
                        {assets.map((asset) => (
                        <div key={asset.id} className="assetCard">
                            <div className="assetCardTop">
                            <div className="assetIconBox">
                                <img src={asset.icon} alt={asset.name} />
                            </div>

                            <span
                                className={
                                asset.badgeType === "verified"
                                    ? "badgeVerified"
                                    : "badgeProtected"
                                }
                            >
                                ● {asset.badge}
                            </span>
                            </div>

                            <p className="assetName">{asset.name}</p>
                            <p className="assetType">Type: {asset.type}</p>

                            <div className="assetFooter">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>

                            <span className="assetLockText">
                                INACTIVE LOCK: {asset.lockDays} DAYS
                            </span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                {/* ===vault catogory=== */}
                <div className="vault_category_dash">
                    <div className="dash_sec_header">
                        <h3 className="recentTitle dash_title">Vault Categories</h3>
                        <Link href="vault/categories" className="viewAllBtn">VIEW ALL CATEGORIES</Link>
                    </div>
                    <div className="vault_flex_cate flex">
                        <div className="col">
                            <div className="inner">
                                <div className="icon_cate">
                                    <img src="/images/dashboard/finance.svg" alt="Finance" />
                                </div>
                                <div className="cate_name">Finance</div>
                                <div className="count_assets">8 Assets</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <div className="icon_cate">
                                    <img src="/images/dashboard/legal-document.svg" alt="Legal Documents" />
                                </div>
                                <div className="cate_name">Legal Documents</div>
                                <div className="count_assets">14 Assets</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <div className="icon_cate">
                                    <img src="/images/dashboard/digital-assets.svg" alt="Digital Accounts" />
                                </div>
                                <div className="cate_name">Digital Accounts</div>
                                <div className="count_assets">21 Assets</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <div className="icon_cate">
                                    <img src="/images/dashboard/property.svg" alt="Properties" />
                                </div>
                                <div className="cate_name">Properties</div>
                                <div className="count_assets">2 Assets</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <div className="icon_cate">
                                    <img src="/images/dashboard/memory.svg" alt="Memories" />
                                </div>
                                <div className="cate_name">Memories</div>
                                <div className="count_assets">32 Assets</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
        </>
    );
}
Vault.getLayout = function (page) {
    return <LayoutDashboard>{page}</LayoutDashboard>;
};