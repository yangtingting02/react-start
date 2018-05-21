import React from 'react';
import styles from './index.less';
import image404 from '../../public/404.png';

const Error = () => (
  <div className={styles.error}>
    <img alt={'404'} src={image404} />
  </div>
);

export default Error;
