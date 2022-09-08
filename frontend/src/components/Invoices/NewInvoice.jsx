import React, { useState } from 'react';
import styles from './NewInvoice.module.css';
import ArrowLeft from '../UI/Icons/ArrowLeft/ArrowLeft';

const NewInvoice = () => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    postCode: '',
    country: '',
    clientStreet: '',
    clientName: '',
    invoiceDate: '',
    projectDescription: '',
  });
  const {
    street,
    city,
    postCode,
    country,
    clientName,
    invoiceDate,
    projectDescription,
  } = formData;
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
          <section>
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
            <div className={styles.subFormGroup}>
              <div className='form-group'>
                <label htmlFor='city'>City</label>
                <input
                  type='text'
                  className='form-control'
                  id='city'
                  name='city'
                  autoComplete='city'
                  value={city}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='postCode'>Poast Code</label>
                <input
                  type='text'
                  className='form-control'
                  id='postCode'
                  name='postCode'
                  autoComplete='postCode'
                  value={postCode}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='country'>Country</label>
              <input
                type='text'
                className='form-control'
                id='country'
                name='country'
                autoComplete='country'
                value={country}
                onChange={onChange}
              />
            </div>
          </section>
          <section className={styles.billTo}>
            <h5>Bill To</h5>
            <div className='form-group'>
              <label htmlFor='client-name'>Client Name</label>
              <input
                type='text'
                className='form-control'
                id='client-name'
                name='client-name'
                autoComplete='client-name'
                value={clientName}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='invoice-date'>Invoice Date</label>
              <input
                type='text'
                className='form-control'
                id='invoice-date'
                name='invoice-date'
                autoComplete='invoice-date'
                value={invoiceDate}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='project-description'>Project Description</label>
              <input
                type='text'
                className='form-control'
                id='project-description'
                name='project-description'
                autoComplete='project-description'
                value={projectDescription}
                onChange={onChange}
              />
            </div>
          </section>
        </form>
      </main>
      <footer></footer>
    </div>
  );
};

export default NewInvoice;
