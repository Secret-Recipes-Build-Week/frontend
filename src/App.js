//style reset
import "./App.css";

//packages
import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import PrivateRoute from "./components/PrivateRoute";
import SignUpComponent from "./components/SignUpComponent";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav/Nav";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard";
import EditRecipe from "./components/EditRecipe";
import RecipeCard from "./components/RecipeCard";
import RecipeFeed from "./components/RecipeFeed"

const App = () => {
  return (
    <div>
      <Nav />

      <Switch>
        <Route path="/edit/:id" component={EditRecipe} />
        <Route path="/recipe/:id" component={RecipeCard} />
        <PrivateRoute path="/dashboard/add" component={AddRecipe} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpComponent} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <RecipeFeed></RecipeFeed>
    </div>
  );
};

export default App;
