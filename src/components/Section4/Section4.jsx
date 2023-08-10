
import Title3 from '../Title3/Title';
import './style.css';
import  Infinity  from './image/infinity.png';




const Section4 = () => {
  return (
    <>
      <div className="slider">
        <div className="container">
          <Title3 />
          <div className="slider__content">
            <ul className="slider__list">
              <li className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Экономия 4500 $</div>
              </li>
              <li className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Экономия 5500 $</div>
              </li>
              <li className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Экономия 4500 $</div>
              </li>
            </ul>
          </div>

         </div>
        
      </div>
     
      
     
    

    </>
  );
}

export default Section4;