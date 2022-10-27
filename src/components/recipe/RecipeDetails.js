import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, updateRecipe] = useState({});
  const [allRecipes, setAllRecipes] = useState([])

  const navigate = useNavigate()

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
    
  }

  const deleteRecipe = () => {
    fetch(`http://localhost:8088/recipes/${recipeId}`,
    {
      method: "DELETE"
    })
    .then(() => {
      getAllRecipes()
    }

    )
  }

  return (
    <div className="recipe-details-container">
      <h1 className="recipe-details-name">
        {recipe.name} by {recipe?.user?.username}
      </h1>
      <h4 className="recipe-details-from">From {recipe?.film?.name}</h4>
      <img src={recipe.imageUrl} className="recipe-details-image" />

      {recipe.userId === filmUserObject.id ? (
        <>
          <Link to={`/recipes/${recipe.id}/edit`}>
            <h5>Edit</h5>
          </Link>{" "}
          <button
            onClick={(event) => {
              deleteRecipe(event)
              navigate("/")
            }}
          >
            Delete
          </button>
        </>
      ) : (
        <></>
      )}

      <div className="recipe-details-description">{recipe.description}</div>
      <div className="recipe-details-ingredients">{recipe.ingredients}</div>
      <div className="recipe-details-instructions">{recipe.instructions}</div>
    </div>
  );
};

//     return <section className="employee">
//     <header>{employee?.user?.fullName}</header>
//     <div>Email: {employee?.user?.email}</div>
//     <div>Specialty: {employee.specialty}</div>
//     <div>Rate: {employee.rate}</div>
//     <footer>Currently working on {employee?.employeeTickets?.length}</footer>
// </section>
// }
