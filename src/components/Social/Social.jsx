import './style.css';
import { ReactComponent as Instagram } from '../Section1/image/instagram.svg';
import { ReactComponent as Telegram } from '../Section1/image/telegram.svg';
import { ReactComponent as Whatsapp } from '../Section1/image/whatsapp.svg';
import { ReactComponent as Facebook } from '../Section1/image/facebook.svg';


const Social = () => {
  return (
	 <>
		  <div className="social header__social">
			  <Instagram />
			  <Telegram />
				<Whatsapp />
				<Facebook />
		</div>

	 </>
  );
}

export default Social