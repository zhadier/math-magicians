/** @format */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Header from './components/Header';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="math-magicians" element={<Home />} />
      <Route path="math-magicians/calculator" element={<Calculator />} />
      <Route path="math-magicians/quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);

export default App;
