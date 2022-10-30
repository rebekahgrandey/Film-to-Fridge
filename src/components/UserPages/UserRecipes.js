import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserRecipes.css";

export const UserRecipes = ({ localUser }) => {
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/recipes?_expand=user`)
      .then((response) => response.json())
      .then((userRecipesArray) => {
        setUserRecipes(userRecipesArray);
      });
  }, []);

  return (
    <>
      <h2>Your Recipes</h2>
      <div className="user-recipes-container">
        {userRecipes.map((userRecipe) => {
          if (localUser.id === userRecipe.userId)
            return (
                <Link className="user-recipe__link" key={userRecipe.id} to={`/recipes/${userRecipe.id}`}>
                    <div className="user-recipe-box">
                    <img src={userRecipe.imageUrl} className="user-recipe-image" />
                <h3 className="user-recipe-name">{userRecipe.name}</h3>
              </div>
              </Link>
            );
        })}
      </div>
    </>
  );
};
