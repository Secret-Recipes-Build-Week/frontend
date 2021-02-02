//packages
import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import PrivateRoute from "./components/PrivateRoute";
import TestComponent from "./components/testComponent/TestComponent";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav/Nav";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/add" component={AddRecipe} />
        <PrivateRoute exact path="/" component={TestComponent} />
      </Switch>
      <LoginForm />
    </div>
  );
};

export default App;
