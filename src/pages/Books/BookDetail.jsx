import React from "react";
import { useParams } from "react-router";

import './BookDetail.css';

export default function BookDetail() {
  const params = useParams()
  const [book, setBook] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/books/${params.id}`)
      .then(res => res.json())
      .then(data => setBook(data.books))
  }, [params.id])

  return (
    <div className="book-detail-container">
      {
        book ? (
          <div className="book-detail">
            <i className={`book-type ${book.type} selected`}> {book.type} </i>
            <h2>{book.name}</h2>
            <div className="book-detail-info">
              <p>R${book.price}</p>
              <p>{book.description}</p>
            </div>
          </div>
        ) : <h2>Book unavailable</h2>
      }
    </div>
  )
}