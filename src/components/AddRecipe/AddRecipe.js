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
  console.log(form);

  const formatData = (form) => {
    const instructionsArr = [];
    const splitForm = form.instructions.split("*");
    splitForm.forEach((step, index) => {
      let objEl = {};
      objEl.step = index + 1;
      objEl.text = step.trim();
      instructionsArr.push(objEl);
    });
    return {
      ...form,
      instructions: instructionsArr,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataReadyToShip = formatData(form);
    console.log(dataReadyToShip);
    //*post request here
    //*post request here
    //*post request here
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

        <label htmlFor="keywords"> Keywords you'd like to tag this with:
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

//Redux not needed here, no need for { connect }
export default AddRecipe;
