import React from 'react';
import Invoice from './Invoice';
import styles from './InvoiceList.module.css';

const InvoiceList = ({ invoices }) => (
  <ul className={styles.invoices}>
    {invoices.map((invoice) => (
      <Invoice key={invoice._id} invoice={invoice} />
    ))}
  </ul>
);

export default InvoiceList;
