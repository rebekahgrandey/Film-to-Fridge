import { useState, useEffect } from "react";
import { UserRecipes } from "./UserRecipes";
import "./UserHomePage.css";
import { FeaturedRecipes } from "../recipe/FeaturedRecipes";
import { UserFavorites } from "./UserFavorites";
import { ControlledCarousel } from "../Carousel/Carousel";

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
          Welcome, {user.username}!
        </h2>
      );
    })
  }
 <div className="content-container">
< ControlledCarousel />
< FeaturedRecipes recipes={recipes} />
< UserFavorites localUser={filmUserObject} recipes={recipes} users={users} />
< UserRecipes localUser={filmUserObject} recipes={recipes} />
</div> 
  </>;
}

//if i fetch something again in a child component instead of passing it from the parent is that "bad"? or is it just more efficient to pass props?