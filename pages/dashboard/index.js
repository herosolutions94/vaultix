import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutDashboard from "@/components/layoutDashbaord";
import Sidebar from "@/components/Sidebar";

export default function Dashboard({ result }) {
   
    return (
        <>
          <div className='dashboard-layout'>
            <Sidebar />
            <div className='dashboard-main'>
              
            </div>
          </div>
        </>
    );
}
Dashboard.getLayout = function (page) {
    return <LayoutDashboard>{page}</LayoutDashboard>;
};