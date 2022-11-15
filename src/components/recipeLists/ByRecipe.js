import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ByRecipe.css";

export const ByRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate;

  const getAllRecipes = () => {
    fetch(`http://localhost:8088/recipes?_sort=name`)
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
      <div className="recipe-list-container">
        <h2 className="recipe-list-title">All Recipes</h2>

        {recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="recipe-list-box">
              <Link className="recipe__link" to={`/recipes/${recipe.id}`}>
                {" "}
                <span className="by-recipe-name">{recipe.name}</span>{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};