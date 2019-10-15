import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './auth'

import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Comment from './pages/Comment';
import Logout from './pages/Logout';
import EditCommentList from './pages/EditCommentList';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import './App.css';

function App() {

  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/admin" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/admin/comment" component={Comment} />
          <PrivateRoute exact path="/admin/comment/edit" component={EditCommentList} />
          <PrivateRoute exact path="/admin/profile" component={Profile} />
          <PrivateRoute exact path="/admin/profile/edit" component={EditProfile} />
      </Switch>
    </Router>
  );
}

export default App;
