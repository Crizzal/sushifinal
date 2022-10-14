import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCurrentView } from "../../hooks/useCurrentView";

const Category = () => {
  const { isMobile } = useCurrentView();
  return (
    <div className="w-full">
      <Swiper slidesPerView={isMobile ? 3 : 7}>
        <SwiperSlide>
          <a href="flex">
            <img
              className="m-auto"
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/logo-list_03.png"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="m-auto"
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/logo-list_05.png"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="m-auto"
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/logo-list_07.png"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="m-auto"
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/logo-list_09.png"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="m-auto"
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/logo-list_11.png"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="m-auto"
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/logo-list_13.png"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="m-auto"
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/logo-list_15.png"
              alt=""
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
