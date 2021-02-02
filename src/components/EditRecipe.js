import React, { useState } from "react";
import { initialValue } from "./initialValue";

const instuctionsLength = initialValue.instructions.length;
console.log(instuctionsLength);
export default function EditRecipe() {
  // edit page will need access to the state for recipe to fill in the form
  const [instructionsNumber, setInstructionsNumber] = useState(0);
  const [ingredientNumber, setIngredientNumber] = useState(0);
  let instuctionsInputs = [];
  let ingredientsInputs = [];

  const handleChange = () => {};

  // instructions
  for (let i = 0; i < instructionsNumber; i++) {
    const instuctionsInput = (
      <input
        key={initialValue.instructions.text}
        id="instructions"
        type="text"
        name="text"
        value={initialValue.instructions.text}
        onChange={handleChange}
      />
    );
    instuctionsInputs.push(instuctionsInput);
  }
  const handleAddInstuctions = (e) => {
    e.preventDefault();

    setInstructionsNumber(instructionsNumber + 1);
  };

  // ingredients
  for (let i = 0; i < ingredientNumber; i++) {
    const ingredientsInput = (
      <input
        key={initialValue.ingredients.ingredient}
        id="ingredient"
        type="text"
        name="ingredient"
        value={initialValue.ingredients.ingredient}
        onChange={handleChange}
      />
    );
    ingredientsInputs.push(ingredientsInput);
  }
  const handleAddIngredient = (e) => {
    e.preventDefault();

    setIngredientNumber(ingredientNumber + 1);
  };

  return (
    <React.Fragment>
      <form>
        {/* title */}
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <br />
        {/* categories */}
        <label htmlFor="categories">Categories</label>
        <select name="categories" id="categories">
          <option value="">select a category</option>
          <option value="">dinner</option>
        </select>
        <br />
        {/* instructions */}
        <label htmlFor="instructions">Instructions</label>;
        {/* mapping through whats coming for the get request */}
        {initialValue.instructions.map((instruct) => {
          return (
            <input
              key={instruct.text}
              id="instructions"
              type="text"
              value={instruct.text}
              name="text"
              onChange={handleChange}
            />
          );
        })}
        {/* maps through the adding of input */}
        {instuctionsInputs.map((inp) => {
          return inp;
        })}
        <button onClick={handleAddInstuctions}>Add instructions</button>
        <br />
        {/* ingredient */}
        <label htmlFor="ingredient">Ingredients</label>
        {/* mapping through whats coming for the get request */}
        {initialValue.ingredients.map((ingre) => {
          return (
            <input
              key={ingre.ingredient}
              id="ingredient"
              type="text"
              value={ingre.ingredient}
              name="ingredient"
              onChange={handleChange}
            />
          );
        })}
        {/* maps through the adding of input */}
        {ingredientsInputs.map((inp) => {
          return inp;
        })}
        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </form>
    </React.Fragment>
  );
}

// for number of insturctions/engredient

// const [number, setNumber] = useSate(1);

//for(let i = 0, i > number, i++){
//     const instuctionsInput = <input id="instructions" type="text" />;
//     return instuctionsInput;
// }
