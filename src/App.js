import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import List from './components/List';
import Price from './components/Price';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<AllPages />} />
          <Route path='/home' element={<AllPages />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/price' element={<Price />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AllPages() {
  return (
    <div>
      <Header id="home" />
      <About id="about" />
      <Shop id="shop" />
      <List id="list" />
      <Price />
      <Contact id="contact" />
    </div>
  );
}


export default App;
