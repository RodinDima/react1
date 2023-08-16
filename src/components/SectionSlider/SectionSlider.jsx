
import React from 'react';
import Title3 from '../Title3/Title';
import './style.css';
import Infinity from './image/infinity.png';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




const SectionSlider = () => {
  return (
    <>
      <section className="Slider">
        <div className="slider__container">
          <Title3 />
          <div className="slider__content">
            <Swiper
              slidesPerView={3}
              spaceBetween={10} // проміжок між слайдами
              modules={[Navigation]}
              modules={[Pagination]} // додаткові кнопки для навігації
              pagination={{ clickable: true }} //
              pagination={{ type: 'bullets', clickable: true }}
               
               
              >
            

            <SwiperSlide>
              <div className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Економія 4500 $</div>
              </div>
              </SwiperSlide>
             <SwiperSlide>
              <div className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Економія 4500 $</div>
              </div>
              </SwiperSlide>
             <SwiperSlide>
              <div className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Економія 4500 $</div>
              </div>
              </SwiperSlide>
            <SwiperSlide>
              <div className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Економія 4500 $</div>
              </div>
              </SwiperSlide>
            <SwiperSlide>
              <div className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Економія 4500 $</div>
              </div>
              </SwiperSlide>
            <SwiperSlide>
              <div className="slider__item">
                <img className='Infinity' src={Infinity} alt="Infinity" />
                <div className="slider__title">INFINITI QX50 2016 г.</div>
                <div className="slider__price">Економія 4500 $</div>
              </div>
             </SwiperSlide>
          </Swiper>
           
          </div>

         </div>
        
      </section>
     
      
     
    

    </>
  );
}

export default SectionSlider;