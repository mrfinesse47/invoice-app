import React from 'react';

import { toggle } from '../../features/lightDarkMode/lightDarkModeSlice';

import Logo from '../../icons/logo/Logo';
import Moon from '../../icons/moon/Moon';
import styles from './ToolBar.module.css';
import Avatar from '../Avatar';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.innerContainer}>
        <div className={styles.lightDarkButton}>
          {/* will replace with proper button component */}
          <Moon />
        </div>
        <div className={styles.avatar}>
          {/* may have it so the user can have different avatars */}
          <button
            onClick={() => {
              dispatch(toggle());
            }}
          >
            <Avatar />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
