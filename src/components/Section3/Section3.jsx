
import './style.css';
import  AutoMy  from './image/auto-my.png';

import Title2 from '../Title2/Title';


const Section3 = () => {
  return (
    <>
      <section className="advances">
        <div className="advances__container">
          <div className="advances__inner">
          <img className='AutoMy' src={AutoMy} alt="AutoMy" />
          <div className="advances__content">
            <Title2 />
            <div className="advances__list">
              <div className="advances__item">
                <p className="advances__item-num">650</p>
                <p className="advances__item-title">успішно доставлених авто</p>
                <p className="advances__item-text">великий досвід пригону автомобілів зі США під ключ, всі клієнти залишилися задоволеними на 100%</p>
              </div>
              <div className="advances__item">
                <p className="advances__item-num">5</p>
                <p className="advances__item-title">років на ринку України</p>
                <p className="advances__item-text">Працюємо по всій території України, працюємо за договором із клієнтами</p>
              </div>
              <div className="advances__item">
                <p className="advances__item-num">100 %</p>
                <p className="advances__item-title">довіри клієнтів
</p>
                <p className="advances__item-text">Онлайн звітність. Ви завжди знаєте статус підбору вашого авто. Фото та відео звіт</p>
              </div>
            </div>

          </div>
            </div>

          </div>
        

        
        




      </section>
      
    

    </>
  );
}

export default Section3;