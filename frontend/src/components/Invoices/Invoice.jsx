import React from 'react';
import styles from './Invoice.module.css';
import Moment from 'moment';

const Invoice = ({ invoice }) => {
  const invoiceNum = invoice._id
    .substring(invoice._id.length - 7)
    .toUpperCase();

  const paymentDueDate = Moment(invoice.paymentDue).format('DD MMM YYYY');
  return (
    <li>
      <button>
        <div>
          <div className='idAndName'>
            <h3>{invoiceNum}</h3>
            <p className='body-one'>{invoice.clientName}</p>
          </div>
          <div className='dueDateAndStatus'>
            <p className='body-one'>{paymentDueDate}</p>
            <div className='status'></div>
          </div>
        </div>
      </button>
    </li>
  );
};

export default Invoice;
