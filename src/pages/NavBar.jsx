import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar () {
    return (
        <nav className="navbar">
            <h3 className="logo">React Music App</h3>
            <div className="menu">
                <NavLink  to = "/">Home</NavLink>
        <NavLink to = "/newalbum">Add your Album</NavLink>
        <NavLink to = "/acercade">About us</NavLink>
            </div>
        
        </nav>
    )
}
export default NavBar