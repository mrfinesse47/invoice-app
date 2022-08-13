import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ToolBar from './components/ToolBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <ToolBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
