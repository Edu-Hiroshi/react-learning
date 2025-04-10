import React from "react";
import { useOutletContext } from "react-router";

export default function ReadingInfo() {
  const {currentBook} = useOutletContext() // object destructure 
  
  return (
    <section>
      <p><b>Name:</b> {currentBook.name}</p>
      <p><b>Type:</b> {currentBook.type}</p>
      <p><b>Description:</b> {currentBook.description}</p>
    </section>
  )
}