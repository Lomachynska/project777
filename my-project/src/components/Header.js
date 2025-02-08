import React from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link для навігації
import './Header.css'; // Підключення стилів
import { ReactComponent as UserIcon } from '../assets/Vector.svg'; // Імпортуємо SVG як компонент
import Logo from './Logo';

function Header() {
  return (
    <div className="header">
      <Logo /> {/* Логотип */}
      <div className="nav">
        <Link to="/services">Послуги</Link> {/* Посилання на послуги */}
        <Link to="/about">Конвертор валют</Link> {/* Посилання на конвертер валют */}
        <Link to="/contacts">Контакти</Link> {/* Посилання на контакти */}
        <Link to="/contact">Задати питання</Link> {/* Посилання на задавання питання */}
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
