import React, { useState } from "react";
import { initialValue } from "./initialValue";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function EditRecipe(props) {
  const { id } = useParams();
  const newID = parseInt(id);
  const { push } = useHistory();
  const [editRecipe, setEditRecipe] = useState(props.userData.recipes);
  // edit page will need access to the state for recipe to fill in the form
  const [instructionsNumber, setInstructionsNumber] = useState(0);
  const [ingredientNumber, setIngredientNumber] = useState(0);
  let instuctionsInputs = [];
  let ingredientsInputs = [];

  if (!editRecipe) {
    return <div>Loading recipe information...</div>;
  }
  // onChange
  const handleChange = (e) => {
    console.log(e.target.name);
    // const { name, value } = e.target;

    setEditRecipe([
      {
        ...editRecipe,
        [e.target.name]: e.target.value,
      },
    ]);
  };
  console.log(editRecipe);

  // instructions
  for (let i = 0; i < instructionsNumber; i++) {
    const instuctionsInput = (
      <input
        key={i}
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
        key={i}
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
      {editRecipe.map((r, i) => (
        <form key={i}>
          {/* title */}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="text"
            onChange={handleChange}
            value={r.title}
          />
          <br />
          {/* source */}
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            name="source"
            value={r.source}
            onChange={handleChange}
          />
          <br />
          {/* keywords */}
          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            name="keywords"
            value={r.keywords}
            onChange={handleChange}
          />
          <br />
          <button>Submit Change</button>
        </form>
      ))}
      {/* categories */}
      {editRecipe.map((r, i) => (
        <form key={i}>
          <label htmlFor="categories">Categories</label>
          <select name="categories" id="categories">
            <option value="">select a category</option>
            {r.categories.map((c, i) => (
              <option key={i} value={c.category}>
                {c.category}
              </option>
            ))}
          </select>
          <br />
          <button>Submit change</button>
        </form>
      ))}
      {/* ingredient */}
      {editRecipe.map((r, i) => (
        <form key={i}>
          <label htmlFor="ingredient">Ingredients</label>
          {/* mapping through whats coming from the get request */}
          {r.ingredients.map((ingre, i) => {
            return (
              <section key={i}>
                <input
                  key={i}
                  id="ingredient"
                  type="text"
                  value={ingre.name}
                  name="ingredient"
                  onChange={handleChange}
                />
                <button>Submit Changes</button>
              </section>
            );
          })}
          {/* maps through the adding of input */}
          {ingredientsInputs.map((inp) => {
            return inp;
          })}
          <button onClick={handleAddIngredient}>Add Ingredient</button>
        </form>
      ))}
      {/* instructions */}
      {editRecipe.map((r, i) => (
        <form key={i}>
          <label htmlFor="instructions">Instructions:</label>
          {/* mapping through whats coming for the get request */}
          {r.instructions.map((instruct) => {
            return (
              <section>
                <input
                  key={instruct.text}
                  id="instructions"
                  type="text"
                  value={instruct.text}
                  name="text"
                  onChange={handleChange}
                />
                <button>Submit Changes</button>
              </section>
            );
          })}
          {/* maps through the adding of input */}
          {instuctionsInputs.map((inp) => {
            return inp;
          })}
          <button onClick={handleAddInstuctions}>Add instructions</button>
        </form>
      ))}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(EditRecipe);
