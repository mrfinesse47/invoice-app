import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './App.module.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ToolBar from './components/ToolBar/ToolBar';
import NewInvoice from './pages/NewInvoice';
import Home from './pages/Home';
import ActivateEmail from './pages/ActivateEmail';

function App() {
  return (
    <>
      <Router>
        <div className={styles.container}>
          <ToolBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-invoice' element={<NewInvoice />} />
            <Route path='/activate-email' element={<ActivateEmail />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
