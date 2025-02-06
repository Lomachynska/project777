// src/components/CurrencyConverter.js

import React, { useState } from 'react';
import './CurrencyConverter.css'; // Стилі для конвертера валют
import standartImage from '../assets/standart2.png'; // Імпортуємо картинку

function CurrencyConverter() {
  const [showCounter, setShowCounter] = useState(false); // Стан для відображення лічильника

  const handleConvert = () => {
    setShowCounter(true); // Показати лічильник при натисканні кнопки
  };

  return (
    <div className="currency-converter">
      <div className="converter-content">
        <h2>Чіп Челендж</h2>
        <p>Обмінник валют - навчальний</p>
        <button className="convert-button" onClick={handleConvert}>
          Конвертувати
        </button>
        {/* Лічильник з'являється після натискання кнопки */}
        {showCounter && <p>Лічильник з'являється тут</p>} {/* Можна додати інший контент або компонент */}
      </div>
      <div className="converter-image">
        <img src={standartImage} alt="Currency Converter" />
      </div>
    </div>
  );
}

export default CurrencyConverter;
