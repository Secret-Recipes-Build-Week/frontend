import * as actionTypes from "./actions";

const initState = {
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    id: null,
    uuid: "",
    recipes: [
      {
        id: "",
        title: "",
        categories: ["", ""],
        keywords: "summer, apple pie, mediterranean",
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
            quantity: 3, //integer
            unit: "cups", //cup, tablespoon
          },
        ],
      },
    ],
  },
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USERID:
      return {
        ...state,
        userData: {
          ...state.userData,
          id: action.payload,
        },
        isLoggedIn: true,
        isLoading: false,
        error: "",
      };
    case actionTypes.SIGNOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.FETCH_USER:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: true,
        error: false,
      };
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        userData: action.payload,
        isLoggedIn: true,
        isLoading: false,
        error: false,
      };
    // case actionTypes.SIGNOUT:
    //   return{
    //     ...state,
    //     isLoggedIn: false,
    //   }
    default:
      return state;
  }
};
export default reducer;

// case actionTypes.FETCHING_USER:
//   return {
//     ...state,
//     isLoading: true,
//   };
// case actionTypes.CREATING_USER: //userData obj needed as payload
//   return {
//     ...state,
//     userData: action.payload,
//     isLoading: false,
//     isLoggedIn: true,
//     error: false,
//   };
// case actionTypes.ADD_RECIPE: //needs a recipe Obj as payload
//   return {
//     ...state,
//     userData: {
//       ...state.userData,
//       recipes: [...state.userData.recipes, action.payload],
//     },
//   };
// case actionTypes.DELETE_RECIPE:
//   return{
//     ...state,
//     userData: {
//       ...state.userData,
//       recipes: [state.userData.recipes.filter(rec => {
//         return 'aasdf' //!
//       })]
//     }
//   };
// case actionTypes.EDIT_RECIPE:
//     return{
//       ...state,
//       userData: {
//         ...state.userData,
//         recipes: [state.userData.recipes]
//       }
//     };
