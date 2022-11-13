export const FavoriteButton = ({ filmUserObject, recipeId, userFavorites }) => {
  
  function findId(idRecipe) {
    return idRecipe === recipeId
  }
  console.log(idRecipe)
  
  if (userFavorites.find(findId)) {
  return (
        <>
          <button
            className="favorites-btn"
            onClick={() => {
              fetch(`http://localhost:8088/userFavorites`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: filmUserObject.id,
                  recipeId: recipeId,
                }),
              }).then((response) => response.json());
            }}
          >
            Favorite
          </button>
        </>
      );
} else {
  <h1>hi</h1>
}}