import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Імпортуємо Link та useLocation
import './Header.css'; // Стилі для Header
import { ReactComponent as UserIcon } from '../assets/Vector.svg'; 
import Logo from './Logo'; // Імпортуємо компонент Logo

function Header() {
  const [showCurrency, setShowCurrency] = useState(false);
  const location = useLocation(); // Для визначення поточної сторінки

  const handleCurrencyClick = () => {
    setShowCurrency(!showCurrency);
  };

  // Функція для визначення, чи є поточний маршрут активним
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="header">
      <Logo /> {/* Логотип компанії */}
      
      <div className="nav">
        <Link to="/services" className={isActive('/services')}>Послуги</Link>
        <Link to="/converter" className={isActive('/converter')}>Конвертер валют</Link>
        <Link to="/contacts" className={isActive('/contacts')}>Контакти</Link>
        <Link to="/contact" className={isActive('/contact')} onClick={handleCurrencyClick}>Задати питання</Link>
      </div>
      
      <div className="cabinet-container">
        <a href="/cabinet" className="cabinet-link">
          <UserIcon />
        </a>
        <span>Особистий кабінет</span>
      </div>
    </div>
  );
}

export default Header;
