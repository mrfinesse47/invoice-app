import React from 'react';
import styles from './DropDown.module.css';
import { useEffect, useState } from 'react';

const DropDown = () => {
  const possibleSelections = ['Draft', 'Pending', 'Paid'];
  const [isActive, setActive] = useState(false);
  const [selected, setSelected] = useState(-1);

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
    event.stopPropagation(); //needed so it doesnt count as a window click
    setActive(!isActive);
  };

  const selectItem = (itemNum) => {
    setSelected(itemNum);
    //  props.setRegion(regions[itemNum]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.dropDown}>
        Filter <img src='./icon-arrow-down.svg' alt='filter' />{' '}
      </button>
      <div>
        <ul className={styles.dropDownList}>
          {possibleSelections.map((selection, index) => (
            <li key={index}>
              <input
                type='checkbox'
                name='checkbox'
                id='checkbox_id'
                value='value'
              />
              <label htmlFor='checkbox_id'>{selection}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
