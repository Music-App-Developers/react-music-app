import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <img className = "logo"src="src/images/albumory-logo.png" alt="" />
            <div className="menu">
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/newalbum">Add your Album</NavLink></li>
                <li><NavLink to="/acercade">About us</NavLink></li>
                </ul>
            </div>

        </nav>
    )
}
export default NavBar