import React from 'react';
import styles from './Button.module.css';

const Button = ({ children }) => {
  return (
    <button className={`btn btn-default ${styles.btnPlus}`}>
      <div className={styles.container}>
        <div className={styles.plus}>
          <img src='/icon-plus.svg' alt='' />
        </div>
        {children}
      </div>
    </button>
  );
};

export default Button;
