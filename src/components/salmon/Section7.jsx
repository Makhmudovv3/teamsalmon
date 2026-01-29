import React from "react";
import "./Section7.css";
import { FaChevronDown } from "react-icons/fa";

const Section7 = () => {
  return (
    <>
      <div>
        <h1 className="sec55">Часто задаваемые вопросы</h1>
      </div>
      <div className="sec77">
        <div className="sec7">
          <h2>
            Как и на какой версии работает Chad? <FaChevronDown />
          </h2>
        </div>
        <div className="sec7">
          <h2>
            Что будет, если израсходуются лимит слов раньше <br />
            окончания месяца? <FaChevronDown />
          </h2>
        </div>
        <div className="sec7">
          <h2>
            Как считается количество слов, указанное в тарифах?{" "}
            <FaChevronDown />
          </h2>
        </div>
        <div className="sec7">
          <h2>
            Почему сервис платный? <FaChevronDown />
          </h2>
        </div>
        <div className="sec7">
          <h2>
            Если у меня возникнут вопросы или сложности, мне помогут?{" "}
            <FaChevronDown />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Section7;
