import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Login.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from '../components/Spinner/Spinner';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const { email, password, userName } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const showToastMessage = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'toast-message-dark',
    });
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
            <button
              type='submit'
              className={`btn btn-default ${styles.buttonSubmit}`}
              onClick={(e) => {
                e.preventDefault();
                showToastMessage();
              }}
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
