import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__logo">
            <Link className="navbar__link" to="/">Film To Fridge</Link>
            </li>
            {/* <li className="navbar__item navbar__sort-by-movie">
                <Link className="navbar__link" to="/movies">Browse by Movie/Show</Link>
            </li> */}
            <li className="navbar__item navbar__sort-by-name">
                <Link className="navbar__link" to="/recipes">Browse by Recipe Name</Link>
            </li>
            <li className="navbar__item navbar__add-recipe">
                <Link className="navbar__link" to="/add-recipe">Add New Recipe</Link>
            </li>
            

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("film_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}