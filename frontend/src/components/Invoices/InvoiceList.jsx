import React from 'react';
import Invoice from './Invoice';
import styles from './InvoiceList.module.css';
import InvoiceToolBar from './InvoiceToolbar';
import Spinner from '../Spinner/Spinner';
import Nothing from '../Nothing/Nothing';

const InvoiceList = ({ invoices, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    //invoice toolbar
    <>
      <InvoiceToolBar count={invoices.length} />
      {invoices.length === 0 ? (
        <Nothing />
      ) : (
        <ul className={styles.invoices}>
          {invoices.map((invoice) => (
            <Invoice key={invoice._id} invoice={invoice} />
          ))}
        </ul>
      )}
    </>
  );
};

export default InvoiceList;
