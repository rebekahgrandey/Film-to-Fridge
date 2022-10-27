import { Outlet, Route, Routes } from "react-router-dom";
import { CreateRecipeForm } from "../forms/CreateRecipeForm";
import { RecipeDetails } from "../recipe/RecipeDetails";
import { ByRecipe } from "../recipeLists/ByRecipe";
import { RecipeEditForm } from "../recipe/RecipeEditForm";
import { UserHomePage } from "../UserPages/UserHomePage";

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
        >
        </Route>
          <Route path="/add-recipe" element={<CreateRecipeForm />} />
          <Route path="/recipes" element={<ByRecipe />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/recipes/:recipeId/edit" element={ <RecipeEditForm /> } />
      </Routes>
    </>
  );
};
