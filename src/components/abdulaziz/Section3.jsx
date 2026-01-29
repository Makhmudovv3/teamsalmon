import React from 'react'
import "./Section3.css"
import palet from "../../assets/palet.png"
import link from "../../assets/link.png"
import check from "../../assets/check.png"
import commit from "../../assets/commit.png"
import book from "../../assets/book.png"


const Section3 = () => {
  return (
    <div className='section3-container'>
      <div className='section3-card1'>
        <img src={palet} alt="" />
        <h3>Создавайте <br />
          контент</h3>
        <p>Создавайте <br />
          уникальные <br />
          изображения и текст <br />
          для любых <br />
          социальных сетей</p>
      </div>
      <div className='section3-card2'>
        <img src={check} alt="" />
        <h3>Экономьте <br />
          время</h3>
        <p>Экономьте ваше <br />
          время для решения <br />
          рутинных задач <br />
          с помощью готовых <br />
          шаблонов</p>
      </div>
      <div className='section3-card3'>
        <img src={book} alt="" />
        <h3>Используйте <br />
          в учебе</h3>
        <p>Ищите любую <br />
          информацию, <br />
          решайте тесты, <br />
          создавайте рефераты <br />
          в один клик</p>
      </div>
      <div className='section3-card4'>
        <img src={link} alt="" />
        <h3>Создавайте <br />
          код</h3>
        <p>Редактируйте <br />
          и создавайте любой <br />
          код, учитесь новому <br />
          и исправляйте ошибки</p>
      </div>
      <div className='section3-card5'>
        <img src={commit} alt="" />
        <h3>Улучшайте <br />
          текст</h3>
        <p>Редактируйте любой <br />
          текст, увеличивайте <br />
          оригинальность, <br />
          создавайте лучший <br />
          текст под любые <br />
          задачи</p>
      </div>



    </div>
  )
}

export default Section3