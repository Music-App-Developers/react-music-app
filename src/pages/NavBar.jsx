import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <h3 className="logo">React Music App</h3>
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