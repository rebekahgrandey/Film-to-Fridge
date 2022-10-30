import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import "./ByMovie.css";

export const ByMovie = () => {
    const [films, setFilms] = useState([])
    const [recipes, setRecipes] = useState([]);
    const [recipeCategories, setRecipeCategories] = useState([])
  
    useEffect(() => {
        fetch(`http://localhost:8088/films`)
          .then((response) => response.json())
          .then((filmsArray) => {
            setFilms(filmsArray);
          });
      }, []);

      useEffect(() => {
        fetch(`http://localhost:8088/recipes`)
          .then((response) => response.json())
          .then((recipesArray) => {
            setRecipes(recipesArray);
          });
      }, []);

      useEffect(() => {
        fetch(`http://localhost:8088/recipeCategories`)
          .then((response) => response.json())
          .then((recipeCategoriesArray) => {
            setRecipeCategories(recipeCategoriesArray);
          });
      }, []);

      const filmRecipeList = (film, recipe) => {
        return (
            <>
              <h2 className="film-list-recipe-titles">
                {film.name}
              </h2>
        
              {recipeCategories.map((recipeCategory) => {
                // if (recipe.recipeCategoryId === 1)
                return (
                  <div
                    key={recipeCategory.id}
                    className="recipeCatogorie-list-box"
                  >
                      <h3>{recipeCategory.name}</h3> 
                      if (recipe.recipeCategory === 1)
                      
                  </div>
                )
              })}
            </>
          );
      }

      return (
        <>
          <h2 className="film-list-title">All Movies/Shows</h2>
    
          {films.map((film) => {
            // if (recipe.recipeCategoryId === 1)
            return (
              <div
                key={film.id}
                className="film-list-box"
              >
                  {film.name} 
              </div>
            )
          })}
        </>
      );
}