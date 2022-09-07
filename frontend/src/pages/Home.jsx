import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getInvoices } from '../features/invoices/invoicesSlice';
import InvoiceList from '../components/Invoices/InvoiceList';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();

  const { filteredInvoices, isLoading, isError, message } = useSelector(
    (state) => state.invoices
  );

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.status === 'Pending') {
      toast.success('Please check your email for an activation link', {
        className: 'toast-message-dark',
      });
    } else {
      dispatch(getInvoices());
      if (isError) {
        toast.error(message, {
          className: 'toast-message-dark',
        });
      }
    }
  }, [isError, message, user, dispatch, toast]);

  return <InvoiceList invoices={filteredInvoices} isLoading={isLoading} />;
};

export default Home;
