// src/App.js

import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import MasterCard from './components/MasterCard';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrencyConverter />
      <MasterCard />
      <Footer />
    </div>
  );
}

export default App;
