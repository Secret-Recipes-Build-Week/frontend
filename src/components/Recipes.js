import React, { useState } from "react";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";

function Recipes(props) {
  console.log(props);
  const { userData } = props;
  const [recipe] = useState(userData.recipes);
  console.log(recipe);

  return (
    <React.Fragment>
      <h1>recipe title</h1>

      {recipe &&
        recipe.map((reci) => (
          <section key={reci.id}>
            <h1
              onClick={() => {
                return <RecipeCard />;
              }}
            >
              {reci.title}
              {reci.id}
            </h1>
          </section>
        ))}
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
