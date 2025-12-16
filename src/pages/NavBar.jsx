import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className="navBar">
            <h3>React Music App</h3>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/newalbum">Add your Album</NavLink>
        <NavLink to = "/acercade">Acerca de</NavLink>
        </nav>
    )
}
export default NavBar