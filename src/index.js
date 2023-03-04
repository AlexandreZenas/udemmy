import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './templates/Home';
import { Contact } from './templates/Contact';
import { About } from './templates/About';
import { Error } from './templates/Error';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/Contact" element={<Contact />} exact/>
        <Route path="/About" element={<About />} exact/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
