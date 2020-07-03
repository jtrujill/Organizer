import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Tasks} from './tasks';
import {Provider} from 'react-redux';
import {rootStore} from './redux';

export const App: FC = () => {
  return (
    <div>
      <Provider store={rootStore}>
        <Switch>
          <Redirect from="/" to="/tasks" exact={true} />
          <Route path="/tasks" component={Tasks} />
        </Switch>
      </Provider>
    </div>
  );
};
