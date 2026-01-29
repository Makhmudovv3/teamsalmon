import React from 'react'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div>
        <img src={img2} alt="" />
      </div>
      <h3>Что может</h3>
      <h3>Как работает</h3>
      <h3>Отзывы</h3>
      <h3>Тарифы</h3>
      <h3>Для бизнеса</h3>
      <h3>Вопросы</h3>
      <h3>Блог</h3>
      <h4>hello@chadgpt.ru</h4>
      <div>
        <img src={img3} alt="" />
        
      </div>
      <div>
<img src={img4} alt="" />
      </div>
    </div>

    <div className='footer1'>
      <div>
        <p>При использовании сервиса вы соглашаетесь c правилами <br /> использования. Мы не имеем отношения к OpenAI, не <br /> распространяем их ПО. Условия использования Chad.</p>
      </div>
      <div>
        <p className='sss'>© 2022 — 2023 «Chad»</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
    </>
  )
}

export default Footer