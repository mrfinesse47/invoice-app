import React from 'react';
import styles from './InvoiceToolbar.module.css';
import PlusButton from '../Buttons/PlusButton';
import DropDown from '../DropDown/DropDown';
import { useNavigate } from 'react-router-dom';

const InvoiceToolbar = ({ count }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.invoiceToolbar}>
      <div>
        <h2>Invoices</h2>
        <p className={`${styles.subTitle} body-one`}>{count} invoices</p>
      </div>
      <div className={styles.actions}>
        <DropDown />
        <PlusButton
          onClick={() => {
            navigate('new-invoice');
          }}
        >
          New
        </PlusButton>
      </div>
    </nav>
  );
};

export default InvoiceToolbar;
