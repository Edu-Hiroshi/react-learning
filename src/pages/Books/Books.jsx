import React from "react";
import { Link, useSearchParams } from "react-router";

import './Books.css';
import { getBooks } from "../../api"

export default function Books() {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const [books, setBooks] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect (() => {
    async function loadBooks() {
      setLoading(true)
      try {
        const data = await getBooks()
        setBooks(data)
      }
      catch (err) {
        setError(err)
      }
      finally {
        setLoading(false)
      }
    }

    loadBooks()
  }, [])

  const displayedBooks = typeFilter ? books.filter(book => book.type === typeFilter) : books

  // enviando search params (ex: "type:shounen") para o BookDetail via state
  const bookElements = displayedBooks.map(book => (
    <div key={book.id} className="book-cell">
      <Link
        to={book.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}
      >
        <div className="book-info">
          <h3>{book.name}</h3>
          <p>R${book.price}</p>
        </div>
        <i className={`book-type ${book.type} selected`}>
          {book.type}
        </i>
      </Link>
    </div>
  ))

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <div className="book-list-container">
      <h1>Available books:</h1>

      <div>
        <button 
          onClick={() => setSearchParams({type: "shounen"})}
          className={`book-type shounen ${typeFilter === "shounen" ? "selected" : ""}`}
        >
          Shounen
        </button>

        <button 
          onClick={() => setSearchParams({type: "shoujo"})}
          className={`book-type shoujo ${typeFilter === "shoujo" ? "selected" : ""}`}
        >
          Shoujo
        </button>

        <button 
          onClick={() => setSearchParams({type: "seinen"})}
          className={`book-type seinen ${typeFilter === "seinen" ? "selected" : ""}`}
        >
          Seinen
        </button>

        <button 
          onClick={() => setSearchParams({type: "american"})}
          className={`book-type american ${typeFilter === "american" ? "selected" : ""}`}
        >
          American
        </button>

        { typeFilter ?
          (
            <button 
              onClick={() => setSearchParams({})}
              className="book-type clear-filters"
            >
              Clear filters
            </button>
          ) : null
        }
      </div>

      <div className="book-list">
        {bookElements}
      </div>
    </div>
  )
}