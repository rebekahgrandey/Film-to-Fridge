import { Outlet, Route, Routes } from "react-router-dom";
import { CreateRecipeForm } from "../forms/CreateRecipeForm";
import { RecipeDetails } from "../recipe/RecipeDetails";
import { ByRecipe } from "../recipeLists/ByRecipe";
import { RecipeEditForm } from "../recipe/RecipeEditForm";
import { UserHomePage } from "../UserPages/UserHomePage";
import { ByMovie } from "../recipeLists/ByMovie";
import { UserProfile } from "../UserPages/UserProfile";

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              
            <UserHomePage />
            </>
          }
        />
        
          <Route path="/add-recipe" element={<CreateRecipeForm />} />
          <Route path="/recipes" element={<ByRecipe />} />
          <Route path="/movies" element={<ByMovie />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/recipes/edit/:recipeId" element={ <RecipeEditForm /> } />
          {/* <Route path="/:userId" element={ <UserProfile /> } /> */}
      </Routes>
    </>
  );
};

//? nesting here
