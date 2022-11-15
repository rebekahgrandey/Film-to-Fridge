import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-custom fixed-top navbar-expand-lg navbar-light bg-light py-2 shadow p-3 mb-5 bg-white rounded ">
      <a className="navbar-brand ml-5" href="/">
      <div>
      <img src="/images/theater.svg" className="homepage-login-icon"/><img src="/images/right-arrow.svg" className="homepage-login-icon"/><img src="/images/fridge.svg" className="homepage-login-icon"/>
      </div>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

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