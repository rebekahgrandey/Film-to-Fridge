import { useState, useEffect } from "react";
import { UserRecipes } from "./UserRecipes";
import "./UserHomePage.css";
import { FeaturedRecipes } from "../recipe/FeaturedRecipes";
import { UserFavorites } from "./UserFavorites";

export const UserHomePage = () => {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([])

  const localFilmUser = localStorage.getItem("film_user");
  const filmUserObject = JSON.parse(localFilmUser);

  useEffect(() => {
   fetch(`http://localhost:8088/users`)
     .then((response) => response.json())
     .then((userArray) => {
       setUsers(userArray);
     });
 }, []);

 useEffect(() => {
  fetch(`http://localhost:8088/recipes?_expand=user&_expand=film`)
    .then((response) => response.json())
    .then((userRecipesArray) => {
      setRecipes(userRecipesArray);
    });
}, []);

  return <>
  
  {
    users.map((user) => {
      if (filmUserObject.id === user.id)
      return (
        <h2 
        key={user.id} className="home-welcome-message">
          <img src="./images/waving-hand.svg" className="welcome-icon"/> Welcome, <span className="username">{user.username}!</span>
        </h2>
      );
    })
  }
 <div className="content-container">
< FeaturedRecipes recipes={recipes} />
< UserFavorites localUser={filmUserObject} recipes={recipes} users={users} />
< UserRecipes localUser={filmUserObject} recipes={recipes} />
</div> 
  </>;
}