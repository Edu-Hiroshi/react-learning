import React from "react";
import { Link } from "react-router";
import "./Reading.css"

export default function Reading() {
  const [books, setBooks] = React.useState([])
  
  React.useEffect(() => {
    fetch("/api/dashboard/reading")
      .then(res => res.json())
      .then(data => setBooks(data.books))
  }, [])
  
  const dashboardBooksElements = books.map(book => (
    <Link to={book.id} key={book.id}>
      <div
        className="dashboard-book-cell"
        key={book.id}
      >
        <div className="dashboard-book-info">
          <h3>{book.name}</h3>
          <p>R${book.price}</p>
        </div>
        <i className={`dashboard-book-type ${book.type} selected`}>
          {book.type}
        </i>
      </div>
    </Link>
  ))
  
  return (
    <section>
      <h1>Currently reading list:</h1>
        <div className="dashboard-book-list">
          {
            books.length > 0 ? (
              <section>{dashboardBooksElements}</section>
            ) : (
              <h2>Loading... </h2>
            )
          }
        </div>
    </section>
  )
}