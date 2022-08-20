import React from 'react';
import styles from './DropDown.module.css';

const DropDown = () => {
  return (
    <button className={styles.dropDown}>
      Filter <img src='./icon-arrow-down.svg' alt='filter' />{' '}
    </button>
  );
};

export default DropDown;
