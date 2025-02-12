import React, { useState, useEffect } from 'react';
import './Currency.css'; // Підключаємо стилі для цього компонента

function Currency() {
  const [currencyRate, setCurrencyRate] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Стан для управління видимістю вікна

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD') // Заміни на правильний API
      .then((response) => response.json())
      .then((data) => setCurrencyRate(data));
  }, []);

  const toggleCurrencyWindow = () => {
    setIsOpen(prevState => !prevState); // Перемикаємо видимість вікна
  };

  if (!currencyRate) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className="currency-section">
      {/* Кнопка відкриття модального вікна */}
      <div className="button-container">
        <button className="open-button" onClick={toggleCurrencyWindow}>
          {isOpen ? 'Сховати курс валют' : 'Показати курс валют'}
        </button>
      </div>

      {/* Спливаюче вікно з курсом валют */}
      {isOpen && (
        <div className="currency-modal">
          <div className="currency-window">
            <div className="currency-container">
              <h2>Курс валют</h2>
              <p>Курс долара США (USD): {currencyRate.rates.UAH} грн</p>
              {/* Додавай інші валюти за потреби */}
            </div>
            <button className="close-button" onClick={toggleCurrencyWindow}>
              Закрити
            </button>
          </div>
        </div>
      )}

      {/* Друге модальне вікно */}
      {isOpen && (
        <div className="currency-modal2">
          <div className="currency-window2">
            <div className="currency-container">
              <h2>Інший Курс валют</h2>
              <p>Курс євро (EUR): {currencyRate.rates.EUR} грн</p>
              {/* Додавай інші валюти за потреби */}
            </div>
            <button className="close-button2" onClick={toggleCurrencyWindow}>
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Currency;
