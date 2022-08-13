import React from 'react';
import styles from './Login.module.css';

const Login = () => {
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
              value={''}
              onChange={''}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={''}
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
