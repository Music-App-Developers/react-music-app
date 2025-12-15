import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className="navBar">
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/newalbum">Add your Album</NavLink>
        <NavLink to = "/acercade">Acerca de</NavLink>
        </nav>
    )
}
export default NavBar