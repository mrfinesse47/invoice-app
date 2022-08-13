import React from 'react';
import styles from './Login.module.css';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.outerContainer}>
      <section className={styles.heading}>
        <h1>Login</h1>
        <p className='sub-heading'>Please Sign In</p>
      </section>

      <section>
        <form>
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
      </section>
    </div>
  );
};

export default Login;
