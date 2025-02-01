// src/App.js

import React from 'react';
// Видали імпорт стилю, якщо не використовувати App.css
// import './styles/App.css'; // Видалити цей рядок, якщо не хочеш використовувати CSS

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
