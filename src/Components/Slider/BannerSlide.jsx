import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const BannerSlide = () => {
 
  return (
    <div className='w-full md:w-[990px] h-[200px] md:h-[500px] cursor-pointer '>
        <Swiper>
            <SwiperSlide>
                <img className='w-full h-[200px] md:h-[500px] object-cover' src="https://sushiway.com.vn/wp-content/uploads/2022/04/tintuc-sushiway-1-min-e1656003988704.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-[200px] md:h-[500px] object-cover' src="https://sushiway.com.vn/wp-content/uploads/2022/04/tintuc-sushiway-2-min.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-[200px] md:h-[500px] object-cover' src="https://sushiway.com.vn/wp-content/uploads/2022/04/tintuc-sushiway-3-min.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
        
    </div>
  )
}

export default BannerSlide