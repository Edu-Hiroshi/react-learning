import React from 'react'
import './Books.css';

export default function Books() {
  const [books, setBooks] = React.useState([])

  React.useEffect (() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(data => setBooks(data.books))
  }, [])

  console.log(books)

  const bookElements = books.map(book => (
    <div key={book.id} className="book-cell">
      <div className="book-info">
        <h3>{book.name}</h3>
        <p>R${book.price}</p>
      </div>
      <i className={`book-type ${book.type} selected`}>
        {book.type}
      </i>
    </div>
  ))

  return (
    <div className="book-list-container">
      <div className="book-list">
        {bookElements}
      </div>
    </div>
  )
}