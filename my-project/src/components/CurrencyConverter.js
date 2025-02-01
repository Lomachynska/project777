// src/components/CurrencyConverter.js
import React from 'react';
import './CurrencyConverter.css'; // Стилі для конвертера валют

function CurrencyConverter() {
  return (
    <div className="currency-converter">
      <h2>Конвертер валют</h2>
      <p>Обмінник валют - навчальний</p>
      <button className="convert-button">Конвертувати</button> {/* Кнопка без функціонала */}
    </div>
  );
}

export default CurrencyConverter;
