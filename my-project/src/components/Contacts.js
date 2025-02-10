import React from 'react';
import './Contacts.css'; // Підключення стилів для цього компонента
import vectorPhone from '../assets/phone.png'; // Шлях до зображення
import vectorPhone2 from '../assets/phone2.png'; // Шлях до зображення

function Contacts() {
  return (
    <div className="contacts-page">
      <h2>Контакти</h2>
      <div className="info">
      <div>
        {/* Третій стовпчик: Цілодобова підтримка */}
        <div className="column support">
          <div className="phone-container">
            <img src={vectorPhone} alt="Vector Phone" className="vector-phone" />
            <span className="phone">3773</span>
          </div>
          <div className="support-text">Цілодобова підтримка</div>
        </div>

        {/* Четвертий стовпчик: Телефон для дзвінків */}
        <div className="phone-info">
          <div className="phone-row">
            <img src={vectorPhone2} alt="Vector Phone2" className="vector-phone2" />
            <span className="phone-two">8 800 111 22 33</span>
          </div>
          <div className="sup-text2">Безкоштовно для дзвінків в межах України</div>
        </div>

      </div>
    </div>


      </div>
      
      
  );
}

export default Contacts;
