import { useState, useEffect } from "react";
import { UserRecipes } from "./UserRecipes";
import "./UserHomePage.css";

export const UserHomePage = () => {
  const [users, setUsers] = useState([]);

  const localFilmUser = localStorage.getItem("film_user");
  const filmUserObject = JSON.parse(localFilmUser);

  useEffect(() => {
   fetch(`http://localhost:8088/users`)
     .then((response) => response.json())
     .then((userArray) => {
       setUsers(userArray);
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
  
< UserRecipes localUser={filmUserObject} />
  </>;
}

