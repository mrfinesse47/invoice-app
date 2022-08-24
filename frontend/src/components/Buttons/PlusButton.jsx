import React from 'react';
import styles from './PlusButton.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button className={`btn btn-default ${styles.btnPlus}`} onClick={onClick}>
      <div className={styles.container}>
        <div className={styles.plus}>
          <img src='./images/icon-plus.svg' alt='' />
        </div>
        {children}
      </div>
    </button>
  );
};

export default Button;
