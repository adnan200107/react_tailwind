import React from 'react';
import Navbar from './components/navbar';
import CustomHeader from './components/CustomHeader';
import Home from './pages/home';
import Contact from './pages/contact';
import './components/navbar.css';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // No BrowserRouter here

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
