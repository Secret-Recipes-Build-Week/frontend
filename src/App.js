//packages
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import PrivateRoute from './components/PrivateRoute';
import TestComponent from'./components/testComponent/TestComponent';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div>
      <Nav/>
      hello from App
      <Switch>
        <PrivateRoute path='/' component={TestComponent}/>
        <Route path='/'/>
      </Switch>
    </div>
  );
}

export default App;
