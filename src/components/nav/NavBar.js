import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-custom fixed-top navbar-expand-lg navbar-light bg-light py-4 shadow p-3 mb-5 bg-white rounded ">
      <a className="navbar-brand ml-5" href="/">
        Film to Fridge
      </a>
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item ml-5">
            <a className="nav-link" href="/recipes">
              Browse Recipes
            </a>
          </li>
          <li className="nav-item ml-4">
            <a className="nav-link" href="/add-recipe">
              Add New Recipe
            </a>
          </li>
          <li className="nav-item ml-4">
            <a className="nav-link" href="" onClick={() => {
            localStorage.removeItem("film_user")
            navigate("/", { replace: true })
        }}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
// <ul className="navbar">
//     <li className="navbar__logo">
//     <Link className="navbar__link" to="/">Film To Fridge</Link>
//     </li>
//     {/* <li className="navbar__item navbar__sort-by-movie">
//         <Link className="navbar__link" to="/movies">Browse by Movie/Show</Link>
//     </li> */}
//     <li className="navbar__item navbar__sort-by-name">
//         <Link className="navbar__link" to="/recipes">Browse by Recipe Name</Link>
//     </li>
//     <li className="navbar__item navbar__add-recipe">
//         <Link className="navbar__link" to="/add-recipe">Add New Recipe</Link>
//     </li>

//     <li className="navbar__item navbar__logout">
//         <Link className="navbar__link" to="" onClick={() => {
//             localStorage.removeItem("film_user")
//             navigate("/", { replace: true })
//         }}>Logout</Link>
//     </li>
// </ul>
