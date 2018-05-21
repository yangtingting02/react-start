import React from 'react';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'dva';
import { config } from "../utils/config";
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';
import { withRouter } from 'dva/router';
import Loader from '../components/Loader';
import { Header, Sider, Footer, styles } from '../components/Layout/index';
import '../themes/index.less';
import './app.less';

const { prefix } = config;

let lastHref;

const App = ({ children, dispatch, app, loading, location }) => {
  const {
    authorized,
    userName,
    siderFold,
    darkTheme,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    menu,
  } = app;

  const { logo } = config;
  const href = window.location.href;

  if (lastHref !== href) {
    NProgress.start();
    if (!loading.global) {
      NProgress.done();
      lastHref = href;
    }
  }

  const headerProps = {
    menu,
    userName,
    location,
    siderFold,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover() {
      dispatch({ type: 'app/switchMenuPopver' });
    },
    logout() {
      dispatch({ type: 'app/logout' });
    },
    switchSider() {
      dispatch({ type: 'app/switchSider' });
    },
    changeOpenKeys(openKeys) {
      dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } });
    },
  };

  const siderProps = {
    authorized,
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeTheme() {
      dispatch({ type: 'app/switchTheme' });
    },
    changeOpenKeys(openKeys) {
      window.localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys));
      dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } });
    },
  };

  return (
    <div>
      <Loader fullScreen spinning={loading.effects['app/query']} />
      <Helmet>
        <title>My Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={logo} type="image/x-icon" />
      </Helmet>
      <div>
        <div
          className={
            classnames(
              styles.layout,
              {
                [styles.fold]: isNavbar ? false : siderFold,
              },
              {
                [styles.withnavbar]: isNavbar,
              },
            )
          }
        >
          <Header {...headerProps} />
          {!isNavbar ?
            <aside className={classnames(styles.sider, { [styles.light]: !darkTheme })}>
              {siderProps.menu.length === 0 ? null : <Sider {...siderProps} />}
            </aside>
            :
            ''
          }
          <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.content}>
                {userName ? children : <Spin />}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
};

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));
