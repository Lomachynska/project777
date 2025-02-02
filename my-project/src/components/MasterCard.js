// src/components/MasterCard.js
import React from 'react';
import './MasterCard.css'; // Стилі для конвертера валют
import groupImage from '../assets/Group78.png'; // Імпортуємо картинку

function MasterCard() {
  return (
    <div className="master">
      <div className="content-container">
        <div className="text-container">
          <h2>Конвертер валют</h2>
          <p>Переважна діяльність банківської <br /> групи за останні чотири звітні квартали <br /> становить 50 і більше відсотків.</p>
          <button className="master-button">Конвертувати валюту</button>
        </div>
        <div className="image-container">
          <img src={groupImage} alt="Group 78" />
        </div>
      </div>
    </div>
  );
}

export default MasterCard;
