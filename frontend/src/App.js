import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Auth/PrivateRoute';
import PublicRoute from './components/Auth/PublicRoute';

import styles from './App.module.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ToolBar from './components/ToolBar/ToolBar';
import Home from './pages/Home';
import ActivateEmail from './pages/ActivateEmail';

function App() {
  return (
    <>
      <Router>
        <div className={styles.container}>
          <ToolBar />
          <Routes>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path='/login'
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path='/register'
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route path='/activate-email' element={<ActivateEmail />} />
            <Route
              path='/*'
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
