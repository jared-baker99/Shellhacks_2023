import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './Pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
