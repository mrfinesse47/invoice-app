import React from 'react';
import Invoice from './Invoice';
import styles from './InvoiceList.module.css';
import InvoiceToolBar from './InvoiveToolbar';
import Spinner from '../Spinner/Spinner';

const InvoiceList = ({ invoices, isLoading }) => (
  //invoice toolbar
  <>
    <InvoiceToolBar count={invoices.length} />
    {isLoading ? (
      <Spinner />
    ) : (
      <ul className={styles.invoices}>
        {invoices.map((invoice) => (
          <Invoice key={invoice._id} invoice={invoice} />
        ))}
      </ul>
    )}
  </>
);

export default InvoiceList;
