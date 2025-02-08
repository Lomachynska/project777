import React from 'react';
import './CurrencyConverter.css'; // Стилі для конвертера валют
import standartImage from '../assets/standart2.png'; // Імпортуємо картинку

function CurrencyConverter() {
  return (
    <div className="currency-converter">
      <div className="converter-content">
        <h2>Чіп Челендж</h2>
        <p>Обмінник валют - навчальний</p>
        <button className="convert-button">
          Конвертувати
        </button>
      </div>
      <div className="converter-image">
        <img src={standartImage} alt="Currency Converter" />
      </div>
    </div>
  );
}

export default CurrencyConverter;
