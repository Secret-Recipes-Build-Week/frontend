import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const formInitialValue = {
  id: "",
  title: "",
  categories: [],
  keywords: "",
  private: false,
  source: "",
  instructions: [
    { step: 1, text: "" },
    { step: 2, text: "" },
  ],
  ingredients: [
    {
      name: "",
    },
  ],
};

function EditRecipe(props) {
  const { id } = useParams();
  // const newID = parseInt(id);
  const { push } = useHistory();
  const [editRecipe, setEditRecipe] = useState(formInitialValue);
  let recipeID = editRecipe.id;
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
    e.persist();
    console.log(e.target);
    // const { name, value } = e.target;
    console.log(e.target.name);
    setEditRecipe({
      ...editRecipe,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(editRecipe);

  // exit editing click
  const exitEdit = () => {
    push(`/dashboard`);
  };

  // POST ingredients
  const postIngredientSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        `https://familyrecipe-app-backend.herokuapp.com/api/recipes/${id}/ingredient`,
        editRecipe
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // PUT ingredient
  const putIngredientSubmit = (e) => {
    e.preventDefault();
    editRecipe.ingredients.filter((i) => {
      return axiosWithAuth()
        .put(
          `https://familyrecipe-app-backend.herokuapp.com/api/ingredients/${i.id}`,
          editRecipe
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  // ingredients
  for (let i = 0; i < ingredientNumber; i++) {
    const ingredientsInput = (
      <React.Fragment>
        <input
          key={i}
          id="ingredient"
          type="text"
          name="name"
          value={editRecipe.ingredients.name}
          onChange={handleChange}
        />
        <button onClick={postIngredientSubmit}>Submit Changes</button>
      </React.Fragment>
    );
    ingredientsInputs.push(ingredientsInput);
  }
  const handleAddIngredient = (e) => {
    e.preventDefault();

    setIngredientNumber(ingredientNumber + 1);
  };

  // POST instruction
  const postInstructionSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        `https://familyrecipe-app-backend.herokuapp.com/api/recipes/${id}/instruction`,
        editRecipe
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // PUT Instruction
  const putInstructionSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://familyrecipe-app-backend.herokuapp.com/api/instructions/${editRecipe.id}`,
        editRecipe
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
          value={editRecipe.instructions.text}
          onChange={handleChange}
        />
        <button onClick={postInstructionSubmit}>Submit Changes</button>
      </section>
    );
    instuctionsInputs.push(instuctionsInput);
  }
  const handleAddInstuctions = (e) => {
    e.preventDefault();

    setInstructionsNumber(instructionsNumber + 1);
  };

  // PUT reques for title, source, keywords, and private

  const titleKeywordsSpurceSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .put(
        `https://familyrecipe-app-backend.herokuapp.com/api/recipes/${recipeID}`,
        editRecipe
      )
      .then((res) => {
        console.log(res.data);
        setEditRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      {/* title */}
      {/* keywords */}
      {/* source */}

      <form onSubmit={titleKeywordsSpurceSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleChange}
          value={editRecipe.title}
        />
        <br />

        <label htmlFor="source">Source:</label>
        <input
          id="source"
          type="text"
          name="source"
          value={editRecipe.source}
          onChange={handleChange}
        />
        <br />

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
        <label htmlFor="name">Ingredients</label>
        {/* mapping through whats coming from the get request */}
        {editRecipe.ingredients.map((ingre, i) => {
          return (
            <section key={i}>
              <input
                key={i}
                id="name"
                type="text"
                name="name"
                value={ingre.name}
                onChange={handleChange}
              />
              <button onClick={putIngredientSubmit}>Submit Changes</button>
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
              <button onClick={putInstructionSubmit}>Submit Changes</button>
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
      <button onClick={exitEdit}>Exit Editing</button>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(EditRecipe);
