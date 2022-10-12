import React from "react";
import { useCurrentView } from "../../hooks/useCurrentView";
import ProductSlide from "../Slider/ProductSlide";

const Selling = () => {
  const {isMobile} = useCurrentView()
  return (
    <div className="mt-[60px]">
      <h1 className="text-2xl text-[#b61c0b] mb-8">Sản phẩm bán chạy</h1>
      <ProductSlide perView={isMobile?2:5}/>
    </div>
  );
};

export default Selling;
