import React, { useState } from 'react';
import "../abdulaziz/Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='Navbar-container'>
      <div className='navbar-logo'>
        <img src={logo} alt="ZIONGPT" />
      </div>

      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}

      <div className={`navbar-classlist ${isOpen ? "active" : ""}`}>
        <div className='menu-close-icon' onClick={() => setIsOpen(false)}>
          <FaTimes color="white" size={25} />
        </div>

        <a href="#home" onClick={() => setIsOpen(false)}>Главная</a>
        <a href="#chat" onClick={() => setIsOpen(false)}>ChatGPT</a>
        <a href="#mid" onClick={() => setIsOpen(false)}>Midjourney</a>
        <a href="#rev" onClick={() => setIsOpen(false)}>Отзывы</a>
        <a href="#prices" onClick={() => setIsOpen(false)}>Тарифы</a>
        <a href="#api" onClick={() => setIsOpen(false)}>API</a>
        <a href="#faq" onClick={() => setIsOpen(false)}>Вопросы</a>
        <a href="#blog" onClick={() => setIsOpen(false)}>Блог</a>

        <div className='navbar-button mobile-only'>
          <button>Авторизация</button>
        </div>
      </div>

      <div className='navbar-button desktop-only'>
        <button>Авторизация</button>
      </div>

      <div className='menu-icon' onClick={() => setIsOpen(true)}>
        <FaBars color="white" size={28} />
      </div>
    </nav>
  );
}

export default Navbar;