import React from 'react';
import styles from './InvoiceToolbar.module.css';
import PlusButton from '../Buttons/PlusButton';
import DropDown from '../DropDown/DropDown';

const InvoiveToolbar = ({ count }) => {
  return (
    <div className={styles.invoiceToolbar}>
      <div>
        <h2>Invoices</h2>
        <p className={`${styles.subTitle} body-one`}>{count} invoices</p>
      </div>
      <div className={styles.actions}>
        <DropDown />
        <PlusButton>New</PlusButton>
      </div>
    </div>
  );
};

export default InvoiveToolbar;
