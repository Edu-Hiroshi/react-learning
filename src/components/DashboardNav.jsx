import React from "react";
import { Outlet, NavLink } from "react-router";

import "./DashboardNav.css";

export default function DashboardNav() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#202020"
  }
  
  // end é usado para evitar que haja um highlight em dashboard (devido ao nesting de dashboard)

  return (
    <>
      <nav className="dashboard-nav">
        <NavLink 
          end
          to="/dashboard"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Dashboard
        </NavLink>

        <NavLink 
          to="/dashboard/details"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Details
        </NavLink>

        <NavLink 
          to="/dashboard/reading"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Reading
        </NavLink>

        <NavLink 
          to="/dashboard/reviews"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Reviews
        </NavLink>

      </nav>
      <Outlet/>
    </>
  )
}