import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../images/albumory-logo.png"
import "./NavBar.css"
import { useAuth } from "../contexts/AuthContext"

function NavBar({ search, setSearch }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const { user } = useAuth();

    return (
        <nav className="navbar">
            <NavLink to="/"><img className="logo" src={logo} alt="Albumory Logo" /></NavLink>

            <input
                type="text"
                className="search-input"
                placeholder="Search album, artist, year or style"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                {user && <li><NavLink to="/newalbum" onClick={() => setMenuOpen(false)}>Add Album</NavLink></li>}
                <li><NavLink to="/acercade" onClick={() => setMenuOpen(false)}>About us</NavLink></li>
                <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>LogIn</NavLink></li>
            </ul>

            <div
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default NavBar
