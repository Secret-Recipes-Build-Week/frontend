//style reset
import './App.css';

//packages
import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import PrivateRoute from "./components/PrivateRoute";
import SignUpComponent from "./components/SignUpComponent";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav/Nav";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpComponent} />
        <PrivateRoute exact path="/add" component={AddRecipe} />
      </Switch>
    </div>
  );
};

export default App;
