import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";

export default function RecipeCard(props) {
  const { push } = useHistory();
  const [recipe, setRecipe] = useState();

  let id = 10;

  useEffect(() => {
    axiosWithAuth()
      .get(`api/user/${id}`)
      .then((res) => {
        // console.log(res.data);
        setRecipe(res.data.recipes);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  console.log("recipes", recipe);
  const displayRecipe = (id) => {
    // push(`/recipe/${}`);
    recipe.map((reci) => {
      return push(`/recipe/${id}`);
    });
  };

  return (
    <React.Fragment>
      <h1>recipe title</h1>

      {recipe &&
        recipe.map((reci) => (
          <section key={reci.id}>
            <h1
              onClick={() => {
                displayRecipe(reci.id);
              }}
            >
              {reci.title}
            </h1>
          </section>
        ))}
    </React.Fragment>
  );
}
