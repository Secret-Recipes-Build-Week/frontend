import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { initialValue } from "./initialValue";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const formInitialValue = {
  id: "",
  title: "",
  categories: [],
  keywords: "",
  private: false,
  // createdBy: `${this.firstName} ${this.lastName}`, //*changed 'userData' to 'this'. >>>created on backend?
  source: "",
  instructions: [
    { step: 1, text: "Preheat oven to 400°" },
    { step: 2, text: "Chop Vegetables" },
  ],
  ingredients: [
    {
      name: "Rice",
    },
  ],
};

function EditRecipe(props) {
  const { id } = useParams();
  // const newID = parseInt(id);
  const { push } = useHistory();
  const [editRecipe, setEditRecipe] = useState(formInitialValue);
  useEffect(() => {
    axiosWithAuth()
      .get(`https://familyrecipe-app-backend.herokuapp.com/api/recipes/${id}`)
      .then((res) => {
        console.log(res.data);
        setEditRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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

    setEditRecipe({
      ...editRecipe,
      [e.target.name]: e.target.value,
    });
  };

  // instructions
  for (let i = 0; i < instructionsNumber; i++) {
    const instuctionsInput = (
      <section>
        <input
          key={i}
          id="instructions"
          type="text"
          name="text"
          value={initialValue.instructions.text}
          onChange={handleChange}
        />
        <button>Submit Changes</button>
      </section>
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
      <React.Fragment>
        <input
          id="ingredient"
          type="text"
          name="ingredient"
          value={initialValue.ingredients.ingredient}
          onChange={handleChange}
        />
        <button>Submit Changes</button>
      </React.Fragment>
    );
    ingredientsInputs.push(ingredientsInput);
  }
  const handleAddIngredient = (e) => {
    e.preventDefault();

    setIngredientNumber(ingredientNumber + 1);
  };

  // put reques for title, source, keywords, and private

  return (
    <React.Fragment>
      <form>
        {/* title */}
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleChange}
          value={editRecipe.title}
        />
        <br />
        {/* source */}
        <label htmlFor="source">Source:</label>
        <input
          id="source"
          type="text"
          name="source"
          value={editRecipe.source}
          onChange={handleChange}
        />
        <br />
        {/* keywords */}
        <label htmlFor="keywords">Keywords:</label>
        <input
          id="keywords"
          type="text"
          name="keywords"
          value={editRecipe.keywords}
          onChange={handleChange}
        />
        <br />
        <button>Submit Change</button>
      </form>
      <br />
      {/* ingredient */}
      <form>
        <label htmlFor="ingredient">Ingredients</label>
        {/* mapping through whats coming from the get request */}
        {editRecipe.ingredients.map((ingre, i) => {
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
      <br />
      {/* instructions */}
      <form>
        <label htmlFor="instructions">Instructions:</label>
        {/* mapping through whats coming for the get request */}
        {editRecipe.instructions.map((instruct, i) => {
          return (
            <section key={i}>
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
      <br />
      {/* categories */}
      <form>
        <label htmlFor="category">Categories</label>
        <select name="category" id="category">
          <option value="">select a category</option>
          {editRecipe.categories.map((c, i) => (
            <option key={i} value={c.category}>
              {c.category}
            </option>
          ))}
        </select>
        <br />
        <button>Submit change</button>
      </form>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(EditRecipe);
