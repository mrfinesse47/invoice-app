import React from 'react';
import styles from './Nothing.module.css';
import { useSelector } from 'react-redux';

const Nothing = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <img src='./images/illustration-empty.svg' alt='nothing here' />
      <div>
        {user && user.status === 'Pending' ? (
          <>
            <h2>Please Activate your account</h2>
            <p className='body-one'>
              Check your email for an activation link. It may take up to ten{' '}
              {''}
              minutes to arrive and may be in your spam or promotions folders.
              You Will not be able to create or view invoices until you have
              activated.
            </p>
          </>
        ) : (
          <>
            <h2>There is nothing here</h2>
            <p className='body-one'>
              Create a new invoice by clicking the <strong>New Invoice</strong>{' '}
              button and get started
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Nothing;
