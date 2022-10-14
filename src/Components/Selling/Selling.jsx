import React from "react";
import { useCurrentView } from "../../hooks/useCurrentView";
import Product from "../Common/Product";
import { Swiper, SwiperSlide } from "swiper/react";

const Selling = ({ data: products }) => {
  const { isMobile } = useCurrentView();
  return (
    <div className="mt-[60px]">
      <h1 className="text-2xl text-[#b61c0b] mb-8">Sản phẩm bán chạy</h1>
      <Swiper slidesPerView={isMobile ? 2 : 5} spaceBetween={10}>
        {products?.data?.items &&
          products?.data?.items?.map((item) => (
            <SwiperSlide key={item.Code}>
              <Product data={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Selling;
