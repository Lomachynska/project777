import React from 'react';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate
import './MasterCard.css'; // Стилі для MasterCard
import groupImage from '../assets/Group78.png'; // Імпортуємо картинку

function MasterCard() {
  const navigate = useNavigate(); // Використовуємо useNavigate для навігації

  const handleClick = () => {
    navigate('/about'); // Перехід на сторінку конвертера валют
  };

  return (
    <div className="master">
      <div className="content-container">
        <div className="text-container">
          <h2>Конвертер валют</h2>
          <p>Переважна діяльність банківської <br /> групи за останні чотири звітні квартали <br /> становить 50 і більше відсотків.</p>
          <button className="master-button" onClick={handleClick}>Конвертувати валюту</button> {/* Додаємо обробник на кнопку */}
        </div>
        <div className="image-container">
          <img src={groupImage} alt="Group 78" />
        </div>
      </div>
    </div>
  );
}

export default MasterCard;
