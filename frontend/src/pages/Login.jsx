import React from 'react';
import styles from './Login.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, acknowledgeError } from '../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner/Spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData; //neat trick to not have to have multiple use states

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        onClose: () => {
          dispatch(acknowledgeError());
        },
      });
    }
    if (user) {
      navigate('/');
    }
    // dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.outerContainer}>
      <section className={styles.heading}>
        <h2>Login</h2>
      </section>

      <section>
        <form onSubmit={onSubmit}>
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
            >
              Login
            </button>
          </div>
        </form>
        <footer>
          <h3>
            Don't have an account?{' '}
            <Link to='/register'>Click Here to Register</Link>
          </h3>
        </footer>
      </section>
    </div>
  );
};

export default Login;
