import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";

function Recipes(props) {
  // console.log(props);
  const { userData } = props;
  const [recipe] = useState(userData.recipes);
  // console.log(recipe);

  return (
    <React.Fragment>
      <h1>recipe title</h1>

      {recipe &&
        recipe.map((reci, i) => {
          return (
            <section>
              <Link key={i} to={`/dashboard/recipe/${reci.id}`}>
                {reci.title}
              </Link>
            </section>
          );
        })}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
    id: state.userData.id,
    firstName: state.userData.firstName,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(Recipes);
