import React, { useState } from "react";
import { connect } from "react-redux";

import StyledAddRecipe from "./StyledAddRecipe";
import axiosWithAuth from "../../utils/axiosWithAuth";

const initState = {
  title: "test",
  categories: "breakfast",
  // keywords: "keyword, keyword",
  // private: false,
  source: "Bubby",
  instructions: "asdf * adsfasgegkgjawelkh * Step 14: wash hands * the end",
  ingredients: "asdf, asdf * asdf, asdf",
};

const categoryArr = [
  "---Please Select one---",
  "breakfast",
  "lunch",
  "dinner",
  "side",
  "entrée",
  "dessert",
];

const AddRecipe = (props) => {
  const [form, setForm] = useState(initState);
  const { id } = props.userData;
  console.log('Should contain ID',props.userData);

  const formatData = (form) => {
    //instructions
    const instructionsArr = [];
    const splitForm = form.instructions.split("*");
    splitForm.forEach((step, index) => {
      let objEl = {};
      objEl.step = index + 1;
      objEl.text = step.trim();
      instructionsArr.push(objEl);
    });

    //ingredients
    const splitIngs = form.ingredients.split("*");

    //category
    const catArr = [form.categories];

    return {
      ...form,
      instructions: instructionsArr,
      ingredients: splitIngs,
      categories: catArr,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataReadyToShip = formatData(form);
    console.log(dataReadyToShip);
    console.log("THIS MUST BE A NUMBER", id);

    axiosWithAuth()
      .post(`/api/user/${id}/recipes`, dataReadyToShip)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setForm(initState);
  };

  const changeHandler = (e) => {
    if (e.target.type === "checkbox") {
      setForm({
        ...form,
        [e.target.id]: !form[e.target.id],
      });
    } else {
      setForm({
        ...form,
        [e.target.id]: e.target.value,
      });
    }
  };

  return (
    <StyledAddRecipe>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          What is this dish called?
          <input
            type="text"
            id="title"
            placeholder="title"
            onChange={changeHandler}
            value={form.title}
          />
        </label>

        <label htmlFor="categories">
          {" "}
          Select a category:
          <select
            id="categories"
            onChange={changeHandler}
            value={form.categories}
          >
            {categoryArr.map((cat) => {
              return (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="keywords">
          {" "}
          Keywords you'd like to tag this with:
          <input
            type="text"
            id="keywords"
            placeholder="keywords"
            onChange={changeHandler}
            value={form.keywords}
          />
        </label>

        <label htmlFor="source">
          {" "}
          Who originated this recipe?
          <input
            type="text"
            id="source"
            placeholder="source"
            onChange={changeHandler}
            value={form.source}
          />
        </label>

        <label htmlFor="ingredients" className="textArealabel">
          {" "}
          Ingredients:
          <textarea
            id="ingredients"
            placeholder="Separate ingredients use a *"
            onChange={changeHandler}
            value={form.ingredients}
          />
        </label>

        <label htmlFor="instructions" className="textArealabel">
          {" "}
          Instructions:
          <textarea
            id="instructions"
            placeholder="Separate steps use a *"
            onChange={changeHandler}
            value={form.instructions}
          />
        </label>

        {/* //!Only offer if we display on landing page some public things */}
        <label htmlFor="private">
          {" "}
          Select if you would like to share this recipe publicly?
          <input
            type="checkbox"
            id="private"
            placeholder="private"
            onChange={changeHandler}
            checked={form.private}
          />
        </label>

        {form.title ? (
          <button disabled={false}>Add this recipe</button>
        ) : (
          <button disabled={true}>Add this recipe</button>
        )}
      </form>
    </StyledAddRecipe>
  );
};

//
//* This needs to dispatch an action to update Redux to keep in synch with backend when new recipe is added.
//

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(AddRecipe);
