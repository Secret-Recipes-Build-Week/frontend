import * as actionTypes from './actions';

const initState = {
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    id: 1,
    uuid: "",
    recipes: [
      {
        title: "",
        categories: ["", ""],
        keywords: "summer, apple pie, mediterranean",
        private: false,
        // createdBy: `${this.firstName} ${this.lastName}`, //*changed userData to this.
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
  error: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return state; //*placeholder
    default:
      return state;
  }
};

export default reducer;