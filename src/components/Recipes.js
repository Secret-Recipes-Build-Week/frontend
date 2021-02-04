import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";

function Recipes(props) {
  console.log("recipes file", props);
  const { userData } = props;

  return (
    <React.Fragment>
      {/* {userData &&
        userData.map((r) => (
          <Link key={r.id} to={`/dashboard/recipe/${r.id}`}>
            <RecipeCard recipe={r} />
          </Link>
        ))} */}
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
