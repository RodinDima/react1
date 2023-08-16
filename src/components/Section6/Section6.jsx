

import './style.css';
import { ReactComponent as Vector } from '../Section1/image/vector.svg';
import Social from '../Social/Social';
import SocialFooter from '../SocialFooter/Social';




const Section6 = () => {
  return (
    <>
      
        <footer className="footer">
          <div className="footer__container">
                  
            <div className="footer__content">
                  <Vector />
                  <SocialFooter />
                  <div className="politic">
                    <a href="#">Політика конфіденційності</a>
            </div>
           
            </div>
          </div>
        </footer>
       
    </>
  );
}

export default Section6;