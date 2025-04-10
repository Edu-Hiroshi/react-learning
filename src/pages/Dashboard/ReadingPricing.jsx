import React from "react";
import { useOutletContext } from "react-router";

export default function ReadingPricing() {
  const {currentBook} = useOutletContext()
  
  return (
    <div>R${currentBook.price}</div>
  )
}