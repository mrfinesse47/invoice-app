import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default Spinner;
