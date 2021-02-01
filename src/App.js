//packages
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navtest from "./components/Navtest";

//components
import PrivateRoute from "./components/PrivateRoute";
import TestComponent from "./components/testComponent/TestComponent";

const App = () => {
  return (
    <React.Fragment>
      <Navtest />
      <Switch>
        <PrivateRoute path="/dash" component={Dashboard} />
        <Route path="/" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
