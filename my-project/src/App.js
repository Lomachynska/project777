import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import MasterCard from './components/MasterCard';
import MasterCardButton from './components/MasterCardButton'; // Імпортуємо компонент MasterCardButton
import Contacts from './components/Contacts'; // Додано компонент для контактів
import ArrowIconComponent from './components/ArrowIconComponent'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Виводимо Header */}
        <Routes>
          <Route path="/" element={<><CurrencyConverter /> <MasterCard /> </>} />
          <Route path="/converter" element={
            <><CurrencyConverter /> 
            <MasterCardButton />
            </>} /> {/* Сторінка конвертера валют */}
          <Route path="/services" element={<MasterCard />} /> {/* Сторінка "Послуги" */}
          <Route path="/contacts" element={<Contacts />} /> {/* Сторінка "Контакти" */}
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
