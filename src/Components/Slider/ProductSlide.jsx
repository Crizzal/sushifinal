import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../Common/Product";

const ProductSlide = ({ perView, data: product }) => {
  return (
    <div>
      <Swiper slidesPerView={perView} spaceBetween={10}>
        {Array(20)
          .fill(0)
          .map((item, index) => (
            <SwiperSlide>
              <Product key={index} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductSlide;
