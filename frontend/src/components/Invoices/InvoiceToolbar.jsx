import React, { useState } from 'react';
import styles from './InvoiceToolbar.module.css';
import PlusButton from '../UI/Buttons/PlusButton';
import DropDown from '../UI/DropDown/DropDown';
import { useNavigate } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SideDrawer';
import NewInvoice from './NewInvoice';

const InvoiceToolbar = ({ count }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <SideDrawer
        showSideDrawer={showSideDrawer}
        setShowSideDrawer={setShowSideDrawer}
      >
        <NewInvoice></NewInvoice>
      </SideDrawer>

      <nav className={styles.invoiceToolbar}>
        <div>
          <h2>Invoices</h2>
          <p className={`${styles.subTitle} body-one`}>{count} invoices</p>
        </div>
        <div className={styles.actions}>
          <DropDown />
          <PlusButton
            onClick={() => {
              setShowSideDrawer(true);
            }}
          >
            New
          </PlusButton>
        </div>
      </nav>
    </>
  );
};

export default InvoiceToolbar;
