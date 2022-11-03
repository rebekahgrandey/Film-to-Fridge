import { Link } from "react-router-dom";
import "./FeaturedRecipes.css";

export const FeaturedRecipes = ({ recipes }) => {
  return (
    <>
      <div className="featured-recipe">
        <h1 className="featured-recipe-title">Featured Recipe of the Week</h1>

        {recipes.map((recipe) => {
          if (recipe.user.id === 7 && recipe.id === 10)
            return (
              <div 
              key={recipe.id}
              className="featured-recipe-container">
                <Link to={`/recipes/${recipe.id}`}>
                  <img
                    src={recipe.imageUrl}
                    className="featured-recipe-image"
                  />
                </Link>
                <div className="featured-recipe-and-text">
                  <h3 className="featured-recipe-text">
                    {recipe.name} by {recipe.user.username}
                    <div className="featured-recipe-text-subhead">
                      From {recipe.film.name}
                    </div>
                  </h3>

                  <div className="featured-recipe-description">
                    {recipe.description}
                    <Link to={`/recipes/${recipe.id}`}>
                        <div className="featured-recipe-view">View Full Recipe →</div>
                        </Link>   
                  </div>
                </div>
              </div>
            );
        })}

        <div>
          <h2></h2>
        </div>
      </div>
    </>
  );
};
