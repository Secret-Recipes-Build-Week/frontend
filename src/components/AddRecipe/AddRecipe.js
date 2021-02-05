import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import StyledAddRecipe from "./StyledAddRecipe";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { addRecipe } from "../../store/actions";

const labelStyleObject = {
  fontSize: "1.6rem",
  fontFamily: "Shadows Into Light, cursive",
  display: "inline-block",
  opacity: "80%",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  fontWeight: "bold",
};

const checkboxStyleObject = {
  display: "inline"
}

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
  const { push } = useHistory();
  console.log("AddRecipe.js props", props);

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
    // console.log(dataReadyToShip);
    // console.log("THIS MUST BE A NUMBER", id);

    axiosWithAuth()
      .post(`/api/user/${id}/recipes`, dataReadyToShip)
      .then((res) => {
        console.log(res);
        props.addRecipe(dataReadyToShip);

        axiosWithAuth()
        .get(`api/user/${res.data.id}`)
        .then((res) => {
            console.log(res.data)
            props.setUserInfo(res.data);
            push("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          });
        push("/dashboard");
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
        <div className="formTopSection">
        <div className="formTop" id="first">
        <h1 className="formTopHeader">1. Add Some Details </h1>
        <label style={labelStyleObject} htmlFor="title">
          What is this recipe called?
          <br />
          <input
            type="text"
            id="title"
            placeholder="title"
            onChange={changeHandler}
            value={form.title}
            className="formField"
          />
        </label>


        <label style={labelStyleObject} htmlFor="categories">
          {" "}
          Which category best fits this recipe?
          <br />
          <select
            id="categories"
            onChange={changeHandler}
            value={form.categories}
            className="formField"
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

        <label style={labelStyleObject} htmlFor="keywords">
          {" "}
          Describe your recipe in a sentence or two.
          <br />
          <input
            type="text"
            id="keywords"
            placeholder="a cookie as old as time..."
            onChange={changeHandler}
            value={form.keywords}
            className="formField"
          />
        </label>

        <label style={labelStyleObject} htmlFor="source">
          {" "}
          Who originated this recipe?
          <br />
          <input
            type="text"
            id="source"
            placeholder="source"
            onChange={changeHandler}
            value={form.source}
            className="formField"
          />
        </label>
        </div>
        <div className="textFields">
        <div className="formTop">
        <label htmlFor="ingredients" className="textArealabel">
          {" "}
          <h1 className="formTopHeaderTwo">2. List Ingredients </h1>
          <textarea
            id="ingredients"
            placeholder="Separate ingredients use a *"
            onChange={changeHandler}
            value={form.ingredients}
          />
        </label>
        </div>

        <div className="formTop">
        <label htmlFor="instructions" className="textArealabel">
          {" "}
          <h1 className="formTopHeader">3. Write Instructions Here</h1>
          <textarea
            id="instructions"
            placeholder="Separate steps use a *"
            onChange={changeHandler}
            value={form.instructions}
            className="textAreaStyle"
          />
        </label>
        </div>
        </div>
        </div>
        {/* //!Only offer if we display on landing page some public things */}
        <div className="formBottom">
        <label htmlFor="private">
          {" "}
          <span className="formPrivate">Select if you would like to share this recipe publicly. </span>
          <input
            type="checkbox"
            id="private"
            placeholder="private"
            onChange={changeHandler}
            checked={form.private}
            style={checkboxStyleObject}
          />
        </label>

        {form.title ? (
          <button disabled={false}>Add Recipe</button>
        ) : (
          <button disabled={true}>Finish Editing</button>
        )}
        </div>
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
export default connect(mapStateToProps, { addRecipe })(AddRecipe);
