import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/main/Nav';
import Home from './components/main/Home';
import Account from './components/user/Account';
import Dictionary from './components/dictionary/Dictionary';
import Anatomy from './components/anatomy/Anatomy';
import Forum from './components/forum/Forum';
import UserHome from './components/user/UserHome';
import Settings from './components/user/Settings';
import NotFound from './components/main/NotFound';

function App() {
  const [icon, setIcon] = useState("")

  return (
    <div className="app">
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/anatomy" element={<Anatomy/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/userhome" element={<UserHome icon={icon} setIcon={setIcon}/>} />
          <Route path="/settings" element={<Settings icon={icon} setIcon={setIcon}/>} />
        </Routes>
    </div>
  );
}

export default App;
