import React from 'react';
import styles from './Invoice.module.css';
import StatusBadge from '../StatusBadge/StatusBadge';
import Moment from 'moment';

const Invoice = ({ invoice }) => {
  const invoiceNum = invoice._id
    .substring(invoice._id.length - 7)
    .toUpperCase();

  const paymentDueDate = Moment(invoice.paymentDue).format('DD MMM YYYY');
  return (
    <li className={styles.invoiceList}>
      <button>
        <div className={styles.invoice}>
          <div className={styles.topContainer}>
            <div className={styles.topContainerInner}>
              <h4 className={styles.invoiceNum}>
                <span className={styles.hash}>#</span>
                {invoiceNum}
              </h4>
              <p className={'body-one ' + styles.dueDate}>
                Due {paymentDueDate}
              </p>
            </div>
            <p className={'body-one ' + styles.clientName}>
              {invoice.clientName}
            </p>
          </div>
          <div className={styles.bottomContainer}>
            <div className='cost'>
              <h3>
                ${' '}
                {invoice.total.toLocaleString('en-US', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                })}
              </h3>
            </div>
            <div className='status'>
              <div className='circle'></div>{' '}
              {/* <div className='state'>{invoice.status}</div> */}
              <StatusBadge />
            </div>
          </div>
        </div>
      </button>
    </li>
  );
};

export default Invoice;
