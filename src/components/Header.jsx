import { Link } from "react-router"
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">MANGA list</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Manga list</Link>
      </nav>
    </header>
  )
}