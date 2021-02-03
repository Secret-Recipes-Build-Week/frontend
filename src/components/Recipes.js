import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Recipes(props) {
  console.log(props);
  const { userData } = props;
  const { push } = useHistory();
  const [recipe, setRecipe] = useState(userData.recipes);
  console.log(recipe);

  return (
    <React.Fragment>
      <h1>recipe title</h1>

      {recipe &&
        recipe.map((reci) => (
          <section key={reci.id}>
            <h1
            // onClick={() => {
            //   displayRecipe(reci.id);
            // }}
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
