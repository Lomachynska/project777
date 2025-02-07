import React from 'react';
import './Footer.css';
 // Стилі для футера

// Імпортуємо зображення з урахуванням правильного регістру в назвах файлів

import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import twitterIcon from '../assets/twitter.png';
import youtubeIcon from '../assets/YouTube.png';
import vectorPhone from '../assets/phone.png'
import vectorPhone2 from '../assets/phone2.png'
import Logo from './Logo';
 

function Footer() {
  return (
    <footer className="footer">
      {/* Перший стовпчик: Логотип та інформація */}
      <div className="column logo-container">
        <div className="logo-row">
          <Logo />
        </div>
        <div className="info">
          <div>04128, м.Київ, вул. Хрещатик, 19</div>
          <div>Ліцензія НБУ №156</div>
          <div>Ⓒ ПАТ ЧіпЧендж, 2019-2023</div>
        </div>
      </div>

      {/* Другий стовпчик: Послуги */}
      <div className="column services">
        <ul>
          <li>Послуги</li>
          <li>Конвертер валют</li>
          <li>Контакти</li>
          <li>Задати питання</li>
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
      <div className="column phone-info">
        <div className="phone-row">
          <img src={vectorPhone2} alt="Vector Phone2" className="vector-phone2" />
            <span className="phone-two">8 800 111 22 33</span>
        </div>
        <div className="sup-text2">Безкоштовно для дзвінків</div>
        <div>в межах України</div>
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
