import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getInvoices } from '../features/invoices/invoicesSlice';
import InvoiceList from '../components/Invoices/InvoiceList';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { invoices, isLoading, isError, message } = useSelector(
    (state) => state.invoices
  );

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      dispatch(getInvoices());
    }
  }, [user]);
  const { isDark } = useSelector((state) => state.lightDark);
  return <InvoiceList invoices={invoices} />;
};

export default Home;
