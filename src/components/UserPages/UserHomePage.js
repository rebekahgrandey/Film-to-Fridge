export const UserHomePage = () => {

   const localFilmUser = localStorage.getItem("film_user");
   const filmUserObject = JSON.parse(localFilmUser);

   return <> <h1>Welcome, User</h1>
              <div>subhead</div>
   </>
}