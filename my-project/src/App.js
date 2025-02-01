// src/App.js

import React from 'react';
// Видали імпорт стилю, якщо не хочеш використовувати App.css
// import './styles/App.css'; // Видалити цей рядок, якщо не хочеш використовувати CSS

import Header from './components/Header'; // Перевір, чи імпортується цей компонент правильно
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrencyConverter />
      <Footer />
    </div>
  );
}

export default App;
