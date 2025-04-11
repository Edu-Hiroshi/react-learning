import React from "react";
import { Link } from "react-router";

export default function NotFound () {
  return (
    <>
      <h1> 404: Sorry, the page you were looking for was not found. </h1>
      <Link to="/">Return to home page</Link>
    </>
    
  )
}