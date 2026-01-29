import React from 'react';
import { CiCircleCheck } from "react-icons/ci";
import img1 from '../../assets/img1.png';
import './Section5.css';

const Section5 = () => {
  return (
    <section className="section-container">
      <h1 className='sec55'>API Midjourney и ChatGPT</h1>

      <div className='sec5'>
        <div className='sec5-content'>
          <h2>Интегрируйте ChatGPT и Midjourney <br /> в ваши проекты, пишите плагины!</h2>

          <div className="feature-item">
            <CiCircleCheck className="sec56" />
            <div className="feature-text">
              <h3>Настоящий Midjourney 5.3</h3>
              <p>- 0.2 копейки за каждый запрос</p>
            </div>
          </div>

          <div className="feature-item">
            <CiCircleCheck className="sec56" />
            <div className="feature-text">
              <h3>Настоящий ChatGPT</h3>
              <p>- 0.2 копейки за каждый запрос</p>
            </div>
          </div>

          <h4 className="doc-link">Смотреть документацию</h4>
        </div>

        <div className='sec5-image'>
          <img src={img1} alt="AI Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Section5;