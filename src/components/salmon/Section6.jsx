import React from 'react';
import './Section6.css';
import { CiCircleCheck } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoWarningOutline } from "react-icons/io5";

const Section6 = () => {
  return (
    <section className="section6-container">
      <h1 className='sec55'>Выберите тарифный план</h1>

      <div className="sec66">

        <div className="pricing-card">
          <h2>Тариф PRO за 1 ₽ <br /><span>1 месяц</span></h2>
          <div className="features-list">
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Доступ без VPN</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Не нужен номер телефона и иностранная карта</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Безлимит GPT 3,5 Turbo</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>25 запросов в день к Midjourney</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>25 запросов в день к GPT4</p></div>
            <div className="feature-row"><AiFillCloseCircle className="icon-close" /><p>Доступ к Api GPT и Midjourney</p></div>
          </div>
          <button className="select-btn">Выбрать тариф</button>
        </div>

        <div className="pricing-card featured">
          <div className="badge">Чаще всего выбирают</div>
          <h2>Тариф PRO за 1 ₽ <br /><span>1 месяц</span></h2>
          <div className="features-list">
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Доступ без VPN</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Не нужен номер телефона и иностранная карта</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Безлимит GPT 3,5 Turbo</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>25 запросов в день к Midjourney</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>25 запросов в день к GPT4</p></div>
            <div className="feature-row"><AiFillCloseCircle className="icon-close" /><p>Доступ к Api GPT и Midjourney</p></div>
          </div>
          <button className="select-btn">Выбрать тариф</button>
          <div className="card-footer">
            <IoWarningOutline className="warning-icon" />
            <p>Первый месяц за 1 рубль далее по 599₽ в месяц</p>
          </div>
        </div>

        <div className="pricing-card">
          <h2>Тариф PRO за 1 ₽ <br /><span>1 месяц</span></h2>
          <div className="features-list">
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Доступ без VPN</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Не нужен номер телефона и иностранная карта</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>Безлимит GPT 3,5 Turbo</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>25 запросов в день к Midjourney</p></div>
            <div className="feature-row"><CiCircleCheck className="icon-check" /><p>25 запросов в день к GPT4</p></div>
            <div className="feature-row"><AiFillCloseCircle className="icon-close" /><p>Доступ к Api GPT и Midjourney</p></div>
          </div>
          <button className="select-btn">Выбрать тариф</button>
        </div>

      </div>
    </section>
  );
}

export default Section6;