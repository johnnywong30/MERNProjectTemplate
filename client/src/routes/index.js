import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// Pages are Components to render
import Home from './Pages/Home'

const Routes = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <Switch>
          <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
