// src/components/MasterCard.js
import React from 'react';
import './MasterCard.css'; // Стилі для конвертера валют

function MasterCard() {
  return (
    <div className="master">
      <h2>Конвертер валют</h2>
      <p>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
      <button className="master-button">Конвертувати валюту</button>
    </div>
  );
}

export default MasterCard;
