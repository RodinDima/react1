

import './style.css';
import { ReactComponent as Vector } from '../Section1/image/vector.svg';
import Social from '../Social/Social';




const Section6 = () => {
  return (
    <>
      
        <div className="footer">
          <div className="container">
                  
            <div className="footer__content">
                  <Vector />
                  <Social />
                  <div className="politic">
                    <a href="#">Политика конфиденциальности</a>
                  </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default Section6;