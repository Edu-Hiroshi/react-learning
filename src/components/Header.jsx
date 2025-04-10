import { Link, NavLink } from "react-router"
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">BOOK archive</Link>
      <nav>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null}
          to="/dashboard"
        >
          Dashboard
        </NavLink>

        <NavLink
          className={({isActive}) => isActive ? "active-link" : null}
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={({isActive}) => isActive ? "active-link" : null}
          to="/books"
        >
          Book list
        </NavLink>
      </nav>
    </header>
  )
}