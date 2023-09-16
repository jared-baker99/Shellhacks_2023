import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './Pages/MainPage';
import HomePage from './Pages/HomePage';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/home" index element={<HomePage />} />
        <Route path="/register" index element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
