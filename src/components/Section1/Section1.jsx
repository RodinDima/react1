import './reset.css';
import './style.css';
import { ReactComponent as Auto } from './image/auto.svg';
import { ReactComponent as Vector } from './image/vector.svg';
import Button from '../Button/Button';
import Social from '../Social/Social';


const Section1 = () => {
  return (
    <>
      <header>
        <div className="container">
          
          <div className="header__top">
            <Vector />
            <a className="tel" href="tel:">+38 (050) 555 66 77</a>
          </div>
          <div className="header__content">
            <h1>авто из сша “под ключ”</h1>
            <h2>ЗАКАЖИ СЕБЕ АВТО ИЗ США С ВЫГОДОЙ ДО 40%</h2>
            <p>Подбор, покупка, доставка, растаможка, ремонт, оформление по договору</p>
          </div>
          <Button />
          <Social />
        </div>
        <div className="header__img"><Auto /></div>

       </header>
        
      
       <div></div>
       <div className="box"></div>

    </>
  );
}

export default Section1;