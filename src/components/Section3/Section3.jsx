
import './style.css';
import  AutoMy  from './image/auto-my.png';

import Title2 from '../Title2/Title';


const Section3 = () => {
  return (
    <>
      <div className="advances">
        <div className="container">
          <div className="advances__inner">
          <img className='AutoMy' src={AutoMy} alt="AutoMy" />
          <div className="advances__content">
            <Title2 />
            <ul className="advances__list">
              <li className="advances__item">
                <p className="advances__item-num">650</p>
                <p className="advances__item-title">успешно доставленных авто</p>
                <p className="advances__item-text">большой опыт пригона автомобилей из США под ключ, все клиенты остались довольны на 100%</p>
              </li>
              <li className="advances__item">
                <p className="advances__item-num">5</p>
                <p className="advances__item-title">лет на рынке Украины</p>
                <p className="advances__item-text">Работаем по всей территории Украины, работаем по договору с клиентами</p>
              </li>
              <li className="advances__item">
                <p className="advances__item-num">100 %</p>
                <p className="advances__item-title">доверия клиентов</p>
                <p className="advances__item-text">Онлайн отчетность. Вы всегда в курсе статуса подбора вашего авто. Фото и видео отчет</p>
              </li>
            </ul>

          </div>
            </div>

          </div>
        

        
        




      </div>
      
    

    </>
  );
}

export default Section3;