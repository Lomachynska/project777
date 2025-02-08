import React from 'react';
import './Footer.css';

import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import twitterIcon from '../assets/twitter.png';
import youtubeIcon from '../assets/YouTube.png';
import vectorPhone from '../assets/phone.png';
import vectorPhone2 from '../assets/phone2.png';
import Logo from './Logo';
import { Link } from 'react-router-dom'; // Імпортуємо Link для навігації

function Footer() {
  return (
    <footer className="footer">
      {/* Перший стовпчик: Логотип та інформація */}
      <div className="column logo-container">
        <Logo />
        <div className="info">
        <div> 04128, м.Київ, вул. Хрещатик,<br />
        19 Ліцензія НБУ №156 <br />
        ПАТ ЧіпЧендж, 2019-2023
        </div>
        </div>
      </div>

      {/* Другий стовпчик: Послуги */}
      <div className="column services">
        <ul>
          <li><Link to="/services">Послуги</Link></li>
          <li><Link to="/about">Конвертер валют</Link></li>
          <li><Link to="/contacts">Контакти</Link></li>
          <li><Link to="/contact">Задати питання</Link></li>
        </ul>
      </div>

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
        <div className="sup-text2">Безкоштовно для дзвінків</div>
        <div className="sup-text3">в межах України</div>
      </div>

      {/* П'ятий стовпчик: Соціальні мережі (без посилань) */}
      <div className="column socials">
        <img src={facebookIcon} alt="Facebook" className="social-icon" />
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
        <img src={twitterIcon} alt="Twitter" className="social-icon" />
        <img src={youtubeIcon} alt="YouTube" className="social-icon" />
      </div>
    </footer>
  );
}

export default Footer;
