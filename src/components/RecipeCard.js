import React from "react";
import { connect } from "react-redux";

function RecipeCard(props) {
  return (
    <div>
      {/* <h1>{props.recipe.title}</h1>
      <p>{props.recipe.categories}</p>
      <p>{props.recipe.createdBy}</p> */}
      {/* {props.recipe.ingredients.map((i) => (
        <p>{i.name}</p>
      ))}
      {props.recipe.instructions.map((i) => (
        <p>{i.text}</p>
      ))} */}
    </div>
  );
}

export default RecipeCard;
