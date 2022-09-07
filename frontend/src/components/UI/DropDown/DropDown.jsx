import React from 'react';
import styles from './DropDown.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../features/invoices/invoicesSlice';

const DropDown = () => {
  const possibleSelections = ['Draft', 'Pending', 'Paid']; //pull in from store

  const [isActive, setActive] = useState(false); //this is in terms of the drop down being displayed or not
  const [selected, setSelected] = useState(-1); //also should set using reducer action
  const dispatch = useDispatch();

  useEffect(() => {
    const pageClickEvent = () => {
      setActive(!isActive);
    };
    // If the item is active (ie open) then listen for clicks
    // if its closed dont listen
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
    //for every click when the menu is open it removes the listener right away
  }, [isActive]);

  const openMenu = (event) => {
    setActive(!isActive);
  };

  const toggleCheckbox = (e) => {
    if (selected === e.target.id) {
      setSelected(null);
      dispatch(setFilter(null));
    } else {
      setSelected(e.target.id);
      dispatch(setFilter(e.target.id));
    }
  };

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <button className={styles.dropDown} onClick={(e) => openMenu(e)}>
        Filter{' '}
        <img
          src={`./images/icon-arrow-down.svg`}
          alt={`${isActive ? 'close' : 'open'} filter menu`}
          className={isActive ? styles.rotate : ''}
        />{' '}
      </button>

      <ul
        className={`${styles.dropDownList} ${
          isActive ? styles.active : styles.inActive
        } `}
      >
        {possibleSelections.map((selection, index) => {
          return (
            <li key={index}>
              <input
                type='checkbox'
                id={selection}
                onChange={toggleCheckbox}
                checked={selected === selection}
              />
              <label htmlFor={selection}>{selection}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
