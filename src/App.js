//packages
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import PrivateRoute from './components/PrivateRoute';
import TestComponent from'./components/testComponent/TestComponent';
import Nav from './components/Nav/Nav';
import AddRecipe from './components/AddRecipe/AddRecipe';

const App = () => {
  return (
    <div>
      <Nav/>
      <Switch>
        <PrivateRoute exact path='/' component={TestComponent}/>
        {/* <Route path='/'/> */}
        <Route path='/add' component={AddRecipe}/>
      </Switch>
    </div>
  );
}

export default App;
