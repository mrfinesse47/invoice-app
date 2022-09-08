import React, { useState } from 'react';
import styles from './NewInvoice.module.css';
import ArrowLeft from '../UI/Icons/ArrowLeft/ArrowLeft';

const NewInvoice = () => {
  const [formData, setFormData] = useState({
    street: '',
  });
  const { street } = formData;
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className={styles.container}>
      <header className={styles.formHeader}>
        <button className={styles.back} onClick={() => {}}>
          <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
            <ArrowLeft />
          </svg>
          <div>Go back</div>
        </button>
      </header>
      <main>
        <form className={styles.formMain}>
          <h1>New Invoice</h1>
          <h5>Bill Form</h5>
          <div className='form-group'>
            <label htmlFor='street'>Street Address</label>
            <input
              type='text'
              className='form-control'
              id='street'
              name='street'
              autoComplete='street'
              value={street}
              onChange={onChange}
            />
          </div>
        </form>
      </main>
      <footer></footer>
    </div>
  );
};

export default NewInvoice;
