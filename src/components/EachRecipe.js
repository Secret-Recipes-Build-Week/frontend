import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function EachRecipe(props) {
  const { id } = useParams();
  console.log(id);
  const [recipe, setRecipe] = useState(props.userData.recipes);
  console.log(props.userData.recipes);
  if (!recipe) {
    return <div>Loading recipe information...</div>;
  }
  return (
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(EachRecipe);
