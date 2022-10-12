import React from "react";
import Discount from "../Components/Slider/Discount";
import BannerSlide from "../Components/Slider/BannerSlide";
import SaleSlide from "../Components/Slider/SaleSlide";
import Category from "../Components/Category/Category";
import OutstandingProduct from "../Components/OutstandingProduct/OutstandingProduct";
import Selling from "../Components/Selling/Selling";
import { SwiperSlide, Swiper } from "swiper/react";
import SideDishes from "../Components/SideDishes/SideDishes";
import News from "../Components/News/News";

const HomePage = () => {
  return (
    <div className="w-full md:max-w-[1360px] m-auto md:pt-4">
      <div className="flex justify-end">
        <BannerSlide />
      </div>
      <div className="flex justify-end">
        <Discount />
      </div>
      <div className="px-4 md:px-0">
        <SaleSlide />
        <Category />
        <OutstandingProduct />
        <Selling />
        <div className="mt-[60px] hidden md:block">
          <Swiper slidesPerView={3} spaceBetween={20}>
            <SwiperSlide>
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/04/tintuc-sushiway-1-min-e1656003988704.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/04/tintuc-sushiway-2-min.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/04/tintuc-sushiway-3-min.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <SideDishes />
        <div className="mt-[60px] flex flex-col md:flex-row gap-3 md:gap-0 justify-evenly">
          <div className="flex items-center gap-3">
            <img
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/icon-ssw-2-2.png"
              alt=""
            />
            <p className="text-2xl text-[#B61C0B] font-semibold">
              Giao hàng đúng giờ
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/icon-ssw-1-1-1.png"
              alt=""
            />
            <p className="text-2xl text-[#B61C0B] font-semibold">
              Ưu đãi mỗi ngày
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/icon-ssw-3-1-1.png"
              alt=""
            />
            <p className="text-2xl text-[#B61C0B] font-semibold">
              Tươi ngon mỗi ngày
            </p>
          </div>
        </div>
        <News />
      </div>
    </div>
  );
};

export default HomePage;
