import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Switch } from 'antd';
import styles from './Layout.less';
import Menus from './Menu';

const Sider = ({
  authorized,
  siderFold,
  darkTheme,
  location,
  changeTheme,
  navOpenKeys,
  changeOpenKeys,
  menu,
}) => {
  const menusProps = {
    authorized,
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys,
  };

  return (
    <div>
      <Menus {...menusProps} />
      {!siderFold ?
        <div className={styles.switchtheme}>
          <span><Icon type="bulb" />Switch Theme</span>
          <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="Dark" unCheckedChildren="Light" />
        </div> : ''}
    </div>
  );
};

Sider.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
};

export default Sider;
