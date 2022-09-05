import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getInvoices } from '../features/invoices/invoicesSlice';
import InvoiceList from '../components/Invoices/InvoiceList';
import { toast } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { filteredInvoices, isLoading, isError, message } = useSelector(
    (state) => state.invoices
  );

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      if (user.status === 'Pending') {
        toast.success('Please check your email for an activation link', {
          className: 'toast-message-dark',
        });
      } else {
        dispatch(getInvoices());
      }
      if (isError) {
        toast.error(message, {
          className: 'toast-message-dark',
        });
      }
    }
  }, [user, isError, dispatch, toast]);
  // const { isDark } = useSelector((state) => state.lightDark);

  return (
    <InvoiceList
      invoices={filteredInvoices}
      isLoading={isLoading}
      user={user}
    />
  );
};

export default Home;
