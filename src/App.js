import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Accueil from './pages/Accueil/Accueil.jsx';
import Apropos from './pages/Apropos/Apropos.jsx';
import Logements from './pages/Logements/Logements.jsx';
import Error from './pages/Error/Error.jsx';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/Apropos' element={<Apropos />} />
          <Route path='/Logements/:id' element={<Logements />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
