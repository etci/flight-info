import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import routes from '../../../config/routes';
import './style.scss';
const Content = () => {
  return (
    <div id="content">
      <Switch>
        {Object.values(routes).map(({ path, component }) => {
          return <Route key={path} path={path} exact component={component} />;
        })}
        <Redirect to={routes.FLIGHT_LIST.path} />
      </Switch>
    </div>
  );
};

export default Content;
