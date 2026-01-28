import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Grid } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid'; 
import "./Section4.css";

import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";
import a5 from "../../assets/a5.png";
import a6 from "../../assets/a6.png";
import a7 from "../../assets/a7.png";

const Section4 = () => {
  return (
    <div className='section4-container'>
      <h1>Сообщество и отзывы</h1>
      <h5>Поддержка, обновления и отзывы о сервисе в Telegram чате</h5>

      <Swiper
        modules={[Pagination, Grid]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          950: {
            slidesPerView: 3,
            grid: { rows: 2, fill: 'row' }, 
            allowTouchMove: false,
          }
        }}
        className="section4-swiper"
      >
        <SwiperSlide>
          <div className='section4-card1'>
            <div className='section4-img'>
              <img src={a2} alt="" />
              <div className='section4-text'>
                <h4>Вита</h4>
                <h6>@wintervi</h6>
              </div>
            </div>
            <p>Спасибо за бот! Использовала для <br />
              копирайта в соцсетях, подкинул классные <br />
              идеи для рубрик) Работает быстрее, чем <br />
              обычный и не тупит, так как не нужен VPN</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='section4-card1'>
            <div className='section4-img'>
              <img src={a3} alt="" />
              <div className='section4-text'>
                <h4>Данил</h4>
                <h6>@stllgeekin</h6>
              </div>
            </div>
            <p>Реально крутой бот!!! Парился с научкой <br />
              пол года, покупал турецкую карту, для <br />
              регистрации, потом переводил с <br />
              английского... А тут, быстро, без очередии <br />
              без всяких заморочек!</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='section4-card1'>
            <div className='section4-img'>
              <img src={a4} alt="" />
              <div className='section4-text'>
                <h4>Денис</h4>
                <h6>@denisshvts</h6>
              </div>
            </div>
            <p>Пользовался для проги в универе на python 
              все работает четко, спасибо</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='section4-card1'>
            <div className='section4-img'>
              <img src={a5} alt="" />
              <div className='section4-text'>
                <h4>Миша</h4>
                <h6>@dancerflexerr</h6>
              </div>
            </div>
            <p>Крутяк! Юзаю, чтобы писать код, для вуза <br />
              функционала хватает. Поддерживает <br />
              разные языки программирования. Нет <br />
              проблем с регистрацией, не нужна фейк симка</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='section4-card1'>
            <div className='section4-img'>
              <img src={a6} alt="" />
              <div className='section4-text'>
                <h4>Маша</h4>
                <h6>@solo_maa</h6>
              </div>
            </div>
            <p>Суперский продукт. Упрощает множество <br />
              задач. Это станет максимально  <br />
              комфортным механизмом для тех, кто все <br />
              время откладывал мороку с регистрацией <br />
              на оригинальном сайте.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='section4-card1'>
            <div className='section4-img'>
              <img src={a7} alt="" />
              <div className='section4-text'>
                <h4>Саша</h4>
                <h6>@orthdxbully</h6>
              </div>
            </div>
            <p>Очень быстро и удобно все работает, рад <br />
              что теперь не нужно париться с VPN)! <br />
              Работает быстрее чем оригинальный и на <br />
              русском ответы получаются на много лучше!</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='section4-mobile-btn'>
        <button>Посмотреть отзывы</button>
      </div>
    </div>
  );
}

export default Section4;