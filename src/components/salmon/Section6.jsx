import React from 'react'
import './Section6.css'
import { CiCircleCheck } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";

const Section6 = () => {
  return (
    <>
    <div>
      <h1 className='sec55'>Выберите тарифный план</h1>
    </div>

    <div className="sec66">
       <div className="sec6">
        <h2>Тариф PRO за 1 ₽ <br />1  месяц</h2>
        <h3><CiCircleCheck className="sec56"  />Доступ без VPN</h3>
        <h3><CiCircleCheck className="sec56"  />Не нужен номер <br /> телефона <br />
и иностранная карта</h3>
        <h3><CiCircleCheck  className="sec56" />Безлимит GPT 3,5 Turbo</h3>
        <h3><CiCircleCheck className="sec56"  />25 запросов в день к <br /> Midjourney</h3>
        <h3><CiCircleCheck className="sec56"  />25 запросов в день к GPT4</h3>
        <h3><AiFillCloseCircle className="sec57" />Доступ к Api GPT и <br /> Midjourney</h3>
        <button>Выбрать</button>
       </div>
       <div className="sec67">
        <h2>Тариф PRO за 1 ₽ <br />1  месяц</h2>
        <h3><CiCircleCheck  className="sec56" />Доступ без VPN</h3>
        <h3><CiCircleCheck  className="sec56" />Не нужен номер <br /> телефона <br />
и иностранная карта</h3>
        <h3><CiCircleCheck  className="sec56" />Безлимит GPT 3,5 Turbo</h3>
        <h3><CiCircleCheck  className="sec56" />25 запросов в день к <br /> Midjourney</h3>
        <h3><CiCircleCheck  className="sec56" />25 запросов в день к GPT4</h3>
        <h3><AiFillCloseCircle className="sec57" />Доступ к Api GPT и <br /> Midjourney</h3>
       
         <button>Выбрать</button>
          <h4>Первый месяц за 1 рубль далее <br /> по 599₽ в месяц</h4>
       </div>
       <div className="sec6">
        <h2>Тариф PRO за 1 ₽ <br />1  месяц</h2>
        <h3><CiCircleCheck  className="sec56" />Доступ без VPN</h3>
        <h3><CiCircleCheck  className="sec56" />Не нужен номер <br /> телефона <br />
и иностранная карта</h3>
        <h3><CiCircleCheck  className="sec56" />Безлимит GPT 3,5 Turbo</h3>
        <h3><CiCircleCheck  className="sec56" />25 запросов в день к <br /> Midjourney</h3>
        <h3><CiCircleCheck  className="sec56" />25 запросов в день к GPT4</h3>
        <h3><AiFillCloseCircle className="sec57" />Доступ к Api GPT и <br /> Midjourney</h3>
         <button>Выбрать</button>
       </div>

    </div>
    </>
  )
}

export default Section6