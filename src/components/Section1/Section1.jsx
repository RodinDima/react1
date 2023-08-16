import './reset.css';
import './style.css';
import { ReactComponent as Auto } from './image/auto.svg';
import { ReactComponent as Vector } from './image/vector.svg';
import Social from '../Social/Social';
import Buttonx from '../Buttonx/Buttonx';


const Section1 = () => {
  return (
    <>
      <header>
        <div className="header__container">
          
          <div className="header__top">
            <Vector />
            <a className="tel" href="tel:">+38 (050) 555 66 77</a>
          </div>
          <div className="header__content">
            <h1>авто з США "під ключ"”</h1>
            <h2>Замов собі авто з вигодою до 40%</h2>
            <p>Підбір, купівля, доставка, розмитнення, ремонт, оформлення за договором</p>
            <div className="header__img"><Auto /></div>
            <Buttonx
              buttonText="Консультація експерта"
              onClick={() => { /* Обробник події */ }}
              className="button header-button" // Додатковий клас
            />
            
            
            {/*<Button />*/}
          
          
          </div>
          
          <Social />
        
        </div>
        

       </header>
        
      
      
       

    </>
  );
}

export default Section1;