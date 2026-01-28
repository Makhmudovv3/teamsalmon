import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import "./Section2.css";

import ru from "../../assets/ru.png";
import time from "../../assets/time.png";
import security from "../../assets/security.png";
import card from "../../assets/card.png";

const Section2 = () => {
  return (
    <section className='section2-container'>
      <h1>Как работает Chad?</h1>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 4, spaceBetween: 24 }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='card1'>
            <img src={ru} alt="RU" />
            <h4>Поддерживает русский <br /> язык и интерфейс</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='card1'>
            <img src={time} alt="Time" />
            <h4>Быстрые ответы без очереди <br /> и остановок на час</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='card1'>
            <img src={security} alt="Security" />
            <h4>Доступ без VPN</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='card1'>
            <img src={card} alt="Card" />
            <h4>Не нужен номер телефона <br /> и иностранная карта</h4>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Section2;