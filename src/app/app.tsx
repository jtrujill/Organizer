import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Login} from './login';

export const App: FC = () => {
  return (
    <div>
      <Switch>
        <Redirect from="/" to="/login" exact={true} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};
