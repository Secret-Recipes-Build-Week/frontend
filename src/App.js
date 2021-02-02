//packages
import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav/Nav";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Dashboard from "./components/Dashboard";
import LandingPagetest from "./components/LandingPagetest";
import EditRecipe from "./components/EditRecipe";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/edit" component={EditRecipe} />
        <Route path="/add" component={AddRecipe} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={LoginForm} />
        <Route exact path="/" component={LandingPagetest} />
      </Switch>
    </div>
  );
};

export default App;
