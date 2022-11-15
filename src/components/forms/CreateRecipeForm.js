import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRecipeForm.css";

export const CreateRecipeForm = () => {
  const [films, setFilms] = useState([]);
  const [recipeCategories, setRecipeCategories] = useState([]);
  const [userId, setUserId] = useState(0);
  const [userChoices, setUserChoices] = useState({
    filmId: 0,
    name: "",
    imageUrl: "",
    description: "",
    ingredients: "",
    instructions: "",
    recipeCategoryId: 0,
    userId: ""
  });
  const navigate = useNavigate();

  const localFilmUser = localStorage.getItem("film_user");
  const filmUserObject = JSON.parse(localFilmUser);
  
  
  useEffect(() => {
    setUserId(filmUserObject.id);
  }, []);

  
  const saveNewRecipe = (event) => {
    event.preventDefault();
    
    userChoices.userId = userId

    if (
      userChoices.filmId &&
      userChoices.name &&
      userChoices.imageUrl &&
      userChoices.description &&
      userChoices.ingredients &&
      userChoices.instructions &&
      userChoices.recipeCategoryId
    )
      fetch(`http://localhost:8088/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userChoices),
      }).then(navigate("/"));
  };


  const saveLocalUser = () => {
    const copy = { ...userChoices };
    copy.userId = parseInt(userId);
    setUserChoices(copy);
  };

  useEffect(() => {
    fetch(`http://localhost:8088/films`)
      .then((response) => response.json())
      .then((filmArray) => {
        setFilms(filmArray);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8088/recipeCategories`)
      .then((response) => response.json())
      .then((categoryArray) => {
        setRecipeCategories(categoryArray);
      });
  }, []);

  return (
    <form className="recipe-form">
      <h2 className="recipe-form-title">Add A New Recipe</h2>
      <h4 className="recipe-form-subhead">All fields required</h4>

      <fieldset>
        <div className="form-group">
          <select
            className="films"
            id="film-select"
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.filmId = parseInt(event.target.value);
              setUserChoices(copy);
            }}
          >
            <option key={0} value="0">
              Select Show/Movie
            </option>
            {films.map((film) => {
              return (
                <option
                  id={film.id}
                  key={film.id}
                  value={film.id}
                  className="product-form-dropdown"
                >
                  {film.name}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>

      <fieldset>
        
          <label htmlFor="recipe-name" className="recipe-form-label">
            Recipe Name:
          </label>
          <div><textarea
            className="form-input-box"
            type="text"
            id="recipe-name"
            value={userChoices.name}
            placeholder="Enter name"
            autocomplete="off"
            required
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.name = event.target.value;
              setUserChoices(copy);
            }}
          /></div>
        
      </fieldset>

      <fieldset>
        
          <label htmlFor="recipe-name" className="recipe-form-label">
            Description:
          </label>
          <div><textarea
            className="form-input-box description"
            type="text"
            id="recipe-name"
            value={userChoices.description}
            placeholder="Enter recipe description"
            autocomplete="off"
            required
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.description = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        
          <label htmlFor="ingredients" className="recipe-form-label">
            Ingredients:
          </label>
          <div><textarea
            className="form-input-box ingredients"
            type="text"
            id="ingredients"
            value={userChoices.ingredients}
            placeholder="Enter ingredient list"
            autocomplete="off"
            required
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.ingredients = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
      
          <label htmlFor="instructions" className="recipe-form-label">
            Instructions:
          </label>
          <div><textarea
            className="form-input-box instructions"
            type="text"
            id="instructions"
            value={userChoices.instructions}
            placeholder="Enter instructions"
            autocomplete="off"
            required
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.instructions = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        
          <label htmlFor="imageUrl" className="recipe-form-label">
            Image URL:
          </label>
          <div><textarea
            className="form-input-box"
            type="text"
            id="imageUrl"
            value={userChoices.imageUrl}
            placeholder="Paste image URL here"
            autocomplete="off"
            required
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.imageUrl = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <div>Recipe Category</div>
          {recipeCategories.map((recipeCategory) => {
            return (
              <div key={recipeCategory.id} className="recipe-form-radio">
                <label>
                  <input
                    type="radio"
                    value={recipeCategory.id}
                    required
                    checked={userChoices.recipeCategoryId === recipeCategory.id}
                    onChange={(event) => {
                      const copy = { ...userChoices };
                      copy.recipeCategoryId = parseInt(event.target.value);
                      setUserChoices(copy);
                    }}
                  />
                  <span className="radio-label">{recipeCategory.name}</span>
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>

      <button
        className="create-btn"
        onClick={(event) => {
          saveLocalUser()
          saveNewRecipe(event);
        }}
      >
        Submit
      </button>
    </form>
  );
};