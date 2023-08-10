

import Title4 from '../Title4/Title';
import './style.css';

import Button3 from '../Button3/Button';




const Section5 = () => {
  return (
    <>
      
          
        <div className="contacts">
          <div className="container">
            
          <div className="contacts__inner">
          <div className="contacts__content">
             <Title4/>
            
            <ul className="contacts__list">
              <li className="contacts__item">
                <p className="contacts__item-title">Адрес</p>
                <p className="contacts__item-text">Киев, Подол <br /> ул. Константиновская, д.71</p>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Время работы</p>
                <p className="contacts__item-text"> Пн-Сб: с 9:00 до 19:00, <br /> Вс: выходной</p>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Телефон</p>
                <p className="contacts__item-text">+38 (050) 555 66 77</p>
              </li>
            </ul>

          </div>
          
          <form className="contacts__form">
            <Title4 />
            <input type="text" placeholder='Как Вас зовут?'/>
            <input type="text" placeholder='Как Вас зовут?' />
            <Button3 className="btn3" />
          </form>
            </div>
          </div>
       </div> 
     
      
     
    

    </>
  );
}

export default Section5;