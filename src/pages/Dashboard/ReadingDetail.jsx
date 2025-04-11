import React from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet
} from "react-router";

import "./ReadingDetail.css";

export default function ReadingDetail() {
  const { id } = useParams() // deconstructed params to get id
  const [currentBook, setCurrentBook] = React.useState(null)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#202020"
  }

  React.useEffect(() => {
    fetch(`/api/dashboard/reading/${id}`)
      .then(res => res.json())
      .then(data => setCurrentBook(data.books))
  }, [])

  if (!currentBook) {
    return <h1>Loading...</h1>
  }

  // TODO: adicionar css
  // relative para retornar ao caminho relativo do path (lista) e não da rota (dashboard)
  // end é usado para evitar que haja um highlight em dashboard (devido ao nesting de dashboard)
  // para passar informações por um outrlet é necessário usar "useOutletContext" nas páginas referentes
  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to currently reading list</span>
      </Link>

      <div>
        <div>
          <h2>{currentBook.name}</h2>
          <p>{currentBook.price}</p>
          <p>{currentBook.type}</p>
        </div>

        <nav className="dashboard-reading-detail-nav">
          <NavLink
            to="."
            end
            style={({isActive}) => isActive ? activeStyles : null}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            style={({isActive}) => isActive ? activeStyles : null}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({isActive}) => isActive ? activeStyles : null}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{currentBook: currentBook}} />
      </div>
    </section>

  )
}