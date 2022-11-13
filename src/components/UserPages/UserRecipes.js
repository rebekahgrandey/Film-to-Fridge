import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserRecipes.css";

export const UserRecipes = ({ localUser, recipes }) => {

  return (
    <>
      <div className="user-recipes-text-container">
      <h1 className="user-recipes-title">Your Recipes</h1>
      <div className="user-recipes-text">
        {recipes.map((recipe) => {
          if (localUser.id === recipe.userId)
               return <>
                <Link className="user-recipe__link" key={recipe.id} to={`/recipes/${recipe.id}`}>
                    <div className="user-recipe-box">
                    <img src={recipe.imageUrl} className="user-recipe-image" />
                <h3 className="user-recipe-name">{recipe.name}</h3>
              </div>
              </Link>
              </>
            
        })}
      </div>
      </div>
    </>
  );
};
