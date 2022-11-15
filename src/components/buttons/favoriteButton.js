import { useNavigate } from "react-router-dom";
import "./favoriteButton.css"

export const FavoriteButton = ({ filmUserObject, recipeId }) => {
  const navigate = useNavigate()
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
              }).then((response) => response.json())
              .then(navigate("/"))
            }}
          >
            <img src="/images/heart-favorite.svg" className="fave-icon"/>Add to Favorites
          </button>
        </>
      );
}