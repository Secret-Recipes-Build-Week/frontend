import React, { useState } from "react";
const initialValue = {
  title: "",
  categories: "",
  instructions: [
    {
      step1: "",
    },
  ], //array of objects of steps?
  ingredients: [
    {
      ingredient1: "",
    },
  ], //array of objects of ingredients?
};

export default function Dashboard() {
  const [recipe, setRecipe] = useState(initialValue);
  console.log(recipe);

  return (
    <div>
      <h1>Welcome User</h1>
      {/* user is able to see all the recipes 
      user can click on a recipe
      there user can edit/delete the specific recipe

      developer needs:
      ID for each for each recipe
      */}
    </div>
  );
}
