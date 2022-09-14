import React, { useState } from 'react';
import styles from './NewInvoice.module.css';
import ArrowLeft from '../UI/Icons/ArrowLeft/ArrowLeft';
import Input from '../UI/Form/Input';

const NewInvoice = () => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    postCode: '',
    country: '',
    clientStreet: '',
    clientName: '',
    clientEmail: '',
    invoiceDate: '',
    projectDescription: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',
  });
  const {
    street,
    city,
    postCode,
    country,
    clientName,
    clientEmail,
    clientCity,
    clientPostCode,
    clientCountry,
  } = formData;
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className={styles.container} style={{ overflowY: 'scroll' }}>
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
          <section>
            <h5>Bill Form</h5>
            <Input
              onChange={onChange}
              value={street}
              name='street'
              type='text'
              label='Street Address'
            />
            <div className={styles.subFormGroup}>
              <Input
                onChange={onChange}
                value={city}
                name='city'
                type='text'
                label='City'
              />
              <Input
                onChange={onChange}
                value={postCode}
                name='postCode'
                type='text'
                label='Post Code'
              />
            </div>
            <Input
              onChange={onChange}
              value={country}
              name='country'
              type='text'
              label='Country'
            />
          </section>
          <section className={styles.billTo}>
            <h5>Bill To</h5>

            <Input
              onChange={onChange}
              value={clientName}
              name='clientName'
              type='text'
              label="Client's Name"
            />
            <Input
              onChange={onChange}
              value={clientEmail}
              name='clientEmail'
              type='email'
              label="Client's Email"
            />

            <div className={styles.subFormGroup}>
              <Input
                onChange={onChange}
                value={clientCity}
                name='clientCity'
                type='text'
                label='City'
              />
              <Input
                onChange={onChange}
                value={clientPostCode}
                name='clientPostCode'
                type='text'
                label='Post Code'
              />
            </div>

            <Input
              onChange={onChange}
              value={clientCountry}
              name='clientCountry'
              type='text'
              label='Country'
            />

            {/* <div className='form-group'>
              <label htmlFor='projectDescription'>Project Description</label>
              <input
                type='text'
                className='form-control'
                id='projectDescription'
                name='projectDescription'
                autoComplete='projectDescription'
                value={projectDescription}
                onChange={onChange}
              />
            </div> */}
          </section>
        </form>
      </main>
      <footer></footer>
    </div>
  );
};

export default NewInvoice;
