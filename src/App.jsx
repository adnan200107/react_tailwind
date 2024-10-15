import React from 'react';
import Navbar from './components/navbar';  // Importation de la navbar
import CustomHeader from './components/CustomHeader';
import Home from './pages/home';           // Importation de la page Home
import Contact from './pages/contact';
import './components/navbar.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <CustomHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App; 