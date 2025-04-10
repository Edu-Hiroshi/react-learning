import React from "react";
import { useOutletContext } from "react-router";

export default function ReadingProtos() {
  const {currentBook} = useOutletContext()
  
  return (
    <div>TODO: {currentBook.name} image</div>
  )
}