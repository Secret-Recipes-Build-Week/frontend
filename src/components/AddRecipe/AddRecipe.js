import React, { useState } from "react";
import StyledAddRecipe from "./StyledAddRecipe";

const initState = {
  title: "",
  categories: "",
  keywords: "",
  private: false,
  source: "",
  instructions: "",
  ingredients: "",
};

const AddRecipe = (props) => {
  const [form, setForm] = useState(initState);
  console.log(form);

  const formatData = (form) => {
    const instructionObj = {};
    const splitForm = form.instructions.split("*");
    splitForm.forEach((step, index) => {
      let propName = `Step ${index + 1}`;
      instructionObj[propName] = step.trim();
    });
    return {
      ...form,
      instructions: instructionObj,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataReadyToShip = formatData(form);
    //*post request here
    console.log(dataReadyToShip);
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
          <input
            type="text"
            id="title"
            placeholder="title"
            onChange={changeHandler}
            value={form.title}
          />
        </label>

        <label htmlFor="categories">
          {/* //!make select */}
          <input
            type="text"
            id="categories"
            placeholder="categories <will be select>"
            onChange={changeHandler}
            value={form.categories}
          />
        </label>

        <label htmlFor="keywords">
          <input
            type="text"
            id="keywords"
            placeholder="keywords"
            onChange={changeHandler}
            value={form.keywords}
          />
        </label>

        <label htmlFor="source">
          <input
            type="text"
            id="source"
            placeholder="source"
            onChange={changeHandler}
            value={form.source}
          />
        </label>

        <label htmlFor="instructions">
          {" "}
          Separate steps use a *
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

        {/* <label htmlFor="ingredients"> */}
        {/* //!key value with select */}
        {/* <textarea */}
        {/* id="ingredients" */}
        {/* placeholder="ingredients" */}
        {/* onChange={changeHandler} */}
        {/* /> */}
        {/* </label> */}
        {form.title ? (
          <button disabled={false}>Add this recipe</button>
        ) : (
          <button disabled={true}>Add this recipe</button>
        )}
      </form>
    </StyledAddRecipe>
  );
};

export default AddRecipe;
