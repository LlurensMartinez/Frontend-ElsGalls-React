import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Home from './pages/Home'
import Signup from './pages/Signup';

import './App.css';

function App() {

  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
