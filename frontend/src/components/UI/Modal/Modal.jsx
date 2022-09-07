import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Modal.module.css';

const backdrop = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

const modal = {
  hidden: { y: '-100vh', opacity: 0, transition: {} },
  visible: { y: 0, opacity: 1, transition: { delay: 0.5 } },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence wait>
      {showModal && (
        <motion.div
          onClick={() => setShowModal(false)}
          className={styles.backdrop}
          variants={backdrop}
          animate='visible'
          initial='hidden'
          exit='hidden'
        >
          <motion.div className={styles.modal} variants={modal}>
            <p>Want to make another order?</p>
            <Link to='/'>
              <button onClick={() => setShowModal(false)}>start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
