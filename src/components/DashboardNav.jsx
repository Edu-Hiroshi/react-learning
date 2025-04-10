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
          to="."
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Dashboard
        </NavLink>

        <NavLink 
          to="tags"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Tags
        </NavLink>

        <NavLink 
          to="reading"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Reading
        </NavLink>

        <NavLink 
          to="reviews"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Reviews
        </NavLink>

      </nav>
      <Outlet/>
    </>
  )
}