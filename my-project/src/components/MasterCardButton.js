import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate для навігації
import './MasterCardButton.css'; // Стилі для MasterCard
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg'; // Іконка стрілки 

function MasterCardButton() {
  const navigate = useNavigate(); // Використовуємо useNavigate для навігації

  // Початкові значення валют
  const [amount, setAmount] = useState(1000); // Сума для конвертації
  const [fromCurrency, setFromCurrency] = useState('UAH'); // Валюта, яку ми конвертуємо
  const [toCurrency, setToCurrency] = useState('USD'); // Валюта, яку хочемо отримати
  const [conversionResult, setConversionResult] = useState(null); // Результат конвертації
  const [history, setHistory] = useState([]); // Історія конвертацій
  const [date, setDate] = useState("2020-12-01"); // Початкова дата

  // Курси валют для конвертації
  const exchangeRates = {
    UAH: 1, // 1 UAH = 1 UAH
    USD: 41.7, // 1 USD = 41.7 UAH
    CNY: 6.5, // 1 CNY = 6.5 UAH
  };

  // Функція для виконання конвертації
  const convertCurrency = () => {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;
    setConversionResult(convertedAmount);
  };

  // Функція для збереження результату в історії
  const handleSaveResult = () => {
    const newEntry = {
      date: date,
      amount: amount,
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
      result: conversionResult,
    };
    setHistory([newEntry, ...history]); // Додаємо новий запис в історію
  };

  // Очищення історії
  const handleClearHistory = () => {
    setHistory([]); // Очищаємо історію
  };

  // Оновлення суми
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="master" style={{ backgroundColor: '#F6F7FF' }}>
      <div className="content-container">
        <div className="text-container">
          <h2>Конвертер валют</h2>

          {/* Введення суми та вибір валют */}
          <div className="currency-info">
            <div className="currency-row">
                <strong>В мене є:</strong>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="amount-input"
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="currency-select"
              >
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="CNY">CNY</option>
              </select>

              {/* стрілки - іконка */}
              <div className="arrow-container">
                <ArrowIcon  />
              </div>

              <strong>Хочу придбати:</strong>
              <input
                type="text"
                value={conversionResult || ''}
                disabled
                className="amount-input"
              />
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="currency-select"
              >
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="CNY">CNY</option>
              </select>
            </div>
          </div>

          {/* Кнопка для виконання конвертації */}
          <button className="convert-button" onClick={convertCurrency}>
            Конвертувати
          </button>

          {/* Вибір дати */}
          <div className="currency-row">
            <strong>Дата конвертації:</strong>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Кнопка "Зберегти результат" в правому нижньому кутку */}
          <button className="save-result-button" onClick={handleSaveResult}>
            Зберегти результат
          </button>

          {/* Історія конвертацій та Очистити історію */}
          <div className="conversion-history">
            <h3>Історія конвертацій</h3>
            <ul>
              {history.length > 0 ? (
                history.map((entry, index) => (
                  <li key={index}>
                    {entry.date} - {entry.amount} {entry.fromCurrency} = {entry.result} {entry.toCurrency}
                  </li>
                ))
              ) : (
                <li>Немає історії конвертацій</li>
              )}
            </ul>
            <button className="clear-history-button" onClick={handleClearHistory}>
              Очистити історію
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default MasterCardButton;
