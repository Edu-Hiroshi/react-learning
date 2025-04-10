import React from "react";
import { Outlet, Link } from "react-router";

import "./DashboardNav.css";

export default function DashboardNav() {
  return (
    <>
      <nav className="dashboard-nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/details">Details</Link>
        <Link to="/dashboard/reviews">Reviews</Link>
      </nav>
      <Outlet/>
    </>
  )
}