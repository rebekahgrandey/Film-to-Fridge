import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

export const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, updateRecipe] = useState({});
  const [allRecipes, setAllRecipes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `http://localhost:8088/recipes?_expand=user&_expand=film&id=${recipeId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const singleRecipe = data[0];
        updateRecipe(singleRecipe);
      });
  }, [recipeId]);

  const localFilmUser = localStorage.getItem("film_user");
  const filmUserObject = JSON.parse(localFilmUser);

  const getAllRecipes = () => {
    fetch(`http://localhost:8088/recipes`)
      .then((response) => response.json())
      .then((allRecipesArray) => {
        setAllRecipes(allRecipesArray);
      });
  };

  const deleteRecipe = () => {
    fetch(`http://localhost:8088/recipes/${recipeId}`, {
      method: "DELETE",
    }).then(() => {
      getAllRecipes();
    });
  };
  
  return (
    <div className="recipe-details-container">
      <h1 className="recipe-details-name">
        {recipe.name} by {recipe?.user?.username}
      </h1>
      <h4 className="recipe-details-from">From {recipe?.film?.name}</h4>
      <img src={recipe.imageUrl} className="recipe-details-image" />

      {recipe.userId === filmUserObject.id ? (
        <div className="recipe-details-button-container">
          <Link to={`/recipes/edit/${recipe.id}`}>
            <h5 className="edit-btn">Edit</h5>
          </Link>{" "}
          <button
            onClick={() => {
              deleteRecipe();
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}

  {/* if recipe.description.contains... then format */}

      <div className="recipe-details-description">
        <h3>DESCRIPTION</h3>
        {recipe.description}
      </div>
      <div className="recipe-details-ingredients">
        <h3>INGREDIENTS</h3>
        {recipe.ingredients}
      </div>
      <div className="recipe-details-instructions">
        <h3>INSTRUCTIONS</h3>
        {recipe.instructions}
      </div>
    </div>
  );
};