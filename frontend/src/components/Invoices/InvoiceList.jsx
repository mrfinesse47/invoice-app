import React from 'react';
import Invoice from './Invoice';
import styles from './InvoiceList.module.css';
import InvoiceToolBar from './InvoiveToolbar';

const InvoiceList = ({ invoices }) => (
  //invoice toolbar
  <>
    <InvoiceToolBar length={invoices.length} />
    <ul className={styles.invoices}>
      {invoices.map((invoice) => (
        <Invoice key={invoice._id} invoice={invoice} />
      ))}
    </ul>
  </>
);

export default InvoiceList;
