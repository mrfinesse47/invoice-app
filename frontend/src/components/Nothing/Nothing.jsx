import React from 'react';
import styles from './Nothing.module.css';

const Nothing = () => {
  return (
    <div className={styles.container}>
      <img src='./images/illustration-empty.svg' alt='nothing here' />
      <div>
        <h2>There is nothing here</h2>
        <p className='body-one'>
          Create a new invoice by clicking the <strong>New Invoice</strong>{' '}
          button and get started
        </p>
      </div>
    </div>
  );
};

export default Nothing;
