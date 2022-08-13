import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.outerContainer}>
      <section>
        <h1>Login</h1>
        <p className='sub-heading'>Please Sign In</p>
      </section>

      <section className='form'>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={''}
              placeholder='Enter Your Email'
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
              placeholder='Enter Your password'
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-default'>
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
