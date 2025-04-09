import { Link } from "react-router"
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">BOOK archive</Link>
      <nav>
        <Link className="links" to="/about">About</Link>
        <Link className="links" to="/books">Book list</Link>
      </nav>
    </header>
  )
}