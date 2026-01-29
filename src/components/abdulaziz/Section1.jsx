import React from 'react'
import "../abdulaziz/Section1.css"
import a1 from "../../assets/a1.png"

const Section1 = () => {
  return (
    <div className='section1-container'>
      <div className='section1-text'>
        <h1>ZlonGPT - нейросети <br />
          онлайн бесплатно</h1>
        <p>Сервис ZionGPT разработан профессионалами, для профессионалов. <br />
          ChatGPT. Midjourney, и другие нейросети в одном сервисе на Русском языке,
          без VPN с поддержкой Русских банковских карт!</p>
        <div className='section1-button'>
        <button>Начать бесплатно</button>
        <h4>Попробуй бесплатно!</h4>
        </div>
      </div>

      <div className='section1-img'>
        <img src={a1} alt="" />

      </div>
    </div>
  )
}

export default Section1