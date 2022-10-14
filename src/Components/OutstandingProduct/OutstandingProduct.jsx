import React, { useState } from "react";
import BuyALotOutstanding from "./BuyALotOutstanding";
import SaleOutstanding from "./SaleOutstanding";
import saleBaner from "../../assets/image/saleBaner.png";

const OutstandingProduct = ({ data: products }) => {
  const [isSale, setIsSale] = useState(true);
  return (
    <div className="px-4 mt-5 md:mt-[60px]">
      <div className="flex md:items-center flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl text-[#b61c0b]">Sản phẩm nổi bật</h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <button
            className="px-4 py-2 border border-black rounded-3xl text-sm  font-semibold"
            style={{
              backgroundColor: isSale ? "#b61c0b" : "#fff",
              borderColor: isSale ? "#b61c0b" : "#000",
              color: isSale ? "#fff" : "#000",
            }}
            onClick={() => setIsSale(true)}
          >
            Sản phẩm khuyến mãi
          </button>
          <button
            className="px-4 py-2 border border-black rounded-3xl text-sm  font-semibold"
            style={{
              backgroundColor: !isSale ? "#b61c0b" : "#fff",
              borderColor: !isSale ? "#b61c0b" : "#000",
              color: !isSale ? "#fff" : "#000",
            }}
            onClick={() => setIsSale(false)}
          >
            Sản phẩm được mua nhiều
          </button>
        </div>
      </div>
      <div className="mt-8 flex justify-between gap-7">
        <img src={saleBaner} alt="" className="hidden md:block" />
        <div>
          {isSale ? (
            <SaleOutstanding data={products?.data?.items} />
          ) : (
            <BuyALotOutstanding data={products?.data?.items} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OutstandingProduct;
