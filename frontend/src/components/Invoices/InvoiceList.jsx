import React from 'react';
import Invoice from './Invoice';

const InvoiceList = ({ invoices }) =>
  invoices.map((invoice) => <Invoice key={invoice._id} invoice={invoice} />);

export default InvoiceList;
