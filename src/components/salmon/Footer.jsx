import React from 'react';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='footer-main'>
        <div className='footer-logo'>
          <img src={img2} alt="Logo" />
        </div>

        <nav className='footer-nav'>
          <a href="#">Что может</a>
          <a href="#">Как работает</a>
          <a href="#">Отзывы</a>
          <a href="#">Тарифы</a>
          <a href="#">Для бизнеса</a>
          <a href="#">Вопросы</a>
          <a href="#">Блог</a>
        </nav>

        <div className='footer-contacts'>
          <h4>hello@chadgpt.ru</h4>
          <div className='social-icons'>
            <img src={img3} alt="VK" />
            <img src={img4} alt="TG" />
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='legal-text'>
          <p>
            При использовании сервиса вы соглашаетесь c <u>правилами использования</u>.
            Мы не имеем отношения к OpenAI, не распространяем их ПО.
            Условия использования Chad.
          </p>
        </div>
        <div className='copyright-section'>
          <p>© 2022 — 2023 «Chad»</p>
          <p className='policy'>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;