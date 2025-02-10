import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as UserIcon } from '../assets/Vector.svg'; 
import Logo from './Logo';


function Header() {
  const [showCurrency, setShowCurrency] = useState(false);

  const handleCurrencyClick = () => {
    setShowCurrency(!showCurrency);
  };

  return (
    <div className="header">
      <Logo />
      <div className="nav">
        <Link to="/services">Послуги</Link>
        <Link to="/about">Конвертер валют</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/contact" onClick={handleCurrencyClick}>Задати питання</Link>
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
