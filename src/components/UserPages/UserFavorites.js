import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserFavorites.css";

export const UserFavorites = ({ localUser, users, recipes }) => {
  const [allFavorites, setAllFavorites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/userFavorites?&_expand=user&_expand=recipe`)
      .then((response) => response.json())
      .then((userFavoritesArray) => {
        setAllFavorites(userFavoritesArray);
      });
  }, []);

  return (
    <>
      <div className="user-favorites-text-container">
        <h1 className="user-favorites-title">Your Favorites</h1>
        <div className="user-favorites-text">
          {allFavorites.map((userFavorite) => {
            if (localUser.id === userFavorite.userId)
              return (
                <>
                  <Link
                    className="user-favorite__link"
                    key={userFavorite.id}
                    to={`/recipes/${userFavorite.recipeId}`}
                  >
                    <div className="user-favorite-box">
                      <img
                        src={userFavorite.recipe.imageUrl}
                        className="user-favorite-image"
                      />
                      <h3 className="user-favorite-name">
                        {userFavorite.recipe.name}
                      </h3>
                    </div>
                  </Link>
                </>
              );
          })}
        </div>
      </div>
    </>
  );
};
