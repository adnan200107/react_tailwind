import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Importation du fichier App.jsx
import { BrowserRouter as Router } from 'react-router-dom';  // Import du BrowserRouter

// Render le composant principal App dans la div avec l'id 'root'
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

