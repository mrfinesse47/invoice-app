import React from 'react';
import Logo from '../../icons/logo/Logo';
import Moon from '../../icons/moon/Moon';
import styles from './ToolBar.module.css';
import Avatar from '../Avatar';

const Header = () => {
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
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
