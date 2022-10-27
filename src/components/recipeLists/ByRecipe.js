import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ByRecipe.css";

export const ByRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate;

  const getAllRecipes = () => {
    fetch(`http://localhost:8088/recipes`)
      .then((response) => response.json())
      .then((recipeArray) => {
        setRecipes(recipeArray);
      });
  };

  useEffect(() => {
  getAllRecipes();
  }, []);

  return (
    <>
      <h2 className="recipe-list-title">Recipes A-Z</h2>

      {recipes.map((recipe) => {
        return (
          <div
            key={recipe.id}
            className="recipe-list-name"
            // onClick={navigate("/recipes")}
          >
            <Link className="navbar__link" to={`/recipes/${recipe.id}`}>
              {" "}
              {recipe.name}{" "}
            </Link>
          </div>
        );
      })}
    </>
  );
};
