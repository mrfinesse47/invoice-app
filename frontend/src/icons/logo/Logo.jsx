import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  //will eventually use a custom hook to adjust sizing on desktop view
  return (
    <div className={styles.container}>
      <img src='./logo.svg' alt='invoice app' className={styles.logo} />
      <div className={styles.backgroundEffect}></div>
    </div>
  );
};

export default Logo;
