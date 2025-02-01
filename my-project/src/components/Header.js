import React from 'react';
import './Header.css'; // Підключення стилів
import { ReactComponent as UserIcon } from '../assets/Vector.svg'; // Імпортуємо SVG як компонент

function Header() {
  return (
    <div className="header">
      <div className="logo">Логотип</div>
      <div className="nav">
        <a href="/">Послуги</a>
        <a href="/about">Конвертор валют</a>
        <a href="/services">Контакти</a>
        <a href="/contact">Задати питання</a>
      </div>
      <div className="cabinet-container">
        <a href="/cabinet" className="cabinet-link">
          <UserIcon /> {/* Вставляємо SVG компонент */}
        </a>
        <span>Особистий кабінет</span> {/* Текст без кліка */}
      </div>
    </div>
  );
}

export default Header;
