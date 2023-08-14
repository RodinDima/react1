
import Title from '../Title/Title';
import './style.css';
import Button2 from '../ButtonServices/ButtonServices';
import BtnServices from '../ButtonServices/ButtonServices';



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
					  			<h3>Почему ввоз авто из США?</h3>
				  				<p>Мы сравнили рынки США с Европейскими и поняли, что покупка автомобиля в Америке выгоднее в несколько раз, как бы парадоксально это не звучало. Это вызвано продуманной логистикой, уровнем развития сервисов по оцениванию состояния авто и самим процессом покупки автомобиля.
				  				</p>
				  				<p>Большинство граждан США берут автомобиль в лизинг на несколько лет и все время эксплуатации сама лизинговая компания занимается постоянным ТО автомобиля, вследствие чего, машины из США – один из лучших выборов для автолюбителей Украины.</p>
					</div>		  
				  	<div className="box2">
					  			<h3>Из-за чего такая низкая цена?</h3>
				  				<p>Битые автомобили из США выкупаются с аукционов страховых компаний. На этих аукционах машина теряет половину цены даже из-за минимальных повреждений. Если учитывать денежные затраты, а именно выкуп, доставку, таможню и ремонт, то цена аналогичного по состоянию автомобиля в Украине будет выше на 35-50%, а новые будут стоить космических денег.</p>
					</div>		  
				  </div>
				  <div className="right">
					  <ol className="list">
						  <li className="list__item">
							  <div className="list__item-title">Покупка авто</div>
							  <div className="list__item-text">Подбор автомобиля и экспертная проверка</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Доставка морем</div>
							  <div className="list__item-text">Расчет оптимальной стоимости доставки авто</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Растаможка авто</div>
							  <div className="list__item-text">Прохождение таможенного оформления (2-3 дня)</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Ремонт авто</div>
							  <div className="list__item-text">Комплексный ремонт автомобиля на  СТО</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Сертификация</div>
							  <div className="list__item-text">Услуга предоставляется по желанию</div>
						  </li>
						  <li className="list__item">
							  <div className="list__item-title">Постановка на учет</div>
							  <div className="list__item-text">Оформление автомобиля в Украине</div>
						  </li>
					  </ol>
				  </div>

				
				  
				
				
				  </div>
					<BtnServices/>
				</div>
				
			</section>
		
	 </>
  );
}

export default Section2;