import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Register />} />
        <Route path="/home" index element={<HomePage />} />
        <Route path="/login" index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
