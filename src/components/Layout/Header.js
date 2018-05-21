/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Menu, Icon, Popover, Dropdown } from 'antd';
import styles from './Header.less';
import Menus from './Menu';
import logo from '../../public/logo.jpg';

const Header = ({
  userName,
  switchSider,
  siderFold,
  isNavbar,
  menuPopoverVisible,
  location,
  switchMenuPopover,
  navOpenKeys,
  changeOpenKeys,
  logout,
  menu,
}) => {
  const onMenuClick = e => e.key === 'logout' && logout();
  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
  };

  const menus = (
    <Menu className={styles.menu} onClick={onMenuClick}>
      <Menu.Item><Icon type="key" className={styles.icon} />获取Token</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout"><Icon type="logout" className={styles.icon} />退出登录</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.header}>
      <div className={classnames(styles.pullSider, styles.listItem)}>
        {isNavbar
          ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
            <div className={styles.button}>
              <Icon type="bars" />
            </div>
          </Popover>
          :
          <div className={styles.button} onClick={switchSider}>
            <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
          </div>
        }
      </div>
      <div className={classnames(styles.logo, styles.listItem)}>
        <img src={logo} alt="" />
      </div>
      <div className={classnames(styles.text, styles.listItem)}>
        <span>React Start</span>
      </div>
      <div className={classnames(styles.rightWrapper, styles.listItem)}>
        <Dropdown overlay={menus} placement="bottomRight">
          <span className={`${styles.action} ${styles.account}`}>
            <Icon type="user" className={styles.icon} />
            {userName || '请登录'}
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

Header.propTypes = {
  menu: PropTypes.array,
  userName: PropTypes.string,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
};

export default Header;
