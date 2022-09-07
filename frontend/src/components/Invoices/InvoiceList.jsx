import React from 'react';
import Invoice from './Invoice';
import styles from './InvoiceList.module.css';
import InvoiceToolBar from './InvoiceToolbar';
import Spinner from '../UI/Spinner/Spinner';
import Nothing from '../Nothing/Nothing';
import { useSelector } from 'react-redux';

const InvoiceList = ({ invoices, isLoading }) => {
  const { user } = useSelector((state) => state.auth);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    //invoice toolbar
    <>
      {user && user.status !== 'Pending' && (
        <InvoiceToolBar count={invoices.length} />
      )}
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
