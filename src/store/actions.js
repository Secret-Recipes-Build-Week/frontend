//consts
// export const CREATING_USER = "CREATING_USER";
// export const FETCHING_USER = "FETCHING_USER";
// export const ADD_RECIPE = "ADD_RECIPE";
// export const EDIT_RECIPE = "EDIT_RECIPE";
// export const DELETE_RECIPE = "DELETE_RECIPE";

import axiosWithAuth from "./../utils/axiosWithAuth";

export const SIGNOUT = "SIGNOUT";
export const SET_USERID = "SET_USERID";

export const signOutUser = () => {
  //no param needed, do that thing you do
  return { type: SIGNOUT };
};

export const setUserId = (userID) => {
  return { type: SET_USERID, payload: userID };
};

export const setUserData = (userId) => (dispatch) => {
  axiosWithAuth()
    .get(`api/user/${userId}`)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: "SET_USER", payload: res.data });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//action factories
// export const createUser = (newUserObj) => {
//   return { type: CREATING_USER, payload: newUserObj };
// };
// export const fetchingUser = (userInfo) => {
//   return { type: FETCHING_USER, payload: userInfo };
// };

// export const addRecipe = (newRecipe) => {
//   return { type: ADD_RECIPE, payload: newRecipe };
// };
// export const editRecipe = (editedRecipe) => {
//   return { type: EDIT_RECIPE, payload: editedRecipe };
// };
// export const deleteRecipe = (recipeID) => {
//   return { type: DELETE_RECIPE, payload: recipeID };
// };
