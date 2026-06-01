import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";
import LoggedHeader from "@/components/header-logged";

export default function Dashboard({ result }) {
   
    return (
        <>
          <div className='dashboard-layout'>
            <Sidebar />
            <LoggedHeader />
            <div className='dashboard-main'>
              
            </div>
          </div>
        </>
    );
}
Dashboard.getLayout = function (page) {
    return <LayoutDashboard>{page}</LayoutDashboard>;
};