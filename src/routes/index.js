import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/login" component={Login} />
      <PrivateRoute path="*" component={Error} />
    </Switch>
  );
}
