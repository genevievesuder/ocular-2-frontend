import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Account from './components/Account';
import Dictionary from './components/Dictionary';
import Anatomy from './components/Anatomy';
import Forum from './components/Forum';


function App() {


  return (
    <div className="app">
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/anatomy" element={<Anatomy/>} />
          <Route path="/forum" element={<Forum/>} />
        </Routes>
    </div>
  );
}

export default App;
