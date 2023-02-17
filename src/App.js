import { Route, Routes } from 'react-router-dom';
import Nav from './components/main/Nav';
import Home from './components/main/Home';
import Account from './components/user/Account';
import Dictionary from './components/dictionary/Dictionary';
import Anatomy from './components/anatomy/Anatomy';
import Forum from './components/forum/Forum';
import UserHome from './components/user/UserHome';
import Settings from './components/user/Settings';


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
          <Route path="/userhome" element={<UserHome/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
    </div>
  );
}

export default App;
