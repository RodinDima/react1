

import Title4 from '../Title4/Title';
import './style.css';


import Title5 from '../Title5/Title';

import Buttonx from '../Buttonx/Buttonx';




const Section5 = () => {
  return (
    <>
      
          
        <section className="contacts">
          <div className="contacts__container">
            
          <div className="contacts__inner">
          <div className="contacts__content">
             <Title4/>
            
            <ul className="contacts__list">
              <li className="contacts__item">
                <p className="contacts__item-title">Адреса</p>
                <p className="contacts__item-text">Київ, Подол <br /> вул. Костянтинівська, б.71</p>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Час роботи
</p>
                <p className="contacts__item-text"> Пн-Сб: з 9:00 до 19:00, <br /> Нд: вихідний</p>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Телефон</p>
                <p className="contacts__item-text">+38 (050) 555 66 77</p>
              </li>
            </ul>

          </div>
          
                <div className='contacts__box'>
                  <form className="contacts__form">
                    <Title5 />
                    <input className='contacts__input' type="text" placeholder='Як Вас звати?'/>
                    <input className='contacts__input' type="text" placeholder='Ваш номер телефона' />
                     <Buttonx
                      buttonText="Залишити заявку"
                      onClick={() => { /* Обробник події */ }}
                      className="button header-button" // Додатковий клас
                    />
                  </form>
                </div>
            
            </div>
          </div>
       </section> 
     
      
     
    

    </>
  );
}

export default Section5;