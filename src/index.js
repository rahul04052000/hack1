import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './navbar/Navbar';
import Body from './body/Body';
import Design from './pages/Architecture/Design';
import Footer from './pages/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
    <Design/>
    
    <Footer/>
  </React.StrictMode>
);
