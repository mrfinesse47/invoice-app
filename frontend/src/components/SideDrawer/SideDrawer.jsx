import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './SideDrawer.module.css';

const backdrop = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

const SideDrawer = ({ showSideDrawer, setShowSideDrawer }) => {
  return (
    <AnimatePresence wait>
      {showSideDrawer && (
        <motion.div
          onClick={() => setShowSideDrawer(false)}
          className={styles.backdrop}
          variants={backdrop}
          animate='visible'
          initial='hidden'
          exit='hidden'
        >
          <motion.div
            className={styles.sideDrawer}
            initial={{ x: '-100vw' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '-100vw',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <p>
              this will be for new invoice most likley, but even better if its
              the children of this component
            </p>

            <button onClick={() => setShowSideDrawer(false)}>
              start again
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
