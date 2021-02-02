//consts
export const CREATING_USER = "CREATING_USER";
export const FETCHING_USER = "FETCHING_USER";
//!SIGNIN after fetching?

export const ADD_RECIPE = "ADD_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";

//action factories
export const createUser = (newUserObj) => {
  return { type: CREATING_USER, payload: newUserObj };
};
export const fetchingUser = (userInfo) => {
  return { type: FETCHING_USER, payload: userInfo };
};

export const addRecipe = (newRecipe) => {
  return { type: ADD_RECIPE, payload: newRecipe };
};
export const editRecipe = (editedRecipe) => {
  return { type: EDIT_RECIPE, payload: editedRecipe };
};
export const deleteRecipe = (recipeID) => {
  return { type: DELETE_RECIPE, payload: recipeID };
};
