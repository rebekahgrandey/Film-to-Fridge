import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./RecipeEditForm.css";

export const RecipeEditForm = () => {


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
  const { recipeId } = useParams()

  const localFilmUser = localStorage.getItem("film_user");
  const filmUserObject = JSON.parse(localFilmUser);

  useEffect(() => {
    setUserId(filmUserObject.id);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8088/recipes/${recipeId}`)
      .then((response) => response.json())
      .then((recipeIdArray) => {
        setUserChoices(recipeIdArray);
      });
  }, []);
  
  const handleSaveButtonClick = (event) => {
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
      fetch(`http://localhost:8088/recipes/${recipeId}`, {
        method: "PUT",
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
    <form className="product-form">
      <h2 className="product-form-title">Edit Recipe</h2>
      <h4 className="product-form-subhead">All fields required</h4>

      <fieldset>
        <div className="form-group">
          <select
            className="films"
            id="film-select"
            value={userChoices.filmId}
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
        <div className="form-group">
          <label htmlFor="recipe-name" className="recipe-form-label">
            Recipe Name:
          </label>
          <input
            className="form-recipe-name-box"
            type="text"
            id="recipe-name"
            value={userChoices.name}
            required
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.name = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="product-name" className="product-form-label">
            Description:
          </label>
          <input
            className="form-description-box"
            type="text"
            id="product-name"
            value={userChoices.description}
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
        <div className="form-group">
          <label htmlFor="ingredients" className="recipe-form-label">
            Ingredients:
          </label>
          <input
            className="form-ingredients-box"
            type="text"
            id="ingredients"
            value={userChoices.ingredients}
            placeholder="Enter ingredient list"
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
        <div className="form-group">
          <label htmlFor="instructions" className="recipe-form-label">
            Instructions:
          </label>
          <input
            className="form-instructions-box"
            type="text"
            id="instructions"
            value={userChoices.instructions}
            placeholder="Enter instructions"
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
        <div className="form-group">
          <label htmlFor="imageUrl" className="recipe-form-label">
            Image URL:
          </label>
          <input
            className="form-imageUrl-box"
            type="text"
            id="imageUrl"
            value={userChoices.imageUrl}
            placeholder="Paste image URL here"
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
                  {recipeCategory.name}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>

      <button
        className="recipe-form-button"
        onClick={(event) => {
          saveLocalUser()
          handleSaveButtonClick(event);
        }}
      >
        Submit Edits
      </button>
    </form>
  );
};