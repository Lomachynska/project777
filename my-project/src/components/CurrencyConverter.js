import React from 'react';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate для навігації
import './CurrencyConverter.css'; // Стилі для конвертера валют
import standartImage from '../assets/standart2.png'; // Імпортуємо картинку

function CurrencyConverter() {
  const navigate = useNavigate(); // Використовуємо useNavigate для навігації

  const handleConvertClick = () => {
    navigate('/services'); // Перехід на сторінку MasterCard (можна змінити на будь-який інший шлях)
  };

  return (
    <div className="currency-converter">
      <div className="converter-content">
        <h2>Чіп Чендж</h2>
        <p>Обмінник валют - навчальний</p>
        <button className="convert-button" onClick={handleConvertClick}>
          Конвертувати
        </button> {/* Додаємо обробник на кнопку для переходу на MasterCard */}
      </div>
      <div className="converter-image">
        <img src={standartImage} alt="Currency Converter" />
      </div>
    </div>
  );
}

export default CurrencyConverter;
