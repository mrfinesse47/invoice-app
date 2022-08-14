import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { register, acknowledgeError } from '../features/auth/authSlice';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from '../components/Spinner/Spinner';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    userName: '',
  });

  const { email, password, password2, userName } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      return toast.error('Error: passwords do not match', {
        className: 'toast-message-dark',
      });
    }
    dispatch(register({ name: userName, email, password }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        onClose: () => {
          dispatch(acknowledgeError());
        },
        className: 'toast-message-dark',
      });
    }
    if (user) {
      navigate('/');
    }
    // dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const showToastMessage = (message, type) => {
    if (type === 'success') {
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-message-dark',
      });
    }
    if (type === 'error') {
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-message-dark',
      });
    }
  };

  return (
    <div className={styles.outerContainer}>
      <section className={styles.heading}>
        <h1>Registration</h1>
        <p className='sub-heading'>Please Register To Our App</p>
      </section>

      <section>
        <form>
          <div className='form-group'>
            <label htmlFor='userName'>Name</label>
            <input
              type='text'
              className='form-control'
              id='userName'
              name='userName'
              autoComplete='userName'
              value={userName}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              autoComplete='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              autoComplete='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              autoComplete='password'
              value={password2}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button
              type='submit'
              className={`btn btn-default ${styles.buttonSubmit}`}
              onClick={onSubmit}
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
