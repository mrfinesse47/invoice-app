import React from 'react';
import styles from './InvoiceToolbar.module.css';
import PlusButton from '../Buttons/PlusButton';

const InvoiveToolbar = ({ count }) => {
  return (
    <div className={styles.invoiceToolbar}>
      <div>
        <h2>Invoices</h2>
        <p className={`${styles.subTitle} body-one`}>{count} invoices</p>
      </div>
      <div>
        <div>Fliter</div>
        <PlusButton>New Invoice</PlusButton>
      </div>
    </div>
  );
};

export default InvoiveToolbar;
