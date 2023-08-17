
import React from 'react';
import Title3 from '../Title3/Title';

import Infinity from './image/infinity.png';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination";

import 'swiper/css';
import './style.css';



const SectionSlider = () => {
  return (
    <>
      <section className="Slider">
        <div className="slider__container">
          <Title3 />
          <div className="slider__content">
            <Swiper
              slidesPerView={3}
              spaceBetween={20} // проміжок між слайдами
              modules={[Navigation]}
              modules={[Pagination]} // додаткові кнопки для навігації
              pagination={{ type: 'bullets', clickable: true, }}
              navigation
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  
                  
                  560: {
                    slidesPerView: 2,
                  },

                  830: {
                    slidesPerView: 2,
                  },
                  1238: {
                    slidesPerView: 3,
                  },
                  // Додавайте інші брейкпоінти за потреби
                }}
               
              
           
               
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