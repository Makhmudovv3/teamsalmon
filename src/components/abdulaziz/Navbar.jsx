import React from 'react'
import "../abdulaziz/Navbar.css"
// import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className='Navbar-container'>
      <div className='navbar-logo'>
        {/* <img src={logo} alt="" /> */}
      </div>
      <div className='navbar-classlist'>
        <a href="">Главная</a>
        <a href="">ChatGPT</a>
        <a href="">Midjourney</a>
        <a href="">Отзывы</a>
        <a href="">Тарифы</a>
        <a href="">API</a>
        <a href="">Вопросы</a>
        <a href="">Блог</a>
      </div>
      <div className='navbar-button'>
        <button>Авторизация</button>
      </div>

    </div>
  )
}

export default Navbar