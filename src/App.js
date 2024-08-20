import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil.jsx';
import Error from './pages/Error/Error.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <header />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
