//packages
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditRecipe from "./components/EditRecipe";
import Navtest from "./components/Navtest";

//components
import PrivateRoute from "./components/PrivateRoute";
import Nav from './components/Nav/Nav';
import AddRecipe from './components/AddRecipe/AddRecipe';


const initialValue = {
  title: "",
  categories: [],
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
      ingredient1: "",
    },
  ], //array of objects of ingredients?
};

const App = () => {
  return (
    <React.Fragment>
     
       <Nav/>
      <Switch>
        <Route path="/edit" component={EditRecipe} />
        <PrivateRoute
          path="/dash"
          component={Dashboard}
          initialValue={initialValue}
        />
        <Route path="/" />
       <Route path='/add' component={AddRecipe}/>

    
    
      </Switch>
    </React.Fragment>
  );
};

export default App;
