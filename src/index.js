import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './context/UserContext';
// import { FavoriteProvider } from './context/FavoriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      {/* <FavoriteProvider> */}
       <App />
      {/* </FavoriteProvider> */}
    </UserProvider>
  </BrowserRouter>
);


