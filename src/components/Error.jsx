import React from "react";
import { useRouterError } from "react-router";

export default function Error() {
  const error = useRouterError()

  return (
    <>
      <h1>Error: {error.message}</h1>
      <pre>{error.status} - {error.statusText}</pre>
    </>
  )
}