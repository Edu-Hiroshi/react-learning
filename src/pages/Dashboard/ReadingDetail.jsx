import React from "react";
import { useParams } from "react-router";

export default function ReadingDetail() {
  const { id } = useParams() // deconstructed params to get id
  const [currentBook, setCurrentBook] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/dashboard/reading/${id}`)
      .then(res => res.json())
      .then(data => setCurrentBook(data.books))
  }, [])

  if (!currentBook) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>{currentBook.name}</h2>
      <p>{currentBook.price}</p>
      <p>{currentBook.type}</p>
    </div>
  )
}