import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import { Spin } from 'antd';
import App from './routes/app';
import styles from './index.less';


const { ConnectedRouter } = routerRedux;

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/Error'),
  });
  const routes = [
    {
      path: '/dashboard',
      models: () => [import('./models/dashboard')],
      component: () => import('./routes/Dashboard/index'),
    },
    {
      path: '/list/job-list',
      models: () => [import('./models/list')],
      component: () => import('./routes/List/JobList'),
    }
  ];
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard"/>)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route
                key={path}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
          <Route component={error} />
        </Switch>
      </App>
    </ConnectedRouter>
  );
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;
