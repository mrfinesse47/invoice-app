import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const ActivateEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && user.status === 'Pending') {
      toast.success(
        'you have successfully activated your account, please log in!',
        {
          className: 'toast-message-dark',
        }
      );
    }
    dispatch(logout());
    navigate('/login');
  }, [user]);
  return <div>ActivateEmail</div>;
};

export default ActivateEmail;
