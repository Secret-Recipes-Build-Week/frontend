import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { initialValue } from "./initialValue";

export default function Dashboard() {
  const { push } = useHistory();
  const [recipe, setRecipe] = useState(initialValue);
  console.log(recipe);
  const handleEdit = () => {
    setRecipe();
    push("/edit");
  };
  return (
    <React.Fragment>
      <h1>Welcome User</h1>
      {/* user is able to see all the recipes 
      user can click on a recipe
      there user can edit/delete the specific recipe

      developer needs:
      ID for each for each recipe
      */}
      {/* isLoggedIn true display edit form */}
      <button onClick={handleEdit}>Edit</button>
    </React.Fragment>
  );
}
