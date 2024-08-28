import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  );
}

export default App;
