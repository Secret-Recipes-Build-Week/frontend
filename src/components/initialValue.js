import axios from "axios";

export const initialValue = {
  title: "",
  categories: [],
  keywords: "",
  private: false,
  createdBy: "",
  source: "",
  instructions: [
    {
      step: 1,
      text: "heat up stove",
    },
    {
      step: 2,
      text: "cut onion",
    },
    {
      step: 3,
      text: "cut potatoes",
    },
  ], //array of objects of steps?
  ingredients: [
    {
      ingredient: "2 white onions",
    },
    {
      ingredient: "4 potattoes",
    },
    {
      ingredient: "1 1/2 cup of milk",
    },
  ], //array of objects of ingredients?
};

axios
  .get("https://familyrecipe-app-backend.herokuapp.com/api/user/1")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
