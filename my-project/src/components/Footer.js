import React from 'react';
import './Footer.css'; // Стилі для футера

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">Чіп Чендж</div>
      <div>04128, м.Київ, вул. Хрещатик, 19</div>
      <div>Ліцензія НБУ №156</div>
      <div className="services">
        <ul>
          <li>Послуги</li>
          <li>Конвертер валют</li>
          <li>Контакти</li>
          <li>Задати питання</li>
        </ul>
      </div>
      <div className="socials">
        <span>Фейсбук</span>
        <span>Інстаграм</span>
        <span>Твіттер</span>
        <span>Ютуб</span>
      </div>
    </footer>
  );
}

export default Footer;
