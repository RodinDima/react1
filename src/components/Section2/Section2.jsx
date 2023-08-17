
import Title from '../Title/Title';
import './style.css';
import Buttonx from '../Buttonx/Buttonx';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';



const Section2 = () => {	
  return (
	 <>
		 <section className="services">	  
		  <div className="services__container">
			  
			  {/*<h2 className='title services__title'>НАШИ УСЛУГИ</h2>*/}
			  <Title />
			 		  	  
			  	<div className="services__content">
				
				  <div className="left">
				  	<div className="box1">
					  			<h3>Чому ввезення авто із США?</h3>
				  				<p>Ми порівняли ринки США з Європейськими і зрозуміли, що покупка автомобіля в Америці вигідніша в кілька разів, як би парадоксально це не звучало. Це викликано продуманою логістикою, рівнем розвитку сервісів щодо оцінювання стану авто та самим процесом купівлі автомобіля.
				  				</p>
				  				<p>
						Більшість громадян США беруть автомобіль у лізинг на кілька років і весь час експлуатації сама лізингова компанія займається постійним ТО автомобіля, внаслідок чого машини зі США – один із найкращих виборів для автолюбителів України.</p>
					</div>		  
				  	<div className="box2">
					  			<h3>Чому така низька ціна?</h3>
				  				<p>Биті автомобілі із США викуповуються з аукціонів страхових компаній. На цих аукціонах машина втрачає половину ціни навіть через мінімальні пошкодження. Якщо враховувати грошові витрати, а саме викуп, доставку, митницю та ремонт, то ціна аналогічного за станом автомобіля в Україні буде вищою на 35-50%, а нові коштуватимуть космічні гроші.</p>
					</div>		  
				</div>
				
				  <div className="right">
					  <ol className="list">
						  <li className="list__item">
							  <div className="list__item-title">Купівля авто</div>
							  <div className="list__item-text">Підбір автомобіля та експертна перевірка</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Доставка морем</div>
							  <div className="list__item-text">Розрахунок оптимальної вартості доставки авто</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Розмитнення авто</div>
							  <div className="list__item-text">Проходження митного оформлення (2-3 дні)</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Ремонт авто</div>
							  <div className="list__item-text">Комплексний ремонт автомобіля на СТО</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Сертифікация</div>
							  <div className="list__item-text">Послуга надається за бажанням</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Постановка на облік</div>
							  <div className="list__item-text">Оформлення автомобіля в Україні</div>
						  </li>
					  </ol>
				  </div>

				
				  
				
				
				  </div>
					 <Buttonx
					  buttonText="Консультація експерта"
					  onClick={() => { /* Обробник події */ }}
					  className="button header-button" // Додатковий клас
					/>
				</div>
				
			</section>
		
	 </>
  );
}

export default Section2;