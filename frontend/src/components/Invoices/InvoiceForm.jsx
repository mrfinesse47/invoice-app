import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InvoiceForm.module.css';

const InvoiceForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <img src='./images/icon-arrow-left.svg' alt='go back' />
        <div>go back</div>
      </button>
      <div>InvoiceForm</div>
    </>
  );
};

export default InvoiceForm;
