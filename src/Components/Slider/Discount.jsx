import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const Discount = () => {
  return (
    <div className="hidden w-[990px] rounded-lg bg-[#F1F1F1] md:flex items-center gap-3 p-[15px] mt-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
      >
        {Array(9)
          .fill(0)
          .map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-[10px] rounded-lg cursor-pointer">
                <h2 className="text-sm font-bold mb-2 ">NHẬP MÃ: FREESHIP0D</h2>
                <p className="text-xs text-[#727272]">
                  Áp dụng vào khung giờ 14h - 17h cho giá trị đơn hàng bất ký
                </p>
                <div className="flex justify-between items-center mt-[10px]">
                  <button className="px-4 py-2 text-xs text-white bg-[#cd3344] rounded-3xl">Sao chép</button>
                  <p className="text-xs text-[#2e72d2]">Điều kiện</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Discount;
