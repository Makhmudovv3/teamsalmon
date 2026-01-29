import React from "react";
import "./Section7.css";
import { FaChevronDown } from "react-icons/fa";

const Section7 = () => {
  return (
    <section className="faq-container">
      <h1 className="sec55">Часто задаваемые вопросы</h1>

      <div className="sec77">
        <div className="sec7">
          <h2>Как и на какой версии работает Chad? <FaChevronDown className="faq-icon" /></h2>
        </div>

        <div className="sec7">
          <h2>Что будет, если израсходуются лимит слов раньше окончания месяца? <FaChevronDown className="faq-icon" /></h2>
        </div>

        <div className="sec7">
          <h2>Как считается количество слов, указанное в тарифах? <FaChevronDown className="faq-icon" /></h2>
        </div>

        <div className="sec7">
          <h2>Почему сервис платный? <FaChevronDown className="faq-icon" /></h2>
        </div>

        <div className="sec7">
          <h2>Если у меня возникнут вопросы или сложности, мне помогут? <FaChevronDown className="faq-icon" /></h2>
        </div>
      </div>
    </section>
  );
};

export default Section7;