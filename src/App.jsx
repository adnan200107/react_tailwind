import React from 'react';
import Navbar from './components/navbar';  // Importation de la navbar
import Home from './pages/home';           // Importation de la page Home
import Contact from './pages/contact';
import './components/navbar.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App; 