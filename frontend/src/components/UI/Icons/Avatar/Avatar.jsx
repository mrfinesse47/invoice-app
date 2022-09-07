import React from 'react';
import styles from './Avatar.module.css';

const Avatar = () => {
  return (
    <img
      src='./images/image-avatar.jpg'
      alt='avatar'
      className={styles.avatar}
    />
  );
};

export default Avatar;
