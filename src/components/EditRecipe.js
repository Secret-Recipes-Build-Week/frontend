import React, { useState } from "react";
import { initialValue } from "./initialValue";

const instuctionsLength = initialValue.instructions.length;
console.log(instuctionsLength);
export default function EditRecipe() {
  // edit page will need access to the state for recipe to fill in the form
  const [number, setNumber] = useState(0);
  let inputs = [];

  //function addInput(num) {
  for (let i = 0; i < number; i++) {
    const instuctionsInput = (
      <input id="instructions" type="text" name="text" />
    );
    inputs.push(instuctionsInput);
  }
  // return inputs;
  //}
  //addInput(number);

  const instructionsLabel = <label htmlFor="instructions">Instructions</label>;

  const handleAddInstuctions = (e) => {
    e.preventDefault();
    setNumber(number + 1);
  };

  return (
    <React.Fragment>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />

        <br />

        <label htmlFor="categories">Categories</label>
        <select name="categories" id="categories">
          <option value="">select a category</option>
          <option value="">dinner</option>
        </select>

        <br />
        {instructionsLabel}
        {initialValue.instructions.map((instruct) => {
          return <input type="text" value={instruct.text} />;
        })}

        {inputs.map((inp) => {
          return inp;
        })}
        <button onClick={handleAddInstuctions}>Add instructions</button>
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
