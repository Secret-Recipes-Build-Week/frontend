//packages
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import PrivateRoute from './components/PrivateRoute';
import TestComponent from'./components/testComponent/TestComponent';

const App = () => {
  return (
    <div>
      hello from App
      <Switch>
        <PrivateRoute path='/' component={TestComponent}/>
        <Route path='/'/>
      </Switch>
    </div>
  );
}

export default App;
