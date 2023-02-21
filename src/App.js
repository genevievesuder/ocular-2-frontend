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
// import Profile from './components/forum/Profile';
// import AllProfiles from './components/forum/AllProfiles';
import Notifications from './components/main/Notifications';

function App() {
  const [icon, setIcon] = useState("")

  return (
    <div className="app">
      <Notifications />
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/anatomy" element={<Anatomy/>} />
          <Route path="/forum" element={<Forum/>} />
          {/* <Route path="/profile" element={<Profile/>} /> */}
          {/* <Route path="/profiles/all" element={<AllProfiles/>} /> */}
          <Route path="/userhome" element={<UserHome icon={icon} setIcon={setIcon}/>} />
          <Route path="/settings" element={<Settings icon={icon} setIcon={setIcon}/>} />
        </Routes>
    </div>
  );
}
//add user if ternary^^^^
export default App;
