import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCurrentView } from "../../hooks/useCurrentView";
import Product from "../Common/Product";

const SaleSlide = ({ data: products }) => {
  const { isMobile } = useCurrentView();
  return (
    <div className="mt-5 md:mt-14 bg-[#b61c0b] p-4">
      <div className="flex items-center gap-3 text-white">
        <h1 className="text-xl">CHÀO ĐÓN HÈ, SALE TUNG NÓC</h1>
        <img
          src="https://sushiway.com.vn/wp-content/uploads/2022/07/hotgif.gif"
          alt=""
        />
      </div>
      <div className="mt-[10px] mb-[5px] flex items-center text-white">
        <p className="text-xs md:text-[13px] mr-5 mb-2">
          Siêu sale SỐC lên tới 50%!!
        </p>
        <p className="text-xs md:text-[13px] mr-5 mb-2">
          HOT! Sushi đồng giá 20k
        </p>
        <p className="text-xs md:text-[13px] mr-5 mb-2">Sale trong ngày</p>
      </div>
      <Swiper slidesPerView={isMobile ? 2 : 6} spaceBetween={10}>
        {products?.data &&
          products?.data?.map((item, index) => (
            <SwiperSlide>
              <Product key={index} data={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SaleSlide;
