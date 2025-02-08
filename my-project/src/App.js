import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Імпортуємо Routes замість Switch
import Header from './components/Header';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import MasterCard from './components/MasterCard';
import Contacts from './components/Contacts'; // Додано компонент для контактів

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Виводимо Header */}
        <Routes> {/* Використовуємо Routes для визначення маршрутів */}
          <Route path="/" element={<MasterCard />} /> {/* Головна сторінка, яка показує MasterCard */}
          <Route path="/about" element={<CurrencyConverter />} /> {/* Сторінка конвертера валют */}
          <Route path="/services" element={<MasterCard />} /> {/* Сторінка "Послуги" */}
          <Route path="/contacts" element={<Contacts />} /> {/* Сторінка "Контакти" */}
        </Routes>
        <Footer /> {/* Виводимо Footer */}
      </div>
    </Router>
  );
}

export default App;
